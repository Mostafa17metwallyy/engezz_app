import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingBottom: 80,
  },
  scrollContent: {
    alignItems: "center",
    paddingHorizontal: 28,
    paddingBottom: 120,
    marginTop: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 30,
    paddingLeft: 24,
    borderLeftWidth: 6,
    borderLeftColor: "#1E90FF",
    alignSelf: "flex-start",
    letterSpacing: 1.5,
  },
  stickerImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: "#1a1a1a",
  },
  detailsContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginBottom: 26,
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
    width: "100%",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  label: {
    color: "#bbb",
    fontSize: 16,
    fontWeight: "500",
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  activeStatus: {
    color: "#1E90FF",
    fontWeight: "bold",
  },
  inactiveStatus: {
    color: "#999",
    fontWeight: "bold",
  },
});

export default styles;
