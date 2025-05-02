import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    paddingBottom: 80,
  },
  scrollContainer: {
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
    backgroundColor: "#1a1a1a",
    borderRadius: 32,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginBottom: 26,
    marginHorizontal: 20,
    borderWidth: 1.2,
    borderColor: "rgba(255, 255, 255, 0.06)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    marginBottom: 16,
    padding: 14,
    borderRadius: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#333",
  },
  label: {
    color: "#bbb",
    fontSize: 16,
    marginBottom: 8,
  },
  value: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  editBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 16,
    borderRadius: 32,
    marginTop: 20,
    alignItems: "center",
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  saveBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 16,
    borderRadius: 32,
    marginTop: 20,
    alignItems: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteBtn: {
    backgroundColor: "#2d2d2d", // 🔄 switched from red to dark neutral
    paddingVertical: 16,
    borderRadius: 32,
    marginTop: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#444",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  toggleLink: {
    marginTop: 14,
    alignItems: "center",
  },
  toggleText: {
    color: "#1E90FF",
    fontSize: 15,
  },
  loading: {
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
    fontSize: 18,
  },
  actionButton: {
    marginTop: 20,
  },
  nfcBtn: {
    backgroundColor: "#1E90FF",
    paddingVertical: 16,
    borderRadius: 32,
    marginTop: 20,
    alignItems: "center",
  },
  nfcText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
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
});

export default styles;
