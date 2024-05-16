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

    setupKueUI() {
        kueUI.setup({
            apiURL: '/api',
            baseURL: '/kue',
            updateInterval: 5000
        });
    }

    configureRoutes() {
        this.app.use('/api', kue.app);
        this.app.use('/kue', kueUI.app);
    }

    start() {
        if (this.app) return Promise.resolve();

        this.app = express();
        this.setupKueUI();
        this.configureRoutes();

        return new Promise((resolve, reject) => {
            this.app.listen(this.port, () => {
                debug('App listening at port %s', this.port);
                resolve();
            }).on('error', reject);
        });
    }
}

module.exports = UI;
