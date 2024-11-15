const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 4000
const {errorHandler} = require('./middleware/errorMiddleware')

connectDB()

const app = express()
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/lessons', require('./routes/lessonRoutes'))
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))