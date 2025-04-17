import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 16,
    letterSpacing: 1,
  },
  map: {
    flex: 1,
    marginHorizontal: 12,
    borderRadius: 20,
    overflow: "hidden",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#ccc",
    marginTop: 10,
    fontSize: 16,
  },
});
