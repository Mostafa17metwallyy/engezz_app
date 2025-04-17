import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "#00aaff",
    fontWeight: "bold",
    marginTop: 10,
  },
  tagline: {
    fontSize: 12,
    color: "#00aaff",
    marginTop: 5,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "#444",
    color: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#00aaff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerLink: {
    marginTop: 20,
    alignItems: "center",
  },
  
  registerText: {
    color: "#ccc",
    fontSize: 14,
  },
  
});
