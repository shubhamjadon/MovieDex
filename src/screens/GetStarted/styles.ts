import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    position: "relative",
  },
  backgroundImage: {
    marginTop: 32,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    color: "#f6f6f6",
    fontSize: 24,
    fontFamily: "Inter_500Medium",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#f6f6f6",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 16,
  },
  buttonText: {
    color: "#000",
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
  },
});

export default styles;
