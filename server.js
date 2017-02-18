/**
 * Created by augusto on 18/2/17.
 */

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

require('dotenv').config();

var app = express();


app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json(
    {
        type: 'application/vnd.api+json'
    }
));
app.use(methodOverride());

//Models

//Rest API

//Routes
app.get('/', function(req,res){
    res.sendFile('public/index.html', {root: __dirname});
});