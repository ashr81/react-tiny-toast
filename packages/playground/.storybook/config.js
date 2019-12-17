import React, { Fragment } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { ToastContainer } from 'react-tiny-toast'

function loadStories() {
  require('../stories');
}

addDecorator((stories) => (
    <Fragment>
        {stories()}
        <ToastContainer />
    </Fragment>
))

configure(loadStories, module)