const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
     res.send('Hello World!')
})

app.get('/test', (req, res) => {
     res.send("<h1>WelCome to the Page.</h1>")
})

app.listen(process.env.PORT, () => {
     console.log(`Example app listening on port ${process.env.PORT}`)
})