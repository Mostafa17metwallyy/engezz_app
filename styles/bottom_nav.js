import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#121212",
    paddingVertical: Platform.OS === "ios" ? 25 : 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#000", // clean solid top border
  },
    navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  navIcon: {
    marginBottom: 2,
  },
  navText: {
    color: "#ccc",
    fontSize: 12,
    textAlign: "center",
  },
});
