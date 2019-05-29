'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/constraints',
        handler: (request, h) => {
            return h.view('constraints');
        }
    }
]