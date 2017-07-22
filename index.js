var axios = require('axios');
var sendmail = require('sendmail')();
var site = 'https://www.havesomecode.io';

axios.get(site)
.then(function(response){})
.catch(function(error) {
  sendmail({
    from: 'noreply@havesomecode.io',
    to: 'cv.chtatarz@gmail.com',
    subject: 'Havesomecode is down',
    html: 'Problem with ' + site + '<br/>' +
         'Message :' + error.message.toString()
  });
});
