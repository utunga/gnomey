var sys = require('sys');
var node_yammer = require('./node_yammer.js');
var twss = require('twss');
var yam;
var text_length_threshold;

function process_message(txt, message) {
    console.log("TWSS PROB " + twss.probability(txt) + " for '" + txt + "' ");
    if (twss.is(txt) && ('' + txt).length<=text_length_threshold) {
        //matches 'that what she said' criteria, so post a message
        console.log("!!! Thats what she said !!!");
        post_thats_what_she_said(message);
    }
}

function post_thats_what_she_said(message) {
    //NB: the yammer network, and identity used when posting a message
    //    is basically controlled by what access_token is used
    //    see config.js..
    yam.createMessage({
        replied_to_id: message.id,
        body:"That's what she said"}, function(response) {});

}

function start(config) {

    if (config.yammer.access_token == config.yammer.access_token_dummy)
    {
        console.log('You need to set up your yammer access token as described in ./lib/config.js.');
        process.exit();
    }

    yam = new node_yammer.Yammer(
        {'access_token': config.yammer.access_token}
    );

    twss.threshold = config.twss.threshold; //text has to be longer than this
    text_length_threshold = config.text_length_threshold; // text has to be shorter
    //incredibly freaking cool 'long poll' version of messages api - per
    //long-polling API described here https://developer.yammer.com/api/realtime.html
    yam.realtime.messages(function(error, response) {
        //console.log(response);
        if (!error) {
            if (response.type=='message')
                response.data.messages.forEach(
                    function(message) {
                        console.log('-----------');
                        process_message(message.body.plain, message);
                    });
        }
    });
}

exports.start = start;

// one shot call to yammer api would look like this
//yam.messages(function(error, body, response) {
//
//    if (!error && response.statusCode == 200) {
//        console.log(body);
//        console.log(typeof(body));
//        body.messages.forEach(
//            function(message) {
//                console.log('-----------');
//                console.log(message);
//            })
//    }
//});
