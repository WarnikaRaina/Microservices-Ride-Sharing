const express= require('express');
const morgan= require('morgan');
const os = require('os');
const cluster = require('cluster');
const express = require('express');
const morgan = require('morgan');
const app= express()
app.use(morgan('dev')) // logging middleware


app.get('/', (req, res)=>{

    for(let i=0; i<100000000000; i++){
    
    
    }
    
    if (cluster.isMaster) {
        const numCPUs = os.cpus().length;
        console.log(`Master process is running. Forking for ${numCPUs} CPUs...`);

        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died. Forking a new one...`);
            cluster.fork();
        });
    } else {
        const app = express();
        app.use(morgan('dev')); // logging middleware

        app.get('/', (req, res) => {
            for (let i = 0; i < 100000000000; i++) {}
            res.send('Hello world');
        });

        app.listen(3002, () => {
            console.log(`Worker ${process.pid} is running on http://localhost:3002`);
        });
    }
})

app.listen(3002, ()=>{
    console.log('Stress service is running on http://localhost:3002')
})