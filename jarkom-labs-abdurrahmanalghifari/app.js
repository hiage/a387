'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

// Mengubah respons web server Node.js yang 
// semula “Hello world!” menjadi 
// nama lengkap peserta.

const app = express()
app.get('/', (req, res) => {
    res.send('Abdurrahman Al Ghifari\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)