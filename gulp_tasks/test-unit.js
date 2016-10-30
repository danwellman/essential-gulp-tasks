var Server = require('karma').Server;

module.exports = (done) => new Server({
    configFile: __dirname + '/../test/unit/unit.conf.js'
}, done).start();
