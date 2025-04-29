import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import api from "../services/api";
import styles from "../styles/register_screen"; // ✅ external styles

const RegisterScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    vehicle_plate_number: "",
  });

  const handleRegister = async () => {
    console.log("📤 Sending registration payload:", user);

    try {
      const res = await api.post("/api/users/register", user);
      console.log("✅ Register success:", res.data);
      Alert.alert("Success", "User registered successfully!");
      router.replace("/");
    } catch (err) {
      console.error("🔥 Register error:", err.response?.data || err.message);
      Alert.alert("Error", err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        placeholderTextColor="#b0b0b0"
        onChangeText={(val) => setUser({ ...user, name: val })}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#b0b0b0"
        onChangeText={(val) => setUser({ ...user, email: val })}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="phone-pad"
        placeholderTextColor="#b0b0b0"
        onChangeText={(val) => setUser({ ...user, phone_number: val })}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#b0b0b0"
        onChangeText={(val) => setUser({ ...user, password: val })}
      />
      <TextInput
        placeholder="Vehicle Plate Number"
        style={styles.input}
        placeholderTextColor="#b0b0b0"
        onChangeText={(val) => setUser({ ...user, vehicle_plate_number: val })}
      />

      <Button title="Register" onPress={handleRegister} color="#045c9c" />

      <TouchableOpacity onPress={() => router.push("/")} style={styles.loginLink}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginTextLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default RegisterScreen;
