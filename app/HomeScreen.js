import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/home_screen";
import BottomNav from "./bottomNav";

const HomeScreen = () => {
  const router = useRouter();

  return (
    // Fix: Ensures a full black background (moved comment outside JSX)
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#b0b0b0"
          />
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/LOGO_copy.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>NO CASH, NO HASSLE, JUST ENGEZZ</Text>
        </View>

        {/* Menu Options */}
        <ScrollView contentContainerStyle={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/tolls")}
          >
            <Image
              source={require("../assets/parking_icon.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>TOLLS</Text>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>➜</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/parkings")}
          >
            <Image
              source={require("../assets/parking_icon.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>PARKINGS</Text>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>➜</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/loyalty")}
          >
            <Image
              source={require("../assets/loyalty_icon.png")}
              style={styles.icon}
            />
            <Text style={styles.menuText}>LOYALTY PROGRAM</Text>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>➜</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Fix: BottomNav is inside the parent <View> */}
      <BottomNav />
    </View>
  );
};

export default HomeScreen;
