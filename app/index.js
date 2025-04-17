import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; 
import styles from "../styles/login_screen"; 
import api from "../services/api"; // Import Axios

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const res = await api.post("/users/login", { email, password });
      const { token, user } = res.data;

      // 🔐 Optionally save token in AsyncStorage/context
      console.log("Logged in user:", user);
      router.replace("/HomeScreen"); // Navigate to Home
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      alert("Login failed: " + (err.response?.data?.message || "Unexpected error"));
    }
  };  return (
    <LinearGradient colors={["#000000", "#1a1a1a"]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/LOGO_copy.png")} style={styles.logo} />
        <Text style={styles.title}>ENGEZZ</Text>
        <Text style={styles.tagline}>NO CASH, NO HASSLE, JUST ENGEZZ</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL..."
          placeholderTextColor="#b0b0b0"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD..."
          placeholderTextColor="#b0b0b0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/* ✅ Add Register Button */}
      <TouchableOpacity onPress={() => router.push("/register")} style={styles.registerLink}>
        <Text style={styles.registerText}>Don't have an account? <Text style={{ color: "#08649c", fontWeight: "bold" }}>Register</Text></Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;
