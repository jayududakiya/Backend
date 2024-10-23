const nodemailer = require("nodemailer");

const mailGen = require("mailgen");

exports.testMail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "daisy.hudson@ethereal.email",
        pass: "9yWDDey7sC5fXeUEGx" // app password
      }
    });

    const mailMessage = {
      from: '"Jack Peter 👻" <jackGajjar@ethereal.email>', // sender address
      to: "jayududakiya@gmail.com", // list of receivers
      subject: "Hello Jack ✔", // Subject line
      text: " From Jack => Hello world?", // plain text body
      html: "<b>Jack Hello world?</b>" // html body
    };

    await transporter
      .sendMail(mailMessage)
      .then((info) => {
        // console.log("Message sent: %s", info.messageId);
        res.status(201).json({
          meg: "You are received Mail SussesFully..",
          messageId: info.messageId,
          preview: nodemailer.getTestMessageUrl(info)
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "server Error" });
  }
};

exports.userMail = async (req, res) => {
  try {
    const { userEmail } = req.body;

    const config = {
      service: "gmail",
      auth: {
        user: process.env.node_Mail_User,
        pass: process.env.node_Mail_Pass
      }
    };

    const transporter = nodemailer.createTransport(config);

    // Configure mailGen by setting a theme and your product info
    const mailGenerator = new mailGen({
      theme: "default",
      product: {
        name: "mailGen",
        link: "https://mailgen.js/"
      }
    });

    const emailResponse = {
      body: {
        name: 'Hello From Tester',
        intro: "Welcome to mailGen! We're very excited to have you on board.",
        action: {
          instructions: "To get started with mailGen, please click here:",
          button: {
            color: "#22BC66", // Optional action button color
            text: "Confirm your account",
            link: "https://mailgen.js/confirm?s=d9729feb74992cc3482b350163a1a010"
          }
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help."
      }
    };

    const email = mailGenerator.generate(emailResponse);

    const mailMessage = {
      from: process.env.node_Mail_User,
      to: userEmail,
      subject: "real test case",
      text: "this is real test Case Email ",
      html: email
    };

    await transporter
      .sendMail(mailMessage)
      .then((info) => {
        res.status(201).json({
          msg: "you are received email",
          messageId: info.messageId
        });
      })
      .catch((error) => {
        console.log("error", error);
        res.status(500).json({ message: "Server Error" });
      });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({ message: "server Error" });
  }
};
