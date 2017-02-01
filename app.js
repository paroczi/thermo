var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', function (error) {
    if (error) {
        console.log(error);
    }
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("sikerult csatlakozni a dbhez")
});


var thermoSchema = mongoose.Schema({
    time: String,
    temperature: Number,
    humidity: Number
});

// schema into model
var SensorDatas = mongoose.model('thermos', thermoSchema);

var app = express();


/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
  res.tpl = {};
  res.tpl.error = [];

  return next();
})




app.get('/', function(req, res){

  SensorDatas.find({}, '-_id', function (err, docs) {
        console.log(json(docs))
    }).sort({_id:-1}).limit(10)

//todo

})




/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
  res.status(500).send('Houston, we have a problem!');

  //Flush out the stack to the console
  console.error(err.stack);
});



var server = app.listen(3002, function () {
  console.log('Hello on 3002');
});