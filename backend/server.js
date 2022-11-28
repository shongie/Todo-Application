const express = require('express');
const app = express();
const cors=require("cors");
const users = require('../backend/app/routes/user')

const client =require("../backend/app/config/db.config")

const port = 1000;
app.use(express.json())

app.use(cors())

app.get('/',(req,res)=>{
  res.status(200).json({message:"i am working"})
})

  //api end points
 app.use('/api',users)

client.connect((error)=>{
if(error)
{

}
else{

  console.log("Data logging initialised");
}
});

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})