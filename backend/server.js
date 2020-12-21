import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('APi is runnning')
})

app.get('/api/users', (req, res) => {
    res.send('APi is runnning')
})

app.listen(5000, console.log('Server runnning on port 5000'))

