import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    marginBottom: 12,
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },
  label: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 6,
  },
  value: {
    color: "#fff",
    fontSize: 16,
  },
  editBtn: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  saveBtn: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  saveText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteBtn: {
    backgroundColor: "#ff4444",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  toggleLink: {
    marginTop: 10,
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
});

export default styles;
