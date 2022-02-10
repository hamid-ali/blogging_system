const mongoose = require('mongoose')

const Post =  require('./database/models/Post')

mongoose.connect('mongodb+srv://hamid:hamidali@cluster0.911w9.mongodb.net/node-js-blog?retryWrites=true&w=majority')

// Post.create({

//     title: 'My second blog .' ,

//     description : 'Second Blog post description' ,

//     content: 'Sabir Ali'

// } , (error , post)=> {

//     console.log(error , post)
// })

Post.findByIdAndUpdate( "61ffaa6dab5cd333937213bf" ,{
    title: "My first blog Hamid Ali"
} ,  (error , posts) =>{

console.log(error , posts)
}
)