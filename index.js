var express = require("express");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var receiverEmailAddress = "br3.kyokyo@gmail.com";

var app = express();

app.use(bodyParser.json());

app.post("/", function(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let text = req.body.text;

  console.log("recieve");

  var message = {
    from: email,
    to: receiverEmailAddress,
    subject: "okyaku-ios contact",
    text: text
  };

  var smtp = nodemailer.createTransport({
    host: "localhost",
    port: 25
  });

  smtp.sendMail(message, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(4000);
