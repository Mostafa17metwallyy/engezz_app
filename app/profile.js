import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import api from "../services/api";
import BottomNav from "./bottomNav";
import styles from "../styles/profile_screen";

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await api.get("api/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setFormData(res.data);
    } catch (err) {
      console.error("❌ Fetch profile error:", err.message);
      Alert.alert("Error", "Failed to fetch profile.");
    }
  };

  const handleUpdate = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      const updatePayload = {
        name: formData.name,
        phone_number: formData.phone_number,
        vehicle_plate_number: formData.vehicle_plate_number,
      };

      if (newPassword.trim()) {
        updatePayload.password = newPassword;
      }

      await api.put(`api/users/${user._id}`, updatePayload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      Alert.alert("Success", "Profile updated.");
      setEditMode(false);
      setShowPasswordChange(false);
      setNewPassword("");
      fetchUser();
    } catch (err) {
      Alert.alert("Error", "Update failed.");
    }
  };

  const handleDelete = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await api.delete(`api/users/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Alert.alert("Deleted", "Your account has been deleted.");
    } catch (err) {
      Alert.alert("Error", "Account deletion failed.");
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to log out?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              await AsyncStorage.removeItem("token");
              router.replace("/"); // redirect to index.js
            } catch (err) {
              Alert.alert("Error", "Logout failed.");
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>User Profile</Text>

        <View style={styles.card}>
          {editMode ? (
            <>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(val) => setFormData({ ...formData, name: val })}
                placeholder="Name"
                placeholderTextColor="#888"
              />
              <TextInput
                style={styles.input}
                value={formData.phone_number}
                onChangeText={(val) => setFormData({ ...formData, phone_number: val })}
                placeholder="Phone Number"
                placeholderTextColor="#888"
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                value={formData.vehicle_plate_number}
                onChangeText={(val) => setFormData({ ...formData, vehicle_plate_number: val })}
                placeholder="Vehicle Plate Number"
                placeholderTextColor="#888"
              />
              {showPasswordChange && (
                <TextInput
                  style={styles.input}
                  placeholder="New Password"
                  secureTextEntry
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholderTextColor="#888"
                />
              )}
              <TouchableOpacity onPress={() => setShowPasswordChange(!showPasswordChange)} style={styles.toggleLink}>
                <Text style={styles.toggleText}>
                  {showPasswordChange ? "Cancel Password Change" : "Change Password"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.saveBtn, styles.actionButton]} onPress={handleUpdate}>
                <Text style={styles.saveText}>Save Changes</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.label}>Name: <Text style={styles.value}>{user.name}</Text></Text>
              <Text style={styles.label}>Email: <Text style={styles.value}>{user.email}</Text></Text>
              <Text style={styles.label}>Phone: <Text style={styles.value}>{user.phone_number}</Text></Text>
              <Text style={styles.label}>Plate: <Text style={styles.value}>{user.vehicle_plate_number}</Text></Text>

              <TouchableOpacity style={[styles.editBtn, styles.actionButton]} onPress={() => setEditMode(true)}>
                <Text style={styles.editText}>Edit Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.deleteBtn, styles.actionButton]} onPress={handleDelete}>
                <Text style={styles.deleteText}>Delete Account</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.nfcBtn, styles.actionButton]}
                onPress={() => router.push("/NFCStickerScreen")}
              >
                <Text style={styles.nfcText}>View NFC Sticker</Text>
              </TouchableOpacity>
            </>
          )}

          <TouchableOpacity style={[styles.deleteBtn, styles.actionButton]} onPress={handleLogout}>
            <Text style={styles.deleteText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default ProfileScreen;
