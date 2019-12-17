const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: `${process.env.USEREMAIL}`,
    pass: `${process.env.PASSWORDEMAIL}`
  }
});

module.exports = transporter;
