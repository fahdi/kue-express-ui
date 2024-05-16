const convict = require('convict');

// Define the configuration schema
const config = convict({
    env: {
        doc: 'The application environment.',
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
        doc: 'The Redis connection string.',
        format: '*',
        default: 'redis://localhost:6379',
        env: 'REDIS'
    }
});

// Load environment-dependent configuration
const env = config.get('env');
config.loadFile(`${__dirname}/${env}.json`);

// Perform validation
config.validate({allowed: 'strict'});

module.exports = config;
