var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useEffect, useReducer, useRef } from 'react';
import { createPortal } from 'react-dom';
import { toastManager } from './toast';
import './index.css';
var ADD = 'ADD';
var REMOVE = 'REMOVE';
var reducer = function (state, action) {
    var type = action.type, data = action.data;
    if (type === ADD) {
        if (state.filter(function (i) { return i.uniqueCode && i.uniqueCode === data.uniqueCode; }).length) {
            return state;
        }
        return state.concat([data]);
    }
    else if (type === REMOVE) {
        return state.filter(function (i) { return i.id !== data.id; });
    }
    return state;
};
var ToastContainer = function () {
    var toastRootElementId = 'react-tiny-toast-main-container';
    var _a = useReducer(reducer, []), data = _a[0], dispatch = _a[1];
    var toastRef = useRef(null);
    var callback = function (actionType, content, options) {
        if (actionType === ADD) {
            dispatch({ type: ADD, data: __assign({ content: content }, options, { key: "" + options.id }) });
        }
        if (options.pause && actionType === REMOVE) {
            dispatch({ type: REMOVE, data: { id: options.id } });
        }
        else if (!options.pause) {
            window.setTimeout(function () {
                dispatch({ type: REMOVE, data: { id: options.id } });
            }, options.timeout);
        }
    };
    useEffect(function () {
        toastManager.subscribe(callback);
    }, []);
    useEffect(function () {
        var node = document.createElement('div');
        node.setAttribute('id', toastRootElementId);
        document.body.appendChild(node);
        toastRef.current = node;
        return function () { return document.body.removeChild(node); };
    }, []);
    var positionMaintainer = function () {
        var mapper = {};
        data.map(function (_a) {
            var position = _a.position, rest = __rest(_a, ["position"]);
            if (position) {
                if (!mapper[position])
                    mapper[position] = [];
                mapper[position].push(rest);
            }
        });
        return mapper;
    };
    var markup = function () {
        var mapper = positionMaintainer();
        return Object.keys(mapper).map(function (position, index) {
            var content = mapper[position].map(function (_a) {
                var key = _a.key, content = _a.content, variant = _a.variant;
                if (React.isValidElement(content)) {
                    return content;
                }
                else {
                    return (React.createElement("div", { key: key, className: "toast-item toast-item-" + variant }, content));
                }
            });
            return (React.createElement("div", { key: index, className: "toast-container " + position }, content));
        });
    };
    if (!toastRef.current)
        return null;
    return createPortal(markup(), toastRef.current);
};
export default ToastContainer;
