const convict = require('convict');

// Define a schema
const conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['development', 'production', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The Dashboard port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },
  redis: {
    doc: 'The redis connection string.',
    format: '*',
    default: 'redis://localhost:6379',
    env: 'REDIS'
  },
});

// Load environment dependent configuration
const env = conf.get('env');
conf.loadFile(`${__dirname}/${env}.json`);

// Perform validation
conf.validate({allowed: 'strict'});

module.exports = conf;
