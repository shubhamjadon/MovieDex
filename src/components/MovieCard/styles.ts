import { StyleSheet } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/SIZE";

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16 },
  posterContainer: {
    position: "relative",
    width: SCREEN_WIDTH - SCREEN_WIDTH / 3,
  },
  poster: {
    height: SCREEN_HEIGHT / 2,
    width: SCREEN_WIDTH - SCREEN_WIDTH / 3,
    borderRadius: 24,
  },
  blurViewContainerWrapper: {
    position: "absolute",
    right: 16,
    top: 16,
  },
  blurViewContainer: {
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 8,
    overflow: "hidden",
  },
  ratingContainer: {
    marginTop: 8,
  },
  blurView: {
    padding: 10,
    paddingVertical: 14,
  },
  ratingText: {
    fontFamily: "Inter_600SemiBold",
    color: "#ffe234",
    textAlign: "center",
  },
  ratingFromText: {
    fontFamily: "Inter_500Medium",
    color: "#ffe234",
    textAlign: "center",
  },
  posterInfoContainer: {
    width: SCREEN_WIDTH - SCREEN_WIDTH / 3,
    alignItems: "center",
  },
  posterTitle: {
    color: "#f6f6f6",
    fontFamily: "Inter_600SemiBold",
    fontSize: 28,
    textAlign: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  posterReleaseDate: {
    color: "#777880",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    paddingTop: 8,
  },
});

export default styles;
