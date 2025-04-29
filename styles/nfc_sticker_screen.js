import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  stickerImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
  },
  detailsContainer: {
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    padding: 20,
    width: "100%",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  label: {
    color: "#b0b0b0",
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  activeStatus: {
    color: "#1E90FF",
  },
  inactiveStatus: {
    color: "#FF4500",
  },
});

export default styles;
