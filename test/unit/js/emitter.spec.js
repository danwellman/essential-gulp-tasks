(function () {
    'use strict';

    fdescribe('the emitter class', function () {

        var emitter;

        beforeEach(function () {
            emitter = new Emitter();
        });

        describe('has a subscribe method which', function () {

            it('allows callbacks to be registered', function () {
                var result = false;

                emitter.subscribe('test_event', function () {
                    result = true;
                });
                emitter.emit('test_event');

                expect(result).toEqual(true);
            });

        });

        describe('has an emit method which', function () {

            it('can pass arguments to the handler', function () {
                var input = true,
                    result;

                emitter.subscribe('test_event', function (arg) {
                    result = arg;
                });
                emitter.emit('test_event', input);

                expect(result).toEqual(true);
            });

        });

        describe('has a sub method which', function () {

            it('allows subscriptions to be cancelled', function () {
                var input = true,
                    result,
                    subscription;

                subscription = emitter.subscribe('test_event', function (arg) {
                    result = arg;
                });
                subscription.sub();
                emitter.emit('test_event', input);

                expect(result).not.toBeDefined();
            });
        });
    });
}());
