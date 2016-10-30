var Emitter = function () {
    var handlers = {};

    this.subscribe = function (eventName, cb) {

        if (!handlers[eventName]) {
            handlers[eventName] = [cb];
        } else {
            handlers[eventName].push(cb);
        }

        return {
            sub: function () {
                handlers[eventName].forEach(function (handler, i) {
                    if (handler === cb) {
                        handlers[eventName].splice(i, 1);
                    }
                });
            }
        };
    };

    this.emit = function (eventName) {
        var cleanArray;

        if (handlers[eventName]) {
            if (arguments.length > 1) {
                cleanArray = Array.prototype.slice.call(arguments, 1);
            }
            handlers[eventName].forEach(function (handler) {
                handler.apply(undefined, cleanArray);
            });
        }

    }
};
