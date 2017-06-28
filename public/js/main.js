'use strict';
/* global $ tripModule */
$.ajax({
        method: 'GET',
        url: '/api/days'
    })
    .then(function(data) { console.log('GET response data: ', data) })
    .catch(console.error.bind(console));

$.ajax({
        method: 'POST',
        url: '/api/days'
    })
    .then(function(data) { console.log('POST response data: ', data) })
    .catch(console.error.bind(console));

$(tripModule.load);