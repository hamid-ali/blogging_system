//Reference git repo https://github.com/bahdcasts/node-js-blog

const path = require('path')

const express = require('express')

const app = new express()

const mongoose = require('mongoose')

const bodyParser = require("body-parser")

const Post = require("./database/models/post")

mongoose.connect('mongodb+srv://hamid:hamidali@cluster0.911w9.mongodb.net/node-js-blog?retryWrites=true&w=majority')

app.use(express.static('public'))

const { config, engine } = require('express-edge');
 
// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);

app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended : true }))



app.get('/' , async(req , res) => {
    
    // res.sendFile(path.resolve(__dirname , 'pages/index.html'))

    const posts = await(Post.find({})) ;

    console.log(posts)


    res.render('index' , {
        posts
    })

})

app.post('/posts/store' ,(req, res)=>{

    Post.create( req.body , (err , post)=>{

        res.redirect("/")

    } )
    
    

})

app.get('/about' , (req , res) => {

    // res.sendfile(path.resolve(__dirname , 'pages/about.html'))

    res.render('about')

})


app.get('/contact' , (req , res) => {

    // res.sendfile(path.resolve(__dirname , 'pages/contact.html'))

    res.render('contact')
})

app.get('/post' , (req , res) => {

    // res.sendfile(path.resolve(__dirname , 'pages/post.html'))

    res.render('post')

})

app.get('/post/newpost' , (req , res) =>{

    res.render('create')
})


app.listen(4000 , () => {

    console.log("app listening on port 4000 .")

})