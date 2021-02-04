var cloudinary = require('cloudinary');
var cloudinaryStorage = require('multer-storage-cloudinary');
var express = require('express');
var multer = require('multer');

var app = express();

// Config cloudinary storage for multer-storage-cloudinary
var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: '', // give cloudinary folder where you want to store images
  allowedFormats: ['jpg', 'png'],
});

var parser = multer({ storage: storage });

// You can store key-value pairs in express, here we store the port setting
app.set('port', (process.env.PORT || 80));

// Simple hello world route
app.get('/', function(req, res) {
    res.send("Hello world");
});

// POST route for reciving the uploads. multer-parser will handle the incoming data based on the 'image' key
// Once multer has completed the upload to cloudinary, it will come to the handling function
// below, which then sends the 201 (CREATED) response. Notice that error handling has not been properly implemented.
app.post('/upload', parser.single('image'), function (req, res) {
    console.log(req.file);
    res.status(201);
    res.json(req.file);
});

// start listening for incoming HTTP connections
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});