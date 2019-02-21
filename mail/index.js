const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(4000, () => {
  console.log("The server started on port 4000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`Email enviado correctamente ${info.messageId}`);
    res.send(info);
  });
});

app.post("/sendmail2", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail2(user, info => {
    console.log(`Email enviado correctamente ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'eventum2019@gmail.com',
      pass: 'ev3ntuM19'
    }
  });

  let mailOptions = {
    from: '"EVENTUM"<example.gimail.com>', // sender address
    to: user.email, // list of receivers
    subject: "EVENTUM", // Subject line
    html: `<h1>Hola ${user.name}</h1><br>
    <h4>Gracias por contactarte con EVENTUM</h4><br><p>Encantados leeremos los comentarios y sugerencias que tienes para nosostros</p>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

async function sendMail2(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'eventum2019@gmail.com',
      pass: 'ev3ntuM19'
    }
  });

  let mailOptions = {
    from: '"EVENTUM"<example.gimail.com>', // sender address
    to: user.email,   // list of receivers
    subject: "EVENTUM", // Subject line
    html: `<h1>Hola ${user.name}</h1><br>

    
    <h4>Su reserva ha sido confirmada</h4><p>Su numero de asientos reservados es: ${user.asiento}. Tiene 24 horas para realizar su pago.</p>`
  };
  
  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}