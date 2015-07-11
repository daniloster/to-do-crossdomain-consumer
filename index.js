// # https://github.com/techpines/express.io/tree/master/examples#realtime-canvas
var express = require('express.io'),
app = express();

// Setup your sessions, just like normal.
app.use(express.cookieParser())
app.use(express.session({secret: 'monk3y-t0do-loc4al'}));
app.use(express.bodyParser());


//app.http().io();
app.http();

// app.io.configure(function() {
//     app.io.enable('browser client minification');  // send minified client
//     app.io.enable('browser client gzip');          // gzip the file
//     app.io.set('log level', 1);                    // reduce logging
// });

/* HTTP HANDLERS */

// Send the style sheet files
app.get('/Content/(*/?)*', function(req, res) {
    res.sendfile(__dirname + req.path)
});

//req.body.hasOwnProperty('author')

// Send the script files
app.get('/(*/?)*', function(req, res) {
    res.sendfile(__dirname + '/layout.html')
});

/* SOCKET HANDLERS */

// app.io.route('Client:addPlayer', function(req) {
//     req.io.broadcast('Server:addPlayer', req.data)
// });

// app.io.route('Client:refreshPlayer', function(req) {
//     req.io.broadcast('Server:refreshPlayer', req.data)
// });

app.listen(7076);
