# react-tiny-toast ![https://badgen.net/npm/v/react-tiny-toast](https://badgen.net/npm/v/react-tiny-toast) - ![https://badgen.net/bundlephobia/min/react-tiny-toast](https://badgen.net/bundlephobia/min/react-tiny-toast) - ![https://badgen.net/bundlephobia/minzip/react-tiny-toast](https://badgen.net/bundlephobia/minzip/react-tiny-toast)
Aim of this package is to keep only bundles that are critical to your application for the implementation of toast notifications.
# bundle size(Minified + Gzipped) <= 1kb
with its bundle size less than 1kb and custom toast components it add only implementation of toast, but not the styles.

# Installation
Install this package by running on your project root directory.

`yarn install react-tiny-toast`

# Usage
Once installed, render this component onto your root component.
```
import { ToastContainer } from 'react-tiny-toast';

const App = () => {
  return (
    <div>
    <ToastContainer />
    </div>
  )
}
```

once above step is done. you can call in the toast from anywhere in your application(Make sure `ToastContainer` is in your component tree).
```
import React, { useEffect } from 'react';
import { toast } from 'react-tiny-toast';

const ChildComponent = () => {
  useEffect(() => {
     toast.show('You have successfully seen the toast notification.', { timeout: 3000 })
  })
}
```

#### `toast.show` accepts two arguments
1. `string` or a valid react component which renders onto the displayed toast component.
2. `object` which accepts different options for the toast notification.

##### Accepted Options:
```js
{
  variant: 'success' | 'danger' | 'warning' | 'default',
  position: 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'bottom-center',
  delay: number, // time in milli seconds
  timeout: number, // time in mulli seconds
  uniqueCode: string | number // helps in avoiding duplicate toast message when triggered multiple times by user actions.
}
```

