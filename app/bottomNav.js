import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons"; // Import Ionicons
import styles from "../styles/bottom_nav"; // Import styles

const BottomNav = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("./HomeScreen")}
      >
        <Icon
          name="home-outline"
          size={28}
          color="#fff"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("/LocationMapScreen")}
      >
        <Icon
          name="location-outline"
          size={28}
          color="#fff"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("/FavoritesScreen")}
        >
        <Icon
          name="star-outline"
          size={28}
          color="#fff"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("/payments")}
      >
        <Icon
          name="card-outline"
          size={28}
          color="#fff"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Payments</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => router.push("/history")}
      >
        <Icon
          name="time-outline"
          size={28}
          color="#fff"
          style={styles.navIcon}
        />
        <Text style={styles.navText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;
