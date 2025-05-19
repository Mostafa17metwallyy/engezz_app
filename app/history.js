import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles/history_screen";
import BottomNav from "./bottomNav";
import Icon from "react-native-vector-icons/Ionicons";
import { BASE_URL } from "./constants";

const HistoryScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${BASE_URL}/api/transactions`)
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error("Failed to fetch transactions", err));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.historyList}>
        <Text style={styles.header}>Transaction History</Text>

        {transactions.length > 0 ? (
          transactions.map((t, i) => (
            <TouchableOpacity key={i} style={styles.transactionCard}>
              <Icon name="card-outline" size={26} color="#1E90FF" style={styles.transactionIcon} />
              <View style={styles.transactionDetails}>
                <Text style={styles.method}>{t.transaction_type}</Text>
                <Text style={styles.date}>{new Date(t.transaction_time).toDateString()}</Text>
              </View>
              <Text style={styles.amount}>{t.amount} EGP</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noTransactions}>No transactions yet.</Text>
        )}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default HistoryScreen;
