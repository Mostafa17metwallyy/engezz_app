import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  searchContainer: {
    marginHorizontal: 20,
    marginTop: 20,  // ✅ Lowered the search bar slightly
    backgroundColor: "rgba(255, 255, 255, 0.15)",  // ✅ Subtle transparency effect
    borderRadius: 25,  // ✅ Softer edges for a premium look
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,  // ✅ Subtle depth effect
  },
  searchInput: {
    flex: 1,
    color: "#fff",  // ✅ White text for better visibility
    fontSize: 16,  // ✅ Slightly larger for a cleaner look
  },
  logoContainer: {
    alignItems: "center",
    marginVertical: 30,  // ✅ More breathing room
  },
  logo: {
    width: 130,  // ✅ Slightly larger for a premium feel
    height: 130,
    resizeMode: "contain",
  },
  tagline: {
    color: "#e5e5e5",
    fontSize: 16,  // ✅ Increased font size
    fontWeight: "500",
    textTransform: "uppercase",  // ✅ More stylish appearance
    letterSpacing: 1,
  },
  menuContainer: {
    alignItems: "center",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#222",  // ✅ Darker, richer background
    paddingVertical: 24,  // ✅ More padding for a **chic, spacious** design
    paddingHorizontal: 24,
    marginVertical: 15,  // ✅ Better spacing between menu items
    width: "90%",
    borderRadius: 18,  // ✅ Smoother rounding for a **modern look**
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,  // ✅ Smooth depth
  },
  icon: {
    width: 75,   // ✅ Increased icon size for better presence
    height: 75,
    resizeMode: "contain",
  },
  menuText: {
    color: "#fff",
    fontSize: 16,  
    fontWeight: "bold",
    flex: 1,  // Ensures text takes available space
    textAlign: "center",
    textTransform: "uppercase",  // ✅ Gives a **modern, clean feel**
    letterSpacing: 1,
  },
  arrowContainer: {
    backgroundColor: "#1E90FF", // Blue background
    width: 45,
    height: 45,
    borderRadius: 22.5, // ✅ Perfectly rounded
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,  // ✅ Gives a slight pop effect
  },
  arrow: {
    color: "#fff",
    fontSize: 22,  // ✅ Slightly larger arrow
    fontWeight: "bold",
  },
});

