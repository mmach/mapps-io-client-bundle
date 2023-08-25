const express = require('express');
const path = require('path');
var compression = require('compression')

const app = express();
//const root = `${__dirname}/static`

app.use(compression());//add this as the 1st middleware
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'webcomponent')));

// An api endpoint that returns a short list of 

// Handles any requests that don't match the ones above
//app.use(fallback('/www_build/index.html', { root }))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});
const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);