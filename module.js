const fetch = require('node-fetch-polyfill');

function set(host,k,v) {
    fetch(host+"/set/"+k+"/"+v)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        return body
    });
}

function get(host,k) {
    fetch(host+"/get/"+k)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        return body
    });
}

function has(host,k) {
    fetch(host+"/has/"+k)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        return body
    });
}

function del(host,k) {
    fetch(host+"/delete/"+k)
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        return body
    });
}

module.exports = { set, get, has, del }

// K & V should be explanatory but host should be set to http(s)://ip:1122
