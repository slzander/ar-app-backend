const express = require('express')
const app = express()
// const users = require('./routes/user')
const bodyParser = require('body-parser')
// const cors = require('cors')
const port = process.env.PORT || 9000

// app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use(users)

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})