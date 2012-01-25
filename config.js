 var config = exports;

 config.yammer = {}
 config.twss = {}
 config.yammer.access_token_dummy = 'config.js needs editing'
 config.twss.threshold = 0.9992; //even though this seems high its not all that high
 config.text_length_threshold = 'My gut feel is it would be a hard sell to make and that they will have a fairly tight budget'.length

 // replace the next line with something like..
 //  config.yammer.access_token = '1234p345098LtOeAQvyA' //(no this is not a real token ;-)
 config.yammer.access_token = config.yammer.access_token_dummy;

// steps to get a yammer access_token
// 1 register an app (https://www.yammer.com/client_applications)
// 2 login to relevant yammer network with relevant username
// 3 go here https://developer.yammer.com/api/sandbox.html paste
//   click 'get a new token'
//   paste Consumer Key into Client Key
//   paste Consumer Secret into Client Secret
//   (stop to admire the naming confusion.. ignore the other two fields)
// 4 follow steps to get verifier then come back here and paste in the access_token above
// 5. start service with node start.js