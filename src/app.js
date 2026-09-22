const express = require("express");

const app = express();

// // How Do You Handle the the request and response in Express JS
// // This will be response on with the any request made to the server
// app.use((req,res) => {
//   res.send("Hello from Express");//The Arrow function is Known as the Request Handler Function
// });

//How to Handle the Diffent Request Differently
// Using Route

app.use("/",(req,res) =>{
    res.send("Hello Namaste From the Dashboard Vs Code");
});

app.use("/test", (req,res) => {
  res.send("Namaste Node.js");
});

app.use("/hello", (req,res) => {
  res.send("Hello From the response handler/hello");
});



// Server is Listening on Port 3000
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});