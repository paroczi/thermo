var SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
var port = new SerialPort('COM3', {
    baudRate: 9600
});
const parser = new Readline();
port.pipe(parser);
var express = require('express');
var mongoose = require('mongoose');
mongoose.connection.openUri('mongodb://localhost/home', {/* options */});

var thermoSchema = mongoose.Schema({
    time: String,
    temperature: Number,
    humidity: Number,
    heat_index: Number
});
// schema into model
var SensorDatas = mongoose.model('thermo', thermoSchema);

var app = express();


//data event listener
parser.on('data', function (data) {
    var item = new SensorDatas();
    item.time = new Date();


    item = Object.assign(item, JSON.parse(data));
    item.save(err => {
        if (err) {
            console.log(err)
        }
    });
});

//rest api
app.get('/list', function (req, res) {

    SensorDatas.find({}, '-_id', function (err, docs) {
        res.json(docs);
    }).sort({_id: -1}).limit(100);
});


var server = app.listen(3002, function () {
    console.log('Hello on 3002');
});