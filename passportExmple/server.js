const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const passport = require('passport')
const expressSession = require('express-session')
require('dotenv').config();
const { initializedPassport , initializedGoogleStrategy } = require('./passport.config');

mongoose.connect('mongodb://127.0.0.1:27017/localServerDB')
.then(()=>{
    console.log("Database Connection established SuccessFully.......");
})
.catch((error)=>{
    console.log(error);
});

// initializedPassport(passport);
initializedGoogleStrategy(passport);

const app = express();

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.redirect('/login'); // Redirect to login if not authenticated
};

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(expressSession({
    secret : 'secret',
    resave : false ,
    saveUninitialized : false ,
    cookie : {secure : false},
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine','ejs');

const User = require('./model/passportUser.model');

app.get('/',(req,res)=>{
    // const { user } = req;
    // console.log('user00========',user);
    res.render('home.ejs');
})

app.get('/dashboard',isLoggedIn,(req,res)=>{
    // const {user } = req;
    res.render('dashboard.ejs');
})
app.get('/register',(req,res)=>{
    res.render('register.ejs');
})
app.get('/login',(req,res)=>{
    res.render('login.ejs');
})
// app.get('/logout', (req, res) => {
//     req.logout((err) => {
//         if (err) {
//             console.log(err);
//             return next(err);
//         }
//         res.redirect('/login'); // Redirect to login or another page after logout
//     });
// });

/* ----------------------------------- // ----------------------------------- */

app.get('/auth/google',
    passport.authenticate('google', { scope:
        [ 'email', 'profile' ] }
  ));
  
app.get('/auth/google/callback',
      passport.authenticate( 'google', {
          successRedirect: '/auth/success',
          failureRedirect: '/auth/google/failure'
}));

app.get('/auth/success',()=>{
    const name = req.user.displayName;
    res.send(`Hello ${name}`);
});

app.get('/auth/google/failure',()=>{
    res.send('soothing want wrong!!')
});


// app.post('/register',async (req,res)=>{
//     try {
//         console.log("user",req.body);
//         let user = await User.findOne({username : req.body.username});
//         if(user) return res.status(400).json({message : 'user is Eexist'});
//         user = await User.create(req.body);
//         res.status(201).json({message : 'user was created',user});
//     } catch (error) {
//         console.log(error);
//         res.status(500).json(error);
//     }
// });


// app.post('/login',passport.authenticate('local',{failureRedirect : '/register' , successRedirect : '/'}))


app.listen(5000,()=>console.log('server start at http://localhost:5000'));