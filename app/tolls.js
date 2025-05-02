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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import api from "../services/api";
import styles from "../styles/tolls_screen";
import BottomNav from "./bottomNav";

const TollsScreen = () => {
  const router = useRouter();
  const [tollsData, setTollsData] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTolls();
    loadFavorites();
  }, []);

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

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      const parsed = stored ? JSON.parse(stored) : [];
      const tollIds = parsed
        .filter((item) => item.type === "TOLL")
        .map((item) => item.id);
      setFavoriteIds(tollIds);
    } catch (err) {
      console.error("❌ Failed to load favorites:", err.message);
    }
  };

  const toggleFavorite = async (toll) => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      const parsed = stored ? JSON.parse(stored) : [];

      const exists = parsed.some(
        (item) => item.id === toll._id && item.type === "TOLL"
      );

      let updated;

      if (exists) {
        updated = parsed.filter(
          (item) => !(item.id === toll._id && item.type === "TOLL")
        );
        setFavoriteIds((prev) => prev.filter((id) => id !== toll._id));
      } else {
        const newFavorite = {
          id: toll._id,
          type: "TOLL",
          name: toll.name,
          location: toll.location_name,
          image_url: toll.image_url,
        };
        updated = [...parsed, newFavorite];
        setFavoriteIds((prev) => [...prev, toll._id]);
      }

      await AsyncStorage.setItem("favorites", JSON.stringify(updated));
    } catch (err) {
      console.error("❌ Failed to update favorites:", err.message);
      Alert.alert("Error", "Could not update favorites.");
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
        <Text style={styles.loadingText}>Loading tolls...</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>TOLLS</Text>

        {tollsData.map((toll) => (
          <View key={toll._id} style={styles.tollCard}>
            <TouchableOpacity onPress={() => toggleFavorite(toll)} style={styles.favoriteIcon}>
              <Ionicons
                name={favoriteIds.includes(toll._id) ? "star" : "star-outline"}
                size={20}
                color="#ccc"
              />
            </TouchableOpacity>

            <Image source={{ uri: toll.image_url }} style={styles.tollImage} resizeMode="cover" />
            <Text style={styles.tollName}>{toll.name}</Text>
            <Text style={styles.tollFee}>Fee: {toll.toll_fee} EGP</Text>
            <Text style={styles.tollLocation}>📍 {toll.location_name}</Text>

            <TouchableOpacity style={styles.mapButton} onPress={() => openMap(toll.location_name)}>
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
