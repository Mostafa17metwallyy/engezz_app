import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/favorites_screen";
import BottomNav from "./bottomNav";

const dummyFavorites = [
  {
    id: 1,
    type: "TOLL",
    name: "CAIRO-ALEX",
    location: "Cairo Alexandria Desert Road",
    image_url: "http://192.168.1.13:3000/api/images/cairo_alex.png",
  },
  {
    id: 2,
    type: "PARKING",
    name: "ARKAN",
    location: "GIZA",
    image_url: "http://192.168.1.13:3000/api/images/arkan.png",
  },
];

const FavoritesScreen = () => {
  const router = useRouter();

  const handleNavigation = (item) => {
    if (item.type === "TOLL") {
      router.push("/tolls");
    } else if (item.type === "PARKING") {
      router.push("/parkings");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.listContainer}>
        <Text style={styles.header}>Your Favorites</Text>

        {dummyFavorites.length === 0 ? (
          <Text style={styles.emptyText}>You have no favorites yet.</Text>
        ) : (
          dummyFavorites.map((item) => (
            <TouchableOpacity key={item.id} style={styles.card} onPress={() => handleNavigation(item)}>
              <Image source={{ uri: item.image_url }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subText}>
                  {item.type} • {item.location}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default FavoritesScreen;
