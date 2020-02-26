var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
export var toastManager = (function () {
    var callbackFn;
    var manager = {
        subscribe: function (callback) {
            callbackFn = callback;
        },
        defaultOptions: function () {
            return {
                delay: 0,
                timeout: 2000,
                position: "top-center"
            };
        },
        add: function (content, options) {
            var mergedOptions = __assign({}, this.defaultOptions(), options);
            var timeoutId = window.setTimeout(function () {
                callbackFn('ADD', content, __assign({}, mergedOptions, { id: timeoutId }));
            }, mergedOptions.delay);
            return timeoutId;
        },
        remove: function (id) {
            callbackFn('REMOVE', null, { id: id });
            return true;
        }
    };
    return manager;
})();
var toast = {
    show: function (content, options) {
        if (options === void 0) { options = {}; }
        return toastManager.add(content, options);
    },
    remove: function (id) {
        return toastManager.remove(id);
    }
};
export default toast;
