import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Button,  } from "reakit/Button";
import {
  toast, TOP_CENTER, TOP_LEFT, TOP_RIGHT,
  BOTTOM_CENTER, BOTTOM_LEFT, BOTTOM_RIGHT
} from 'react-tiny-toast';

storiesOf('Toast options', module)
  .add('Playaround with different toast options', () => {
    const [options, updateOptions] = useState({
      timeout: 2000,
      variant: 'success',
      pause: false,
      delay: 0,
      position: TOP_CENTER
    })
    const onClick = () => {
      const { variant, timeout, pause, delay, position } = options;
      toast.show(
        <div>Success toast which dismisses in {timeout} ms</div>,
        { timeout, pause, variant, delay, position }
      )
    }

    const onChange = (event) => {
      const { dataset: { property }, value } = event.currentTarget
      updateOptions({
        ...options,
        [property]: value
      })
    }

    const onClickPauseCheckbox = (event) => {
      updateOptions({
        ...options,
        pause: event.currentTarget.checked
      })
    }
    return (
      <div className='main-container'>
        <div className='form-container'>
          <div style={{display: 'inline-flex', marginTop: 8}}>
            <select onChange={onChange} data-property='position'>
              <option value={TOP_CENTER}>{TOP_CENTER}</option>
              <option value={BOTTOM_RIGHT}>{BOTTOM_CENTER}</option>
              <option value={TOP_LEFT}>{TOP_LEFT}</option>
              <option value={BOTTOM_LEFT}>{BOTTOM_LEFT}</option>
              <option value={TOP_RIGHT}>{TOP_RIGHT}</option>
              <option value={BOTTOM_RIGHT}>{BOTTOM_RIGHT}</option>
            </select>
            <h5 style={{margin: 0}}>Position of the toast to appear on your application.</h5>
          </div>
          <div style={{display: 'inline-flex', marginTop: 8}}>
            <input type='checkbox' checked={options.pause} onClick={onClickPauseCheckbox}/>
            <h5 style={{margin: 0}}>Pause the toast after its shown.</h5>
          </div>
          <div style={{display: 'inline-flex', marginTop: 8}}>
            <input type='number' data-property='timeout' value={options.timeout} onChange={onChange}/>
            <h5 style={{margin: 0}}>Total time the toast is active before it disappears from UI.</h5>
          </div>
          <div style={{display: 'inline-flex', marginTop: 8}}>
            <input type='number' data-property='delay' value={options.delay} onChange={onChange}/>
            <h5 style={{margin: 0}}>Delay in ms. after which the user sees this toast message.</h5>
          </div>
          <Button onClick={onClick}>Show Toast</Button>
        </div>
      </div>
    )
  })