import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // ✅ Import Ionicons
import BottomNav from "./bottomNav";
import styles from "../styles/nfc_sticker_screen"; // 🔥 External StyleSheet

const NFCStickerScreen = () => {
  const router = useRouter();

  const nfcSticker = {
    id: 1,
    vehicle_plate_number: "ABC-1234",
    status: "Active", // or "Inactive"
    issuedDate: new Date("2024-04-29"),
    expiryDate: new Date("2025-04-29"),
    image: require("../assets/nfc_sticker.png"),
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity
        onPress={router.back}
        style={{
          position: "absolute",
          top: 35, // ⬆️ moved up nicely
          left: 20,
          zIndex: 100,
          backgroundColor: "#1e1e1e",
          padding: 10,
          borderRadius: 30,
        }}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>NFC Sticker</Text>

        {/* NFC Sticker Image */}
        <Image source={nfcSticker.image} style={styles.stickerImage} />

        {/* Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Vehicle Plate:</Text>
            <Text style={styles.value}>{nfcSticker.vehicle_plate_number}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Status:</Text>
            <Text
              style={[
                styles.value,
                nfcSticker.status === "Active"
                  ? styles.activeStatus
                  : styles.inactiveStatus,
              ]}
            >
              {nfcSticker.status}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Issued Date:</Text>
            <Text style={styles.value}>
              {nfcSticker.issuedDate.toLocaleDateString()}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Expiry Date:</Text>
            <Text style={styles.value}>
              {nfcSticker.expiryDate.toLocaleDateString()}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

export default NFCStickerScreen;
