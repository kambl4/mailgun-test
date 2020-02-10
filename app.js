let api = 'key-XXXXXXXXXXXXXXXXXXXXXX'; // change this!!!
let domain = 'https://api.eu.mailgun.net/v3/develop.ulpanbot.ru';

mailgun = require('mailgun-js')({ apiKey: api, domain });

const data = {
  from: 'postmaster@develop.ulpanbot.ru',
  to: 'goo.kambl4@gmail.com',
  subject: 'Test email subject',
  text: 'Test email text'
};
 
mailgun.messages().send(data, function (error, body) {
  console.log('Mailgun-js error: ', error); // undefined
  console.log('Mailgun-js body: ', body); // also undefined
});