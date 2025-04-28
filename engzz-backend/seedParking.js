const mongoose = require("mongoose");
const dotenv = require("dotenv");
const os = require("os");
const Parking = require("./models/Parking");

dotenv.config();

const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
};

const LOCAL_IP = getLocalIP();

const parkings = [
  {
    name: "ARKAN",
    location: "GIZA",
    hourly_rate: 20,
    image_url: `http://$192.168.1.13:3000/api/images/arkan.png`,
    location_url: "https://www.google.com/maps/place/30.017963,31.001251",
    coordinates: {
      lat: 30.017963,
      lng: 31.001251,
    },
  },
  {
    name: "DISTRICT5",
    location: "NEW CAIRO",
    hourly_rate: 20,
    image_url: `http://192.168.1.13:3000/api/images/district5.png`,
    location_url: "https://www.google.com/maps/place/29.985464,31.441951",
    coordinates: {
      lat: 29.985464,
      lng: 31.441951,
    },
  },
  {
    name: "PARK ST",
    location: "GIZA",
    hourly_rate: 20,
    image_url: `http://192.168.1.13:3000/api/images/park_st.png`,
    location_url: "https://www.google.com/maps/place/30.021154,31.003084",
    coordinates: {
      lat: 30.021154,
      lng: 31.003084,
    },
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    await Parking.deleteMany();
    await Parking.insertMany(parkings);
    console.log("🚗 Parkings seeded successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err.message);
  });
