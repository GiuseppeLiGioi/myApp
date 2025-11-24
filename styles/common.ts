import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerRoundedComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },

  containerOuterCircle: {
    position: "relative",
    borderRadius: 100,
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "gray",
  },

  containerInnerCircleLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "50%",
    height: "100%",
    overflow: "hidden",
  },

  containerInnerCircleRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: "100%",
    overflow: "hidden",
  },

  innerSemiCircle: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 5,
    top: 0,
  },

  containerContent: {},
  contentInner: {
    fontSize: 16,
    textAlign: "center",
  },

  contentOuter: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
