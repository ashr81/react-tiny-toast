import React, { useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { toastManager } from './toast';

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const reducer = (state, action) => {
  const { type, data } = action;
  if(type === ADD) {
    if(state.filter(i => i.code && i.code !== data.code).length) {
      return state;
    }
    return [...state, data]
  } else if(type === REMOVE) {
    return state.filter(i => i.id !== data.id)
  }
  return state;
}

const ToastContainer = () => {
  const toastRootElementId = 'toast-root-document-element'
  const [data, dispatch] = useReducer(reducer, [])
  const toastRef = useRef(null)

  const callback = (actionType, content, options) => {
    if(actionType === ADD) {
      dispatch({ type: ADD, data: { content, ...options, key: `${options.id}` }})
    }
    if(actionType === REMOVE) {
      if(options.pause) {
        dispatch({ type: REMOVE, id: options.id})
      } else {
        window.setTimeout(() => {
          dispatch({ type: REMOVE, id: options.id })
        }, options.timeout)
      }
    }
  }

  useEffect(() => {
    toastManager.subscribe(callback)
  }, [])

  useEffect(() => {
    const node = document.createElement('div')
    node.setAttribute('id', toastRootElementId)
    document.body.appendChild(node)
    toastRef.current = node;
    return () => document.body.removeChild(node)
  }, [])

  const markup = data.map(({ content, key }) => {
    return (
      <div key={key}>
        {content}
      </div>
    )
  })

  if(!toastRef.current) return null;
  return createPortal(
    markup,
    toastRef.current
  )
}

export default ToastContainer;