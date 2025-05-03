const express= require('express');
const morgan= require('morgan');
const app= express()
app.use(morgan('dev')) // logging middleware


app.get('/stress-test', (req, res)=>{

    for(let i=0; i<100000000000; i++){
    
    
    }
    
    res.send('Hello world')
})