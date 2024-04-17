const express = require('express');
const path = require('path');
var compression = require('compression')
var dotenv = require('dotenv')
const { createProxyMiddleware } = require('http-proxy-middleware');
const cheerio = require('cheerio');
const fs = require('fs');
var Cookies = require('cookies')
var keys = ['keyboard cat']
const cookieParser = require('cookie-parser');
dotenv.config()

fs.readFile('./dist/index.html', (result, data) => {
    const $ = cheerio.load(data.toString())
    if ($('head').find('base').length > 0) {
        $('base').remove()
    }
    if ($('head').find('base').length == 0) {
        $('head').append(`<base href="${process.env.VITE_BASE_URL ? process.env.VITE_BASE_URL : ""}"/>`)
    }

    fs.writeFile('./dist/index.html', $.html(), (err) => { })

})
//const $ = cheerio.load('<h2 class="title">Hello world</h2>');

const app = express();
app.use(cookieParser());

//const root = `${__dirname}/static`
const options = {
    target: process.env.VITE_API_URL, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: false, // proxy websockets
    pathRewrite: {
        '^/command': '/command', // rewrite path
        '^/query': '/query', // remove base path
    },

};
const optionsBlob = {
    target: process.env.VITE_BLOB_URL, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: false, // proxy websockets
    pathRewrite: {
        '^/blob': '/blob', // rewrite path
    },

};
app.use(compression());//add this as the 1st middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'webcomponent')));
app.use('/mapps-init-load', function (req, res) {
    res.cookie('project-token', 123, { maxAge: 900000, httpOnly: true })
    res.cookie('project-socket', 123, { maxAge: 900000, httpOnly: true })

    console.log('cookie have created successfully');
    res.end()
});

const exampleProxy = createProxyMiddleware(options);
const exampleBlobProxy = createProxyMiddleware(optionsBlob);

// mount `exampleProxy` in web server
app.use('/command', exampleProxy);
app.use('/query', exampleProxy);
app.use('/blob', exampleBlobProxy);

// An api endpoint that returns a short list of 

// Handles any requests that don't match the ones above
//app.use(fallback('/www_build/index.html', { root }))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);