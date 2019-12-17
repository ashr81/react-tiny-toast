export const toastManager = {
  subscribe(callback) {
    this.callback = callback;
  },

  defaultOptions() {
    return {
      delay: 0,
      timeout: 2000,
      position: "top-center"
    };
  },

  add(content, options) {
    const mergedOptions = { ...this.defaultOptions(),
      ...options
    };
    const timeoutId = setTimeout(() => {
      this.callback('ADD', content, { ...mergedOptions,
        id: timeoutId
      });
    }, mergedOptions.delay);
    return timeoutId;
  },

  remove(id) {
    this.callback('REMOVE', null, {
      id
    });
    return true;
  }

};
const toast = {
  success: (content, options = {}) => {
    return toastManager.add(content, { ...options,
      variant: 'success'
    });
  },
  error: (content, options = {}) => {
    return toastManager.add(content, { ...options,
      variant: 'error'
    });
  },
  warning: (content, options = {}) => {
    return toastManager.add(content, { ...options,
      variant: 'warning'
    });
  },
  default: (content, options = {}) => {
    return toastManager.add(content, { ...options,
      variant: 'default'
    });
  },
  remove: id => {
    return toastManager.remove(id);
  }
};
export default toast;