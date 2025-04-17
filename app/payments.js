import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/payments_screen";
import BottomNav from "./bottomNav"; // Import Bottom Navigation
import Icon from "react-native-vector-icons/Ionicons"; // Import Icons for Payment Methods

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
    if (selectedMethod === method.id) {
      setSelectedMethod(null); // Deselect if already selected
    } else {
      setSelectedMethod(method.id); // Select if not selected
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
              selectedMethod === method.id && styles.selectedPayment, // Highlight when selected
            ]}
            onPress={() => togglePaymentSelection(method)}
          >
            <Icon
              name={method.icon}
              size={26}
              color={selectedMethod === method.id ? "#1E90FF" : "#fff"} // Change icon color if selected
              style={styles.paymentIcon}
            />
            <Text
              style={[
                styles.paymentName,
                selectedMethod === method.id && styles.selectedText, // Change text color if selected
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

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

export default PaymentsScreen;
