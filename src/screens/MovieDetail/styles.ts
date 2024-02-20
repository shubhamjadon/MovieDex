import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/SIZE";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  poster: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH,
  },
  blurViewContainer: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 8,
    overflow: "hidden",
  },
  blurView: {
    padding: 8,
  },
  contentContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
    flex: 1,
  },
  posterTitle: {
    color: "#f6f6f6",
    fontFamily: "Inter_600SemiBold",
    fontSize: 28,
    textAlign: "center",
  },
  posterAdditinalInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 16,
  },
  posterAdditionalInfoValue: {
    color: "#f6f6f6",
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    textAlign: "center",
  },
  posterAdditionalInfoLabel: {
    color: "#777880",
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    textAlign: "center",
  },
  overviewContainer: {
    paddingTop: 32,
  },
  overview: {
    color: "#777880",
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    textAlign: "left",
  },
});

export default styles;
