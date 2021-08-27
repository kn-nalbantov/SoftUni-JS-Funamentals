var validator = require('email-validator');

function extractEmails(input) {
  let emails = input.split(' ').map((x) => x.trim());
  for (let email of emails) {
    console.log(validator.validate(email));
  }
}

extractEmails('Please contact us at: support@github.com');
extractEmails('support@github.com');
