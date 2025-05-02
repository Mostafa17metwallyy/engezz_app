import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingBottom: 80,
  },
  listContainer: {
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
    letterSpacing: 1.5,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "rgba(45, 45, 45, 0.85)",
    borderRadius: 32,
    paddingVertical: 18,
    paddingHorizontal: 18,
    marginBottom: 26,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  subText: {
    fontSize: 14,
    color: "#bbb",
    marginTop: 4,
  },
  emptyText: {
    fontSize: 18,
    color: "#bbb",
    textAlign: "center",
    marginTop: 50,
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
  favoriteIcon: {
    position: "absolute",
    top: 14,
    right: 14,
    backgroundColor: "#1e1e1e",
    padding: 8,
    borderRadius: 20,
    zIndex: 10,
  },



});
