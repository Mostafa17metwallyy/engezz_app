import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  plansList: {
    paddingHorizontal: 28,
    paddingBottom: 120,
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 40,
    paddingLeft: 24,
    borderLeftWidth: 6,
    borderLeftColor: "#1E90FF",
    letterSpacing: 1.5,
  },
  planCard: {
    backgroundColor: "rgba(45, 45, 45, 0.85)",
    borderRadius: 32,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 24,
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  selectedPlan: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    backgroundColor: "rgba(30, 144, 255, 0.25)",
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
  benefitItem: {
    fontSize: 14,
    color: "#fff",
    marginTop: 6,
    paddingLeft: 4,
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
    marginTop: 40,
  },
  subscribeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 100,
    backgroundColor: "#1e1e1e",
    padding: 10,
    borderRadius: 30,
  },
});
