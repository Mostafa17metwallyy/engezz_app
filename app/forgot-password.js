import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/login_screen"; // reuse login styles
import api from "../services/api";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const handleReset = async () => {
    if (!email || !newPassword) {
      return Alert.alert("Missing Info", "Please fill in all fields.");
    }

    try {
      const res = await api.put("/users/reset-password", { email, newPassword });
      Alert.alert("✅ Success", res.data.message || "Password reset successfully");
      router.replace("/"); // Go back to login
    } catch (err) {
      console.error("❌ Reset failed:", err.response?.data?.message || err.message);
      Alert.alert("Error", err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.title, { marginBottom: 20 }]}>🔐 Reset Password</Text>

      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        placeholderTextColor="#b0b0b0"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Enter new password"
        style={styles.input}
        placeholderTextColor="#b0b0b0"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>RESET PASSWORD</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()} style={styles.registerLink}>
        <Text style={styles.registerText}>Back to login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
