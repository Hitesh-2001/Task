const express= require('express')
const app=express()
const mongoose= require('mongoose')
const contactroute=require('./routes/contactform')
const path = require('path')
const hbs=require('hbs')
const bodyParser = require("body-parser")
const authroute= require('./routes/auth')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }));
hbs.registerPartials(__dirname + '/views/partials');
                
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs')

app.use(express.json())
app.listen(9000,()=>{
    console.log('server has started')
})

mongoose.connect('mongodb+srv://Hitesh:<password>@cluster0.bipvr.mongodb.net/?retryWrites=true&w=majority',()=>{
    console.log('database has been connected')
})

// hbs.registerPartials(__dirname + '/views/partials');
// app.get('/about',(req,res)=>{
// res.render('about')

// })
// app.get('/',(req,res)=>{
//     res.render('contact')
    
//     })
    
app.get('/services',(req,res)=>{
        res.render('services')
        
})
app.use("/",authroute)
app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/registration",(req,res)=>{
    res.render("registration")
})


app.get('/home',(req,res)=>{
            res.render('index')
            
            })

app.use('/',contactroute)



