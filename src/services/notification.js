var request = require('request');

var options = {
  uri: 'https://hooks.slack.com/services/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',
  method: 'POST',
  json: {
    "text": "Paula Sampaio agendou um horário!"
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.id)
  }
});

