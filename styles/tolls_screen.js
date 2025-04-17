import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#fff",
    marginTop: 10,
  },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  tollCard: {
    backgroundColor: "#1a1a1a",
    padding: 12,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
  },
  tollImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  tollName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  tollFee: {
    color: "#ccc",
    marginTop: 4,
  },
  tollLocation: {
    color: "#bbb",
    marginTop: 2,
    fontStyle: "italic",
  },
  mapButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  mapButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
