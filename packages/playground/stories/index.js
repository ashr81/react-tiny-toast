import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from "reakit/Button";
import { toast } from 'react-tiny-toast';

storiesOf('Different toast styles', module)
  .add('Toast styles', () => {
    const onClick = (event) => {
      const { variant, timeout } = event.currentTarget.dataset;
      if(variant === 'success') {
        toast.success(<div>Success toast which dismisses in {timeout} ms</div>, { timeout })
      } else if(variant === 'error') {
        toast.error(<div>Error toast which dismisses in {timeout} ms</div>, { timeout })
      }
    }
    return (
      <div className='main-container'>
        <Button style={{color: 'white', backgroundColor: 'green'}} onClick={onClick} data-variant='success' data-timeout={5000}>Success</Button>
        <Button style={{color: 'white', backgroundColor: 'red'}} onClick={onClick} data-variant='error' data-timeout={10000}>Error</Button>
      </div>
    )
  })