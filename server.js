const express = require("express");

const app = express();

// important for Railway
app.enable("trust proxy");

// simple test route
app.get("/", (req, res) => {
  res.send("SIM800 gateway running");
});

// SIM800 data endpoint
app.get("/data", (req, res) => {

  const lat = req.query.lat;
  const lng = req.query.lng;
  const speed = req.query.speed;
  const battery = req.query.battery;
  const timestamp = req.query.timestamp;

  console.log("Data received:");
  console.log({
    lat,
    lng,
    speed,
    battery,
    timestamp
  });

  // send simple response (SIM800 likes very small responses)
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
