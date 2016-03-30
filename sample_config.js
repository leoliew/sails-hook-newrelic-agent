/**
 * Created by leoliu on 16/3/30.
 */

module.exports.newrelic = {
  app_name: ['your-app-name'],
  license_key: 'your-license-key',
  logging: {
    level: 'warn', // can be error, warn, info, debug or trace
    rules: {
      ignore: ['^/socket.io/*/xhr-polling']
    }
  }
};
