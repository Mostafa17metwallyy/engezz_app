import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/payments_screen";
import BottomNav from "./bottomNav";
import Icon from "react-native-vector-icons/Ionicons";

const paymentMethods = [
  { id: 1, name: "Credit/Debit Card", icon: "card-outline" },
  { id: 2, name: "InstaPay", icon: "cash-outline" },
  { id: 3, name: "Apple Wallet", icon: "logo-apple" },
  { id: 4, name: "Fawry", icon: "wallet-outline" },
  { id: 5, name: "Vodafone Cash", icon: "phone-portrait-outline" },
];

const PaymentsScreen = () => {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const togglePaymentSelection = (method) => {
    setSelectedMethod((prev) => (prev === method.id ? null : method.id));
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

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
          onPress={() =>
            alert(
              selectedMethod
                ? `Proceeding with: ${
                    paymentMethods.find((m) => m.id === selectedMethod).name
                  }`
                : "Please select a payment method"
            )
          }
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
