require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
//cors
const cors = require('cors')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9w4ak.mongodb.net/mern-learnit?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        )
        console.log('MongoDB connected')
    } catch (error) {
        console.error(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter )
app.use('/api/posts', postRouter )

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))