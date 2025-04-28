import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import api from "../services/api"; // Axios instance

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

      <TextInput placeholder="Name" style={styles.input} placeholderTextColor="#b0b0b0"
        onChangeText={val => setUser({ ...user, name: val })} />
      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" placeholderTextColor="#b0b0b0"
        onChangeText={val => setUser({ ...user, email: val })} />
      <TextInput placeholder="Phone Number" style={styles.input} keyboardType="phone-pad" placeholderTextColor="#b0b0b0"
        onChangeText={val => setUser({ ...user, phone_number: val })} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor="#b0b0b0"
        onChangeText={val => setUser({ ...user, password: val })} />
      <TextInput placeholder="Vehicle Plate Number" style={styles.input} placeholderTextColor="#b0b0b0"
        onChangeText={val => setUser({ ...user, vehicle_plate_number: val })} />

      <Button title="Register" onPress={handleRegister} color="#045c9c" />
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#000",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 12,
    marginBottom: 15,
    borderRadius: 10,
  },
});
