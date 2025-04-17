import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  plansList: {
    paddingHorizontal: 28,
    paddingBottom: 100,
    marginTop: 40, // ⬇ Move plans down
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 40, // ⬆ Added more space above
    paddingLeft: 24,
    borderLeftWidth: 6,
    borderLeftColor: "#1E90FF",
    letterSpacing: 1.5,
  },
  planCard: {
    backgroundColor: "rgba(45, 45, 45, 0.85)",
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 24, // ⬆ Increased spacing for a cleaner look
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 12,
    transition: "all 0.3s ease-in-out",
  },
  selectedPlan: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    backgroundColor: "rgba(30, 144, 255, 0.3)",
  },
  planPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  planTitle: {
    fontSize: 16,
    color: "#bbb",
    marginTop: 4,
  },
  benefitsContainer: {
    marginTop: 12,
    paddingLeft: 10,
  },
  benefitItem: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
  noPlanSelected: {
    textAlign: "center",
    color: "#bbb",
    fontSize: 16,
    marginTop: 10,
  },
  subscribeButton: {
    backgroundColor: "#1E90FF",
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 40, // ⬆ More space above the subscribe button
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 12,
  },
  subscribeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
