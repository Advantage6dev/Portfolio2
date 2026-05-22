const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (name.length < 5) {
      return res.status(400).json({
        message: 'Name must be at least 5 characters long',
      });
    }
    if (!email.includes('@')) {
      return res.status(400).json({
        message: 'Invalid email address',
      });
    }
    if (message.length < 10) {
      return res.status(400).json({
        message: 'Message must be at least 10 characters long',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
     Name: ${name}
     Email: ${email}
     Message:
     ${message}
      `,
    });

    res.status(200).json({
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
