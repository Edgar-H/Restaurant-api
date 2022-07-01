const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'fx4038@gmail.com',
        pass: 'nqwgkaoxmwauajnv',
    },
});

module.exports = {
    transporter
}