import React, { Fragment } from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ToastContainer } from 'react-tiny-toast';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import '../index.css'

addDecorator((stories) => (
  <Fragment>
    {stories()}
    <ToastContainer />
  </Fragment>
))

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});