// const express = require('express');
// const hbs = require('handlebars');
// const morgan = require('morgan');
// const mongoose = require('mongoose')
// const passport = require('passport');
// const expressSession = require('express-session');
// mongoose.connect('mongodb+srv://jayandudakiya:jayan%232001DB@cluster0.lwoji.mongodb.net/todoListDB').then(()=> console.log('mongoDB is Connected Sussesfull....')).catch((error)=>console.log('error',error));
// const { initializedPassport } = require('./helper/passportConfig');
// // const Todo = require('./model/todo.model');
// const app = express();

// app.set('view engine','hbs');

// const isLoggedIn = (req,res,next)=> {
//     req.user ? next() : res.render('login.hbs');
// }

// initializedPassport(passport);


// app.use(express.json());
// app.use(express.urlencoded({extended : true}));
// app.use(morgan('dev'));



// app.use(expressSession({
//     secret : 'secret',
//     resave : false ,
//     saveUninitialized : false ,
//     cookie : {secure : false},
// }));
// // app.use(passport.initialize());
// // app.use(passport.session());

// // Other middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(morgan('dev'));


// // Your custom middleware that depends on passport session
// app.use(isLoggedIn);

// app.get('/',async (req,res) => {
// try {
//     // const todo = await Todo.find({isDeleted : false});
//     res.render('index.hbs');
// } catch (error) {
//     res.status(500).json({ message: "Error retrieving Todo", error });
// }
// });

// app.get('/login',async (req,res)=>{
//     try {
//         res.render('login.hbs');
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : "internal Server Error"})
//     }
// });

// app.get('/register',async (req,res)=>{
//     try {
//         res.render('register.hbs');
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message : "internal Server Error"})
//     }
// });

// app.post('/login',passport.authenticate('local',{failureRedirect : '/register' , successRedirect : '/'}))


// const userRoute = require('./routes/user.routes');
// const todoRoute = require('./routes/todo.routes');

// app.use('/api/user',userRoute);
// app.use('/api/todo',todoRoute);

// app.listen(8000,()=> console.log('server is Start At http://localhost:8000'))


const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const passport = require('passport')
const expressSession = require('express-session')
require('dotenv').config();
const { initializedPassport } = require('./helper/passportConfig');

mongoose.connect('mongodb+srv://jayandudakiya:jayan%232001DB@cluster0.lwoji.mongodb.net/todoListDB').then(()=> console.log('mongoDB is Connected Sussesfull....'))

initializedPassport(passport);

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