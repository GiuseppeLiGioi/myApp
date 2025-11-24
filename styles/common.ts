import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerRoundedComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },

  circleContainer: {
    position: "relative",
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  containerOuterCircle: {
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: "gray",
  },

  containerInnerCircleLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "50%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  containerInnerCircleRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  innerSemiCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
  },

  containerContent: {
    position: "absolute",
    top: 70,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentInner: {
    fontSize: 48,
    textAlign: "center",
  },

  contentOuter: {
    marginTop: 12,
    fontSize: 32,
    textAlign: "center",
  },
});

export default styles;
