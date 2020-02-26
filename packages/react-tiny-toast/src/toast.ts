import { contentTypes, optionTypes, callbackFuncTypes } from './react-tiny-toast';

export const toastManager = (function() {
  let callbackFn: callbackFuncTypes;
  const manager = {
      subscribe(callback: callbackFuncTypes): void {
        callbackFn = callback;
      },
      defaultOptions() {
        return {
          delay: 0,
          timeout: 2000,
          position: "top-center"
        };
      },
      add(content: contentTypes, options: optionTypes) {
        const mergedOptions = { ...this.defaultOptions(), ...options };
        const timeoutId = window.setTimeout(() => {
          callbackFn('ADD', content, {...mergedOptions, id: timeoutId});
        }, mergedOptions.delay);
        return timeoutId;
      },
      remove(id: number) {
        callbackFn('REMOVE', null, { id })
        return true;
      }
  }
  return manager;
})();
  
const toast = {
  show: (content: contentTypes, options={}) => {
    return toastManager.add(content, options)
  },
  remove: (id: number) => {
    return toastManager.remove(id)
  }
}

export default toast;