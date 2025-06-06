const express = require('express')
const app = express()  //importing and requring express

//requring connection.js
require('./database/connection')
const cors = require('cors')

//using cors
app.use(cors({
    origin : "http://localhost:5173"
}))

//json parsing
app.use(express.json())
//requring routes and using them

const bookRoutes = require('./routes/bookRoute');
app.use("",bookRoutes);

//Listening
app.listen(4000,()=>{
    console.log("Server started at port 4000");
    
})