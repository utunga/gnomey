 var config = exports;

 config.yammer = {}
 config.twss = {}
 config.yammer.access_token_dummy = 'config.js needs editing'
 config.yammer.access_token = config.yammer.access_token_dummy; //replace this with something like '9p69w098345098LtOeAQvyA'
 config.twss.threshold = 0.9997; //even though this seems high its not all that high

// steps to get a yammer access_token
// 1 register an app (https://www.yammer.com/client_applications)
// 2 login to relevant yammer network with relevant username
// 3 go here https://developer.yammer.com/api/sandbox.html paste
//   click 'get a new token'
//   paste Consumer Key into Client Key
//   paste Consumer Secret into Client Secret
//   (stop to admire the naming confusion.. ignore the other two fields)
// 4 follow steps to get verifier then come back here and paste in the access_token above
