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
import api from "../services/api";
import styles from "../styles/tolls_screen";
import BottomNav from "./bottomNav";

const TollsScreen = () => {
  const router = useRouter();
  const [tollsData, setTollsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTolls = async () => {
      try {
        const res = await api.get("/api/tolls");
        setTollsData(res.data);
      } catch (err) {
        console.error("❌ Error fetching tolls:", err.message);
        alert("Failed to load tolls.");
      } finally {
        setLoading(false);
      }
    };
    fetchTolls();
  }, []);

  const openMap = (location) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1E90FF" />
        <Text style={styles.loadingText}>Loading tolls...</Text>
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
        <Text style={styles.header}>TOLLS</Text>

        {tollsData.map((toll) => (
          <View key={toll._id} style={styles.tollCard}>
            <Image source={{ uri: toll.image_url }} style={styles.tollImage} resizeMode="cover" />
            <Text style={styles.tollName}>{toll.name}</Text>
            <Text style={styles.tollFee}>Fee: {toll.toll_fee} EGP</Text>
            <Text style={styles.tollLocation}>📍 {toll.location_name}</Text>

            <TouchableOpacity
              style={styles.mapButton}
              onPress={() => openMap(toll.location_name)}
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

export default TollsScreen;
