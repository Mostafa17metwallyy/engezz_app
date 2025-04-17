import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingBottom: 80, // 🔽 Added bottom padding to balance the layout
  },
  historyList: {
    paddingHorizontal: 28,
    paddingBottom: 120, // 🔽 Added extra space at the bottom
    marginTop: 40, // 🔽 Moves the entire transaction list down
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 30, // 🔽 Adds more space below the header
    paddingLeft: 24,
    borderLeftWidth: 6,
    borderLeftColor: "#1E90FF",
    letterSpacing: 1.5,
  },
  transactionCard: {
    flexDirection: "row",
    backgroundColor: "rgba(45, 45, 45, 0.85)",
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 26, // 🔽 Increased space for a more premium look
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 12,
  },
  transactionIcon: {
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  method: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  date: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E90FF",
  },
  noTransactions: {
    fontSize: 18,
    color: "#bbb",
    textAlign: "center",
    marginTop: 50,
  },
});
