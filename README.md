## react-tiny-toast ![https://badgen.net/npm/v/react-tiny-toast](https://badgen.net/npm/v/react-tiny-toast) - ![https://badgen.net/bundlephobia/min/react-tiny-toast](https://badgen.net/bundlephobia/min/react-tiny-toast) - ![https://badgen.net/bundlephobia/minzip/react-tiny-toast](https://badgen.net/bundlephobia/minzip/react-tiny-toast)

Aim of this package is to keep only bundles that are critical to your application for the implementation of toast notifications.

## bundle size(Minified + Gzipped) <= 1kb

with its bundle size less than 1kb and custom toast components it add only implementation of toast, but not the styles.

#### **\*\***😍😍😍 Added Typescript support 😍😍😍**\*\***

## Demo [link](https://playground.ashr81.now.sh/)

A demo is more worthier than code documentation

## Features

- Build your own custom style toast components.
- Change already existing styles.
- Toast message at multiple locations(top, top-left, top-right, bottom, bottom-right, bottom-left).
- Build your own animations by overriding existing styles using `className` property.

## Coming Soon

- Server side support

## Installation

Install this package by running on your project root directory.

`npm i react-tiny-toast`

## Usage

Once installed, render this component onto your root component and you can call `toast` method anywhere in your application(Make sure `ToastContainer` is called only once in your component tree).

```
import { ToastContainer } from 'react-tiny-toast';
import { toast } from 'react-tiny-toast';

const ChildComponent = () => {
  useEffect(() => {
     toast.show('You have successfully seen the toast notification.', { timeout: 3000 })
  }, [])
}

const App = () => {
  return (
    <div>
    <ToastContainer />
    <ChildComponent />
    </div>
  )
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
  timeout: number, // time in milli seconds
  uniqueCode: string | number // helps in avoiding duplicate toast message when triggered multiple times by user actions.
  className: string // className to customize your styles for the toast element build by package..
}
```
