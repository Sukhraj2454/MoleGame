const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'build')));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'build', 'index.html'));
});

app.listen(port, ()=>{
    console.log(`Server is Listenign on Port ${port}`)
});