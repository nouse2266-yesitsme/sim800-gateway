const express = require("express");
const fetch = require("node-fetch");

const app = express();

app.get("/data", async (req, res) => {

    const params = new URLSearchParams(req.query).toString();

    const renderURL =
    "https://vehicle-tracker-server-1.onrender.com/data?" + params;

    try {

        await fetch(renderURL);

        console.log("Forwarded:", renderURL);

        res.send("OK");

    } catch (err) {

        console.log(err);

        res.send("ERROR");

    }

});

app.listen(3000, () => {
    console.log("Gateway running");
});