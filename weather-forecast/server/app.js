const express = require('express');
const app = express(),
path = require('path');
app.use(express.static(path.join(__dirname, '/../dist')))

app.get('/', (req, res, next) => {
    
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server running;')
})