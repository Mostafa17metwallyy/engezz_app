const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const os = require('os');
const connectDB = require('./config/db');

// Routes
const userRoutes = require('./routes/userRoutes');
const tollRoutes = require('./routes/tollRoutes');
const parkingRoutes = require("./routes/parkingRoutes");


dotenv.config();

const app = express();

/*app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})); */
app.use(cors())


app.use(express.json());

// ✅ Serve static images
app.use("/api/images", express.static("public/images"));

// ✅ Routes 
app.use('/api/users', userRoutes);
app.use('/api/tolls', tollRoutes);
app.use("/api/parkings", parkingRoutes);

// DB
connectDB();

// Local IP for mobile testing
const getLocalIP = () => {
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
};

//const PORT = process.env.PORT || 5000;
const PORT = 3000;
const LOCAL_IP = getLocalIP();

/*app.listen(PORT, () => {
  console.log(`🚀 Server is running!`);
  console.log(`🔗 Local:     http://localhost:${PORT}`);
  console.log(`📱 Mobile IP: http://${LOCAL_IP}:${PORT}`);
});*/

app.listen(PORT, '0.0.0.0',() => {
  console.log(`Server is running at http://localhost:${PORT}`);
});