'use strict';

// Import configuration and UI modules
const config = require('./config');
const UI = require('./ui/app');

// Initialize and start the UI
const port = config.get('port');
const ui = new UI(port);

ui.start().then(() => {
    console.log(`Server started on port ${port}`);
}).catch(err => {
    console.error(`Failed to start server: ${err.message}`);
});
