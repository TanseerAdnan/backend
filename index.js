const express = require('express')

const dotenv = require('dotenv');
dotenv.config();

const app = express()


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("This page is Routed")
  })

app.listen(process.env.PORT,()=>{
    console.log("Server is listening to the PORT",process.env.PORT);
})