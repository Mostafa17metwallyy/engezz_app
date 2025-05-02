import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter, useFocusEffect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/favorites_screen";
import BottomNav from "./bottomNav";

const FavoritesScreen = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    try {
      const stored = await AsyncStorage.getItem("favorites");
      setFavorites(stored ? JSON.parse(stored) : []);
    } catch (err) {
      console.error("❌ Failed to load favorites:", err.message);
    }
  };

  const removeFavorite = async (id, type) => {
    try {
      const filtered = favorites.filter(
        (item) => !(item.id === id && item.type === type)
      );
      await AsyncStorage.setItem("favorites", JSON.stringify(filtered));
      setFavorites(filtered);
    } catch (err) {
      console.error("❌ Failed to remove favorite:", err.message);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const handleNavigation = (item) => {
    if (item.type === "TOLL") {
      router.push("/tolls");
    } else if (item.type === "PARKING") {
      router.push("/parkings");
    }
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.listContainer}>
        <Text style={styles.header}>Your Favorites</Text>

        {favorites.length === 0 ? (
          <Text style={styles.emptyText}>You have no favorites yet.</Text>
        ) : (
          favorites.map((item) => (
            <View key={`${item.type}-${item.id}`} style={styles.card}>
              {/* ⭐ Top-Right Favorite Toggle */}
              <TouchableOpacity
                onPress={() => removeFavorite(item.id, item.type)}
                style={styles.favoriteIcon}
              >
                <Ionicons name="star" size={20} color="#ccc" />
              </TouchableOpacity>

              {/* Navigate to full view */}
              <TouchableOpacity onPress={() => handleNavigation(item)}>
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.subText}>
                    {item.type} • {item.location}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default FavoritesScreen;
