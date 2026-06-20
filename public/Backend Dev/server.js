const express = require("express");
const app = express();
app.get("/" , (req, res) => {
    res . send("Home page");
});



app.get("/ api " , (req, res) => {
    res . json({
        message: " Hello Liana" ,
    status: "success" ,
    role: "backend developer in training" ,
     });
});


app . listen (3000 , () => {
    console.log("Server is running on port 3000");
});

