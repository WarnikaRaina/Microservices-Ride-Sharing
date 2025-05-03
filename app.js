const express = require('express');
const morgan = require('morgan');

const app= express()
app.use(morgan('dev')) // logging middleware

app.get('/', (req, res)=>{

    for(let i=0; i<100000000000; i++){
    
    
    }
    
    res.send('Hello world')
})



app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000')
})