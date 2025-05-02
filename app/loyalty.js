import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/loyalty_screen";
import BottomNav from "./bottomNav";

const LoyaltyProgram = () => {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      price: "1000 EGP/Month",
      title: "Best Experience",
      benefits: [
        "✅ Unlimited parking access",
        "✅ Priority entry & exit",
        "✅ Discounts on fuel stations",
        "✅ 24/7 customer support",
      ],
    },
    {
      id: 2,
      price: "100 EGP/Month",
      title: "Best Choice",
      benefits: [
        "✅ Discounted parking rates",
        "✅ Exclusive promotions",
        "✅ Access to loyalty rewards",
        "✅ Basic customer support",
      ],
    },
  ];

  const toggleSelection = (id) => {
    setSelectedPlan((prev) => (prev === id ? null : id));
  };

  return (
    <View style={styles.container}>
      {/* 🔙 Back Button */}
      <TouchableOpacity onPress={router.back} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.plansList}>
        <Text style={styles.header}>Get Engezz Premium</Text>

        {plans.map((plan) => (
          <TouchableOpacity
            key={plan.id}
            style={[styles.planCard, selectedPlan === plan.id && styles.selectedPlan]}
            onPress={() => toggleSelection(plan.id)}
          >
            <Text style={styles.planPrice}>{plan.price}</Text>
            <Text style={styles.planTitle}>{plan.title}</Text>

            {selectedPlan === plan.id &&
              plan.benefits.map((benefit, index) => (
                <Text key={index} style={styles.benefitItem}>
                  {benefit}
                </Text>
              ))}
          </TouchableOpacity>
        ))}

        {!selectedPlan && (
          <Text style={styles.noPlanSelected}>No plan selected</Text>
        )}

        <TouchableOpacity
          style={styles.subscribeButton}
          onPress={() =>
            alert(
              `Subscribed to ${
                selectedPlan
                  ? plans.find((plan) => plan.id === selectedPlan).title
                  : "No Plan Selected"
              }`
            )
          }
          disabled={!selectedPlan}
        >
          <Text style={styles.subscribeText}>
            {selectedPlan ? "SUBSCRIBE" : "SELECT A PLAN"}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default LoyaltyProgram;
