const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config();
const html = `
            <h1>Hello World</h1>
            <p>Nodemailer is powerful..</p>
            <img src='cid:testing123' width='300' />
            `;
const emails = ['adeoluamole@gmail.com','owolabifelix78@gmail.com'];
const main=async()=>{
    const transporter =  nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                 user: 'owolabifelix78@gmail.com',
                 pass: process.env.GOOGLE_PASS
            }
    })
    const info = await transporter.sendMail({
         from: 'Felix <owolabifelix78@gmail.com>',
         to: emails,
         subject: 'Welcome to Airbnb!',
         html: html,
         attachments:[{
            filename:'15e9238a5ecdf4079fbba6994fed00be.png',
            path:'./userPhoto/15e9238a5ecdf4079fbba6994fed00be.png',
            cid: 'testing123',
         },
           {
            filename: 'fe9a6b7eec88dd64743ba291b87507f1.png',
            path: './userPhoto/fe9a6b7eec88dd64743ba291b87507f1.png',
        }
        ]
    })
    console.log('Message Sent:' + info.messageId);
    console.log(info.accepted);
    console.log(info.rejected);
}

main()
.catch((e)=>console.log(e))