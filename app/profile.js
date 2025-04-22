import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import BottomNav from "./bottomNav";
import styles from "../styles/profile_screen";

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const fetchUser = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await api.get("/users/me", {
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

      await api.put(`/users/${user._id}`, updatePayload, {
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
      await api.delete(`/users/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      Alert.alert("Deleted", "Your account has been deleted.");
      // Optional: Navigate to login
    } catch (err) {
      Alert.alert("Error", "Account deletion failed.");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <Text style={styles.loading}>Loading...</Text>;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>👤 User Profile</Text>

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
              onChangeText={(val) =>
                setFormData({ ...formData, phone_number: val })
              }
              placeholder="Phone Number"
              placeholderTextColor="#888"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={formData.vehicle_plate_number}
              onChangeText={(val) =>
                setFormData({ ...formData, vehicle_plate_number: val })
              }
              placeholder="Vehicle Plate Number"
              placeholderTextColor="#888"
            />

            {/* Toggle Password Change */}
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

            <TouchableOpacity
              onPress={() => setShowPasswordChange(!showPasswordChange)}
              style={styles.toggleLink}
            >
              <Text style={styles.toggleText}>
                {showPasswordChange ? "Cancel Password Change" : "Change Password"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveBtn} onPress={handleUpdate}>
              <Text style={styles.saveText}>💾 Save Changes</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.label}>Name: <Text style={styles.value}>{user.name}</Text></Text>
            <Text style={styles.label}>Email: <Text style={styles.value}>{user.email}</Text></Text>
            <Text style={styles.label}>Phone: <Text style={styles.value}>{user.phone_number}</Text></Text>
            <Text style={styles.label}>Plate: <Text style={styles.value}>{user.vehicle_plate_number}</Text></Text>

            <TouchableOpacity style={styles.editBtn} onPress={() => setEditMode(true)}>
              <Text style={styles.editText}>✏️ Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
              <Text style={styles.deleteText}>🗑️ Delete Account</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default ProfileScreen;
