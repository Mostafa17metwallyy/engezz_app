import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // ✅ Added
import styles from "../styles/parking_screen";
import api from "../services/api";
import BottomNav from "./bottomNav";

const ParkingScreen = () => {
  const router = useRouter();
  const [parkingData, setParkingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParkings = async () => {
      try {
        const res = await api.get("/api/parkings");
        setParkingData(res.data);
      } catch (err) {
        console.error("❌ Error fetching parkings:", err.message);
        alert("Failed to load parking data");
      } finally {
        setLoading(false);
      }
    };
    fetchParkings();
  }, []);

  const openMap = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
        <Text style={styles.loadingText}>Loading parkings...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {/* 🔙 Back Button */}
      <TouchableOpacity
        onPress={router.back}
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          zIndex: 100,
          backgroundColor: "#1e1e1e",
          padding: 10,
          borderRadius: 30,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>PARKINGS</Text>

        {parkingData.map((parking) => (
          <View key={parking._id} style={styles.card}>
            <Image source={{ uri: parking.image_url }} style={styles.image} resizeMode="cover" />
            <Text style={styles.name}>{parking.name}</Text>
            <Text style={styles.location}>📍 {parking.location}</Text>
            <Text style={styles.fee}>💰 {parking.hourly_rate} EGP/hr</Text>

            <TouchableOpacity
              style={styles.mapButton}
              onPress={() => openMap(parking.location)}
            >
              <Text style={styles.mapButtonText}>Open in Google Maps</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default ParkingScreen;
