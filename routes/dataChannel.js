'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/dataChannel',
        handler: (request, h) => {
            return h.view('dataChannel');
        }
    }
]