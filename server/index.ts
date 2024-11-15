const express = require('express');
const path = require('path');
const cors = require('cors');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const compression = require('compression');
require('dotenv').config();

const app = express();
const port = 3000;

// app.use(cors());
app.use(cors());
app.use(compression());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
    const { name, company, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.FOLIO_EMAIL,
            pass: process.env.FOLIO_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    transporter.verify()
        .then(() => {
            return transporter.sendMail({
                from: `"${name}" <${process.env.FOLIO_EMAIL}>`,
                to: 'yesushakir@gmail.com',
                subject: `${name} <${email}> ${company ? `from ${company}` : ''} submitted a contact form`,
                text: `${message}`,
            });
        })
        .then((info) => {
            res.json({ message: 'success' });
        })
        .catch((error) => {
            console.error('Email Error:', error);
            res.status(500).send({ error: 'Failed to send email. Please check your configuration.' });
        });
});


// listen to app on port 3000
app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`);
});
