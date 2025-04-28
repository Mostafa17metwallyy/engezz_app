const mongoose = require("mongoose");
const dotenv = require("dotenv");
const os = require("os");
const Toll = require("./models/Tolls");

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

const tolls = [
  {
    name: "CAIRO-ALEX",
    location_name: "Cairo Alexandria Desert Road",
    toll_fee: 50,
    image_url: `http://192.168.1.13:3000/api/images/cairo_alex.png`,
    location_url: "https://www.google.com/maps/place/30.100034,30.946507",
    coordinates: {
      lat: 30.100034,
      lng: 30.946507,
    },
  },
  {
    name: "ELALAMIEN",
    location_name: "El Alamein Road",
    toll_fee: 40,
    image_url: `http://192.168.1.13:3000/api/images/elalamien.png`,
    location_url: "https://www.google.com/maps/place/30.882620,28.939282",
    coordinates: {
      lat: 30.882620,
      lng: 28.939282,
    },
  },
  {
    name: "GALALA",
    location_name: "Galala Mountain Road",
    toll_fee: 60,
    image_url: `http://192.168.1.13:3000/api/images/glala.png`,
    location_url: "https://www.google.com/maps/place/29.366861,32.664711",
    coordinates: {
      lat: 29.366861,
      lng: 32.664711,
    },
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");
    await Toll.deleteMany();
    await Toll.insertMany(tolls);
    console.log("🚦 Tolls seeded successfully!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err.message);
  });
