import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensures equal spacing
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: Platform.OS === "ios" ? 18 : 14, // Adjust height for different OS
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 24, // Ensures even spacing
  },
  navItem: {
    flex: 1, // Makes sure all items are evenly spaced
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    width: 30, // Ensures all icons are the same size
    height: 30,
    textAlign: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 12, // Adjusted to be more balanced
    textAlign: "center",
    marginTop: 4, // Moves text closer to the icon
  },
});
