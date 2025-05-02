import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import api from "../services/api";
import styles from "../styles/register_screen";
import { Ionicons } from "@expo/vector-icons";

const RegisterScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    password: "",
    vehicle_plate_number: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!user.name.trim()) errs.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) errs.email = "Invalid email";
    if (!/^01[0-9]{9}$/.test(user.phone_number)) errs.phone = "Invalid Egyptian phone number";
    if (user.password.length < 6) errs.password = "Password must be at least 6 characters";
    if (!/^[\u0621-\u064A]{3}\s?[٠-٩]{3,4}$/.test(user.vehicle_plate_number.trim()))
      errs.plate = "Plate must be 3 Arabic letters + 3 or 4 Arabic digits (e.g., س ف ج ١٢٣٤)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegister = async () => {
    if (!validate()) return;

    try {
      const res = await api.post("/api/users/register", {
        ...user,
        vehicle_plate_number: user.vehicle_plate_number.trim(),
      });
      Alert.alert("Success", "User registered successfully!");
      router.replace("/");
    } catch (err) {
      Alert.alert("Error", err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <LinearGradient colors={["#000", "#1a1a1a"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.form}>
        <Text style={styles.title}>Create Your Account</Text>

        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor="#b0b0b0"
          onChangeText={(val) => setUser({ ...user, name: val })}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#b0b0b0"
          onChangeText={(val) => setUser({ ...user, email: val })}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="phone-pad"
          placeholderTextColor="#b0b0b0"
          onChangeText={(val) => setUser({ ...user, phone_number: val })}
        />
        {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={[styles.input, { flex: 1 }]}
            secureTextEntry={!showPassword}
            placeholderTextColor="#b0b0b0"
            onChangeText={(val) => setUser({ ...user, password: val })}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={22} color="#aaa" />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TextInput
          placeholder="Plate Number (e.g., س ف ج ١٢٣٤)"
          style={[styles.input, { textAlign: "right", writingDirection: "rtl" }]}
          placeholderTextColor="#b0b0b0"
          onChangeText={(val) => setUser({ ...user, vehicle_plate_number: val })}
        />
        {errors.plate && <Text style={styles.errorText}>{errors.plate}</Text>}

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace("/")} style={styles.loginLink}>
          <Text style={styles.loginText}>
            Already have an account?{" "}
            <Text style={styles.loginTextLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

export default RegisterScreen;
