var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var request = require('request');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
server.listen(port);
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/control', function (req, res) {
    res.sendFile(__dirname + '/views/control.html');
});


app.get('/admin', function (req, res) {
    res.render("index")
})

app.get('/admin/taleliste', function (req, res) {
    res.render("taleliste")
})

app.get('/admin/manuell', function(req,res)
{
    res.render('manuell');
})

app.get('/show/super', function (req,res) {
    res.render('super');
});

app.get('/show/sak', function (req,res) {
    res.render('sak');
});

app.post('/api/loadSuper', function (req,res)
{
    console.log(req.body);
    res.status(200).send('');

})

app.get('/api/taleliste', function(req, res) {
    var options = {
        url: 'https://roisalen.no/rest/speakerList',
        headers: {
          'X-organisation': 'Hyperion'
        }
      };
    request(options, function (error, response, body) {
        res.send(body);
    });
})


app.get('/api/sak', function (req, res){
    //https://dev.endring.xyz/api/v1/MeetingStatus/landstinget-2017
    var options = {
        url: 'https://dev.endring.xyz/api/v1/MeetingStatus/landstinget-2017'
    
      };
    request(options, function (error, response, body) {
        res.send(body);
    });
})
app.get('/api/representatives/:speakerId', function(req, res) {
    var id = parseInt(req.params.speakerId);
    var options = {
        url: 'https://roisalen.no/rest/representatives/' + id,
        headers: {
          'X-organisation': 'Hyperion'
        }
      };
    request(options, function (error, response, body) {
        res.send(body);
    });
})


app.use(express.static('static'));
io.on('connection', function (socket) {
    //socket.emit('runSuper', {"lol" : "lol2"});
   console.log("hei");
    socket.on('cmdSuper', function (data) {
        console.log("sending super command");
        socket.broadcast.emit('runSuper', data);

    });
    

});
