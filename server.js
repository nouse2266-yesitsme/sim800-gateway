const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/", (req,res)=>{
    res.send("Gateway running");
});

app.get("/data", async (req,res)=>{

    console.log("Received:", req.query);

    const params = new URLSearchParams(req.query).toString();

    const renderURL =
    "https://vehicle-tracker-server-1.onrender.com/data?" + params;

    try{

        await fetch(renderURL);

        res.send("Forwarded");

    }catch(err){

        console.log(err);
        res.send("Error forwarding");

    }

});

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started");
});
