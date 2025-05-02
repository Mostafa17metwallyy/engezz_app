import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/bottom_nav";

const BottomNav = () => {
  const router = useRouter();

  const navItems = [
    { icon: "home-outline", label: "Home", path: "/HomeScreen" },
    { icon: "location-outline", label: "Location", path: "/LocationMapScreen" },
    { icon: "star-outline", label: "Favorites", path: "/FavoritesScreen" },
    { icon: "card-outline", label: "Payments", path: "/payments" },
    { icon: "time-outline", label: "History", path: "/history" },
    { icon: "person-circle-outline", label: "Profile", path: "/profile" },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item, index) => (
        <TouchableOpacity key={index} style={styles.navItem} onPress={() => router.push(item.path)}>
          <Icon name={item.icon} size={24} color="#ccc" style={styles.navIcon} />
          <Text style={styles.navText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNav;
