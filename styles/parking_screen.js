import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  card: {
    backgroundColor: "rgba(45, 45, 45, 0.85)",
    borderRadius: 32,
    overflow: "hidden",
    marginBottom: 22,
    paddingBottom: 16,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 14,
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  image: {
    width: "100%",
    height: 190,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 14,
  },
  location: {
    color: "#aaa",
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 4,
    fontStyle: "italic",
  },
  fee: {
    color: "#ccc",
    marginTop: 6,
    fontSize: 16,
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  mapButton: {
    marginTop: 14,
    marginHorizontal: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mapButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
