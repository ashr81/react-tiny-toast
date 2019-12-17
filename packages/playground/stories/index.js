import React from 'react';
import { storiesOf } from '@storybook/react';
import { toast } from 'react-tiny-toast';

storiesOf('Different toast styles', module)
  .add('Toast styles', () => {
      toast.success(<div>This is toast message</div>)
      toast.error(<div>This is error message</div>)
  })