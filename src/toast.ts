import {
  Content,
  callbackFuncTypes,
  ToastOptionsInterface,
} from "./types/react-tiny-toast";

const defaultOptions: ToastOptionsInterface = {
  delay: 0,
  timeout: 2000,
  position: "top-center",
};
export const toastManager = (function () {
  let callbackFn: callbackFuncTypes;
  const manager = {
    subscribe(callback: callbackFuncTypes): void {
      callbackFn = callback;
    },
    add(content: Content, options: ToastOptionsInterface) {
      const mergedOptions = { ...defaultOptions, ...options };
      const timeoutId = window.setTimeout(() => {
        callbackFn("ADD", content, { ...mergedOptions, id: timeoutId });
      }, mergedOptions.delay);
      return timeoutId;
    },
    remove(id: number) {
      callbackFn("REMOVE", null, { id });
      return true;
    },
  };
  return manager;
})();

const toast = {
  show: (content: Content, options: ToastOptionsInterface) => {
    return toastManager.add(content, options);
  },
  remove: (id: number) => {
    return toastManager.remove(id);
  },
};

export default toast;
