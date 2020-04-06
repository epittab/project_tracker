const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Middleware

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, PATCH, POST, DELETE, GET'); 
        return res.status(200).json();  
    }

    next();
});

// Routes

const userRoute = require('./routes/userRoutes.js'); 
const projectRoute = require('./routes/projectRoutes.js'); 
const taskRoute = require('./routes/taskRoutes.js'); 
  
app.use('/api/user', userRoute); 
app.use('/api/project', projectRoute); 
app.use('/api/task', taskRoute); 


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})