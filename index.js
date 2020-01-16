const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");

app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();

app.post("/apiserver/mailsender", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const text = req.body.text;

  const mg = mailgun({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN
  });

  const data = {
    from: `${name} <postmaster@${process.env.MAILGUN_DOMAIN}>`,
    to: process.env.MAIL_TO,
    subject: subject || "無題",
    text: `email: ${email}
${text}
`
  };

  // eslint-disable-next-line handle-callback-err
  mg.messages()
    .send(data)
    .then(body => {
      console.log(body);
      res.send("送信されました！");
    })
    .catch(err => {
      console.error(err);
      res.send(
        "エラーが発生しました！お急ぎの場合br3.kyokyo@gmail.comへご連絡ください。"
      );
    });
});

app.listen(6000);
