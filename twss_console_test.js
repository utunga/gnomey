var twss = require('twss');
var config = require('./config.js');
twss.threshold = config.twss.threshold; // pretty high, i think
    
console.log("write some text:")
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
  //console.log(text);
  console.log("twss probability: " + twss.probability(text) + " for " + text + " ");
  if (twss.is(text)) {
      console.log("--MATCH--");
      console.log("Thats what she said!")
  }
  if (text === 'quit') {
    done();
  }
});

function done() {
  console.log('Now that process.stdin is paused, there is nothing more to do.');
  process.exit();
}