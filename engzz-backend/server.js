const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const os = require('os');
const path = require('path');
const connectDB = require('./config/db');

// Routes
const userRoutes = require('./routes/userRoutes');
const tollRoutes = require('./routes/tollRoutes');
const parkingRoutes = require("./routes/parkingRoutes");
const transaction =require("./routes/transactions.js");
const paymob=require("./routes/paymob");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static images with absolute path
app.use("/api/images", express.static(path.join(__dirname, "public/images")));

// ✅ API Routes
app.use('/api/users', userRoutes);
app.use('/api/tolls', tollRoutes);
app.use("/api/parkings", parkingRoutes);
app.use("/api/transactions", transaction);
app.use("/api/paymob", paymob);


// DB Connection
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

const PORT = 3000;
const LOCAL_IP = getLocalIP();

// ✅ Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
  console.log(`📱 Mobile access: http://${LOCAL_IP}:${PORT}`);
});
