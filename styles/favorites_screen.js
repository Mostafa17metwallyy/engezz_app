import { StyleSheet } from "react-native";

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    borderLeftWidth: 5,
    borderLeftColor: "#1E90FF",
    paddingLeft: 12,
  },
  listContainer: {
    paddingBottom: 100, // Space for bottom nav
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: 14,
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subText: {
    color: "#aaa",
    fontSize: 14,
  },
  emptyText: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginTop: 40,
  },
});
