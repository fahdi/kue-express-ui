'use strict';
const kue = require('kue');
const kueUI = require('kue-ui');
const express = require('express');
const debug = require('debug')('kue-example:ui');

class UI {
    constructor(port) {
        this.port = port || 3000;
        this.app = null;
    }

    start() {
        if (this.app) return Promise.resolve();

        this.app = express();

        kueUI.setup({
            apiURL: '/api',
            baseURL: '/kue',
            updateInterval: 5000
        });

        this.app.use('/api', kue.app);
        this.app.use('/kue', kueUI.app);

        console.log("reaches here");

        return new Promise(resolve => {
            this.app.listen(this.port, () => {
                debug('app listening at port %s', this.port);
            });
        });
    }
}

module.exports = UI;
