const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs')
app.use(express.static('public'))



app.get('/',(req,res)=>{
    res.render('index')
})


app.post('/',(req,res)=>{
    num1 = Number(req.body.n1)
    num2 = Number(req.body.n2)
    result = num1+num2

    res.send('result = ' + result)
})

// 404
app.use((req,res)=>{
    res.status(404).send("<h1>SORRY CAN NOT FIND THAT</h1>")
})

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`);

    
})