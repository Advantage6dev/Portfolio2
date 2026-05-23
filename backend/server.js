const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');
require('dotenv').config();

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: 'https://davidportfolio-one.vercel.app',
  }),
);
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

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ojekunledavidprofile@gmail.com',
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
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
