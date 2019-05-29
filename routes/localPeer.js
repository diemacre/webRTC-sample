'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/localPeer',
        handler: (request, h) => {
            return h.view('LocalPeerConnection');
        }
    }
]