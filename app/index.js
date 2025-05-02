import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/login_screen";
import api from "../services/api";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      const res = await api.post("/api/users/login", { email, password });
      const { token, user } = res.data;

      await AsyncStorage.setItem("token", token);
      router.replace("/HomeScreen");
    } catch (err) {
      const msg = err.response?.data?.message || "Invalid credentials.";
      setError(msg);
    }
  };

  return (
    <LinearGradient colors={["#000", "#1a1a1a"]} style={styles.container}>
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

        <View style={{ position: "relative" }}>
          <TextInput
            style={styles.input}
            placeholder="PASSWORD..."
            placeholderTextColor="#b0b0b0"
            secureTextEntry={secureText}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={{
              position: "absolute",
              right: 14,
              top: 12,
              padding: 4,
            }}
          >
            <Ionicons
              name={secureText ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#ccc"
            />
          </TouchableOpacity>
        </View>

        {error ? (
          <Text style={{ color: "#ff5555", marginTop: 8, fontSize: 13 }}>
            {error}
          </Text>
        ) : null}

        <TouchableOpacity
          onPress={() => router.push("/forgot-password")}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
