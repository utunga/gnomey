var sys = require('sys');
Yammer = require('./lib/node-yammer.js');
var yam = Yammer.Yammer();
yam.messages(function(data) {
   //sys.puts(data);
    console.log('got to here');
}); 