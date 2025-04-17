import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/favorites_screen";
import BottomNav from "./bottomNav";

const dummyFavorites = [
  {
    id: 1,
    type: "TOLL",
    name: "CAIRO-ALEX",
    location: "Cairo Alexandria Desert Road",
    image_url: "http://172.20.10.5:5000/images/cairo_alex.png",
  },
  {
    id: 2,
    type: "PARKING",
    name: "ARKAN",
    location: "GIZA",
    image_url: "http://172.20.10.5:5000/images/arkan.png",
  },
];

const FavoritesScreen = () => {
  const router = useRouter();

  const handleNavigation = (item) => {
    if (item.type === "TOLL") {
      router.push("/tolls"); // ✅ full screen for tolls
    } else if (item.type === "PARKING") {
      router.push("/parkings"); // ✅ full screen for parking
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Your Favorites</Text>

      {dummyFavorites.length === 0 ? (
        <Text style={styles.emptyText}>You have no favorites yet.</Text>
      ) : (
        <FlatList
          data={dummyFavorites}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => handleNavigation(item)}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subText}>
                  {item.type} • {item.location}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}

      <BottomNav />
    </View>
  );
};

export default FavoritesScreen;
