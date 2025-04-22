import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/login_screen";
import api from "../services/api";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await api.post("/users/login", { email, password });
      const { token, user } = res.data;

      // 🔐 Save token securely
      await AsyncStorage.setItem("token", token);

      console.log("✅ Logged in user:", user);
      console.log("📦 Saved token:", token);

      router.replace("/HomeScreen"); // Navigate to Home
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      alert("Login failed: " + (err.response?.data?.message || "Unexpected error"));
    }
  };

  return (
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
          keyboardType="email-address"
          autoCapitalize="none"
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

        {/* 🔑 Forgot Password */}
        <TouchableOpacity
          onPress={() => router.push("/forgot-password")}
          style={{ alignSelf: "flex-end", marginTop: 8, marginBottom: 20 }}
        >
          <Text style={{ color: "#1E90FF", fontWeight: "600" }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/register")} style={styles.registerLink}>
        <Text style={styles.registerText}>
          Don't have an account?{" "}
          <Text style={{ color: "#08649c", fontWeight: "bold" }}>Register</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default LoginScreen;
