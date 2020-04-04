const express = require('express');

const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 5000;

const userRoute = require('./routes/userRoutes.js'); 
  
app.use('/api/user', userRoute); 


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
})