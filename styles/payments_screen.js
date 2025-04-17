import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingBottom: 80, // Added bottom padding to improve layout balance
  },
  paymentList: {
    paddingHorizontal: 28,
    paddingBottom: 120, // Ensures spacing for the button at the bottom
    marginTop: 40, // Moves the entire payment selection lower
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 30, // Adds more space below the header
    paddingLeft: 24,
    borderLeftWidth: 6,
    borderLeftColor: "#1E90FF",
    letterSpacing: 1.5,
  },
  paymentCard: {
    flexDirection: "row",
    backgroundColor: "rgba(45, 45, 45, 0.85)",
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 26, // Slightly increased for a more luxurious layout
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 12,
    transition: "all 0.3s ease-in-out",
  },
  selectedPayment: {
    borderColor: "#1E90FF",
    borderWidth: 2,
    backgroundColor: "rgba(30, 144, 255, 0.2)",
  },
  paymentIcon: {
    marginRight: 12,
  },
  paymentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  selectedText: {
    color: "#1E90FF",
  },
  payButton: {
    borderRadius: 32,
    paddingVertical: 16,
    alignItems: "center",
    position: "absolute",
    bottom: 30, // Moves the button up a little to balance the screen
    left: 20,
    right: 20,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 12,
  },
  payButtonActive: {
    backgroundColor: "#1E90FF",
  },
  payButtonDisabled: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
