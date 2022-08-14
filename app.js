const express = require('express')

const app = express()

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.set('view engine', 'ejs')

app.use(express.static('static'))

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.listen(port, ()=>{
    console.log("The server is connected !!")
})

