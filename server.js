'use strict';

const Path = require('path')
const Hapi = require('hapi')
const Handlebars = require('handlebars')
const Vision = require('vision');
const Inert = require('inert');


const routes = require('./routes')


const server = new Hapi.Server({
    host: '0.0.0.0', 
    port: process.env.SERVER_PORT || 8000
})

const viewsPath = Path.resolve(__dirname, 'views')
const layoutPath = Path.resolve(viewsPath, 'layout')
const partialsPath = Path.resolve(viewsPath, 'partials')

const init = async () => {

    await server.register(Vision)
    server.log('info', 'Vision registered')

    await server.register(Inert)
    server.log('info', 'Inert registered')

    server.views({
        engines: { html: Handlebars },
        path: viewsPath,
        layout: 'default',
        layoutPath: layoutPath,
        partialsPath: partialsPath,
        context: {
            appTitle: 'P2-IRAC'
        }
    })
    server.log('info', 'Views configured')

    server.route(routes)
    server.log('info', 'Routes registered')

    try {
        await server.start()
        server.log('info', `Server running at ${server.info.uri}`)
    } catch (ex) {
        server.error('Error starting server ', ex)
    }
};

init();