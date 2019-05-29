'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/getUserMedia',
        handler: (request, h) => {
            return h.view('getUserMedia');
        }
    }
]