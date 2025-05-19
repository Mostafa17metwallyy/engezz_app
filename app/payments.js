import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/payments_screen";
import BottomNav from "./bottomNav";
import Icon from "react-native-vector-icons/Ionicons";
import { BASE_URL } from "./constants";

const paymentMethods = [
  { id: 1, name: "Credit/Debit Card", icon: "card-outline" },
  { id: 2, name: "Meeza", icon: "cash-outline" },
];

const PaymentsScreen = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const togglePaymentSelection = (method) => {
    if (selectedMethod === method.id) {
      setSelectedMethod(null);
    } else {
      setSelectedMethod(method.id);
    }
  };

  const handlePayment = async () => {
    try {
      const method = paymentMethods.find((m) => m.id === selectedMethod);

      const res = await fetch(`${BASE_URL}/api/paymob/token`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount_cents: 10000, // 100 EGP
          user: {
            name: "Test User",
            email: "test@email.com",
            phone: "+201000000000",
            method: method.name.toLowerCase().includes("meeza")
              ? "meeza"
              : "card",
          },
        }),
      });

      const text = await res.text();
      console.log("🔍 Raw response from backend:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("❌ Backend did not return JSON. Check backend logs.");
      }

      if (data.iframe_url) {
        console.log("🔗 Redirecting to:", data.iframe_url);
        Linking.openURL(data.iframe_url);
      } else {
        Alert.alert("❌ Failed", "Could not get payment link from server.");
      }
    } catch (err) {
      console.error("🔥 Payment error:", err);
      Alert.alert("❌ Error", "Something went wrong while processing payment.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.paymentList}>
        <Text style={styles.header}>Select a Payment Method</Text>

        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentCard,
              selectedMethod === method.id && styles.selectedPayment,
            ]}
            onPress={() => togglePaymentSelection(method)}
          >
            <Icon
              name={method.icon}
              size={26}
              color={selectedMethod === method.id ? "#1E90FF" : "#fff"}
              style={styles.paymentIcon}
            />
            <Text
              style={[
                styles.paymentName,
                selectedMethod === method.id && styles.selectedText,
              ]}
            >
              {method.name}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={[
            styles.payButton,
            selectedMethod ? styles.payButtonActive : styles.payButtonDisabled,
          ]}
          disabled={!selectedMethod}
          onPress={handlePayment}
        >
          <Text style={styles.payButtonText}>
            {selectedMethod ? "Proceed to Payment" : "Select a Payment Method"}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default PaymentsScreen;
