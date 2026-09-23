const express = require("express");

const app = express();

// app.use match all the HTTP methode API Call to /test

// All the Methode Is Handeled Over Tehre 
app.use("/user", (req,res) => {
  res.send("HaHAHAHAHAHAHAHAHAH");
});

// this will only Handle the Get Call to /user
app.get("/user",(req,res)=>{
    res.send({firstName : "Kuldeep",lastName : "Mishra"});
});

app.post("/user",(req,res)=>{
    // Saving Data to Db
   res.send("Data Saved To the database");
});

app.delete("/user",(req,res)=>{
    res.send("Deleted Sucessfully");
});

app.listen(3333,()=>{
    console.log("server is running on Port 3333");
});