var slackURL = 'https://hooks.slack.com/services/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';
var slack = require('slack-notify')(slackURL);



slack.alert({
    text: 'Current server stats',
    fields: {
      'CPU usage': '7.51%',
      'Memory usage': '254mb'
    }
  });