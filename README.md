# contact_mail_proxy_server

自分のメールアドレスへご意見メールを送るための API を提供する express サーバ Mailgun を使用

## usage

### POST request

```
{
  name: "your name",
  email: "your email",
  type: "origin type (ex. br3-kyokyo.net webform)",
  subject: "subject of this email",
  text: "text body"
}
```

### .env

```
MAIL_TO=<YOUR EMAIL ADRESS>
MAILGUN_DOMAIN=<YOUR MAILGUN DOMAIN>
MAILGUN_APIKEY=<YOUR MAILGUN APIKEY>
```
