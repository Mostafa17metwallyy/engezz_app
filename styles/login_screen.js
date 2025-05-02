import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    color: "#1E90FF",
    fontWeight: "bold",
    letterSpacing: 2,
    marginTop: 8,
  },
  tagline: {
    fontSize: 12,
    color: "#aaa",
    fontStyle: "italic",
    marginTop: 4,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "rgba(30,30,30,0.9)",
    color: "#fff",
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: "#1E90FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  registerLink: {
    marginTop: 28,
    alignItems: "center",
  },
  registerText: {
    color: "#bbb",
    fontSize: 14,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#1E90FF",
    fontWeight: "600",
    fontSize: 14,
  },
});
