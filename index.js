const path = require('path')

const express = require('express')

const app = new express()

app.use(express.static('public'))

const { config, engine } = require('express-edge');
 
// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);

app.set('views', `${__dirname}/views`);

app.get('/' , (req , res) => {

    // res.sendFile(path.resolve(__dirname , 'pages/index.html'))

    res.render('index')

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




app.listen(4000 , () => {

    console.log("app listening on port 4000 .")

})