const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const fs = require('fs');
const fileDir = path.join(__dirname, "../../src/articles/");
const bodyParser = require("body-parser");
const nodeMailer = require('nodemailer');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(__dirname + './../../'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + './../../index.html'));
});

app.post('/reload', function (req, res) {
    let newData = req.body;
    fs.readdir(fileDir, (err, files) => {
        if (files) {
            var stream = fs.createWriteStream(fileDir + "articles.json");
            stream.once('open', function () {
                stream.write(JSON.stringify(newData));
                stream.end();
            });
            res.send({"message": "Data reloaded"})
        }
        if (err) {
            res.send(err)
        }
    });
});

app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vitalia.serebro@gmail.com',
            pass: 'Snowy04112015'
        }
    });
    let mailOptions = {
        from: "vitalia.serebro@gmail.com",
        to: req.body.email,
        subject: "Password for Angular App",
        text: "Your password is: " + req.body.password,
        html: ''
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error)
        } else {
            res.send(info)
        }
    });
});

app.listen(port);

