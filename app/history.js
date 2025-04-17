import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/history_screen";
import BottomNav from "./bottomNav"; // Import Bottom Navigation
import Icon from "react-native-vector-icons/Ionicons"; // Import Icons

// Dummy transaction history
const transactions = [
  { id: 1, method: "Credit/Debit Card", amount: "250 EGP", date: "March 4, 2025", icon: "card-outline" },
  { id: 2, method: "InstaPay", amount: "500 EGP", date: "March 3, 2025", icon: "cash-outline" },
  { id: 3, method: "Apple Wallet", amount: "1200 EGP", date: "March 1, 2025", icon: "logo-apple" },
  { id: 4, method: "Fawry", amount: "80 EGP", date: "Feb 27, 2025", icon: "wallet-outline" },
  { id: 5, method: "Vodafone Cash", amount: "330 EGP", date: "Feb 25, 2025", icon: "phone-portrait-outline" },
];

const HistoryScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.historyList}>
        <Text style={styles.header}>Transaction History</Text>

        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TouchableOpacity key={transaction.id} style={styles.transactionCard}>
              <Icon name={transaction.icon} size={26} color="#1E90FF" style={styles.transactionIcon} />
              <View style={styles.transactionDetails}>
                <Text style={styles.method}>{transaction.method}</Text>
                <Text style={styles.date}>{transaction.date}</Text>
              </View>
              <Text style={styles.amount}>{transaction.amount}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noTransactions}>No transactions yet.</Text>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
};

export default HistoryScreen;
