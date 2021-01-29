const express = require('express')


const app = express()


app.get('/', (req, res)=> {
    res.send('hi')
})

var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('up and running')
})