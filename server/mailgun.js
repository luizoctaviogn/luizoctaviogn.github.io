const mailgun = require('mailgun.js');

const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'key-f7d8c236dc76cde238dff2965da98557',
  public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-af0a56a27e8015b6e438211d51d0b440'
});

const send = (req, res) => {
  console.log(req.body)
  mg.messages.create('mail.dlbn.co', {
    from: `${req.body.name} <${req.body.email}>`,
    to: ["mateus@dalbinaco.com"],
    subject: `😸 Cliente interessado no Panthera`,
    text: req.body.fields,
  })
  .then(
    response => {
      res.status(200)
      res.send(response)
    }
  ) // logs response data
  .catch(err => {res.status(500)}); // logs any error
}

module.exports = send
