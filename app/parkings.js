import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/parking_screen";
import api from "../services/api";
import BottomNav from "./bottomNav";

const ParkingScreen = () => {
  const router = useRouter();
  const [parkingData, setParkingData] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchParkings();
    loadFavorites();
  }, []);

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

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      const parsed = stored ? JSON.parse(stored) : [];
      const ids = parsed.filter(item => item.type === "PARKING").map(item => item.id);
      setFavoriteIds(ids);
    } catch (err) {
      console.error("❌ Failed to load favorites:", err.message);
    }
  };

  const toggleFavorite = async (parking) => {
    const newFavorite = {
      id: parking._id,
      type: "PARKING",
      name: parking.name,
      location: parking.location,
      image_url: parking.image_url,
    };

    try {
      const existing = await AsyncStorage.getItem("favorites");
      const parsed = existing ? JSON.parse(existing) : [];

      const alreadyExists = parsed.some(
        (item) => item.id === newFavorite.id && item.type === "PARKING"
      );

      let updated;
      if (alreadyExists) {
        updated = parsed.filter(
          (item) => !(item.id === newFavorite.id && item.type === "PARKING")
        );
        setFavoriteIds((prev) => prev.filter((id) => id !== newFavorite.id));
      } else {
        updated = [...parsed, newFavorite];
        setFavoriteIds((prev) => [...prev, newFavorite.id]);
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(updated));
    } catch (err) {
      console.error("❌ Failed to update favorite:", err.message);
      Alert.alert("Error", "Something went wrong while updating favorites.");
    }
  };

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
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>PARKINGS</Text>

        {parkingData.map((parking) => (
          <View key={parking._id} style={styles.card}>
            <TouchableOpacity
              onPress={() => toggleFavorite(parking)}
              style={styles.favoriteIcon}
            >
              <Ionicons
                name={favoriteIds.includes(parking._id) ? "star" : "star-outline"}
                size={20}
                color="#ccc"
              />
            </TouchableOpacity>

            <Image
              source={{ uri: parking.image_url }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.name}>{parking.name}</Text>
            <Text style={styles.fee}>💰 {parking.hourly_rate} EGP/hr</Text>
            <Text style={styles.location}>📍 {parking.location}</Text>

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
