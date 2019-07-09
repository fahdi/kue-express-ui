'use strict';
const config = require('./config');
const UI = require('./ui/app');

const ui = new UI(config.get('port'));
ui.start();