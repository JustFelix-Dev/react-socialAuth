// const cookieSession = require('cookie-session');
const express = require('express');
const passportsetUp = require('./passport')
const cors = require('cors');
const authRoutes = require('./routes/auth');
const session = require('express-session');
// const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

// GoogleOAuth20
// console.cloud.google.com - website
// then API and Services , then OAuth consent screen (if you are yet to register)...then credentials..then create credentials ...then Create OAuth client ID

app.use(session({
     secret: 'felix',
     resave: false,
     saveUninitialized: false,
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:5174',
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}))

app.use('/auth',authRoutes)

app.listen('5000',(req,res)=>{
    console.log('Server is running!')
})