import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('API is running..')
})

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

const __dirname = path.resolve()
app.use('/posts', express.static(path.join(__dirname)))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running In ${process.env.NODE_ENV} mode on port ${PORT}`))