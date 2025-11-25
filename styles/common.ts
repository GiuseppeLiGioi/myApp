import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  containerRoundedComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },

  circleContainer: {
    position: "relative",
    width: deviceWidth > 400 ? 300 : 200,
    height: deviceWidth > 400 ? 300 : 200,
    justifyContent: "center",
    alignItems: "center",
  },

  containerOuterCircle: {
    borderRadius: deviceWidth > 400 ? 150 : 100,
    width: deviceWidth > 400 ? 300 : 200,
    height: deviceWidth > 400 ? 300 : 200,
    borderWidth: deviceWidth > 400 ? 7 : 5,
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
    width: deviceWidth > 400 ? 300 : 200,
    height: deviceWidth > 400 ? 300 : 200,
    borderRadius: deviceWidth > 400 ? 150 : 100,
    borderWidth: deviceWidth > 400 ? 7 : 5,
  },

  containerContent: {
    position: "absolute",
    top: deviceWidth > 400 ? 105 : 70,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentInner: {
    fontSize: deviceWidth > 400 ? 72 : 48,
    textAlign: "center",
  },

  contentOuter: {
    marginTop: 12,
    fontSize: deviceWidth > 400 ? 48 : 32,
    textAlign: "center",
  },

  containerInnerCircle: {},
  textBottom: {
    fontSize: deviceWidth > 400 ? 32 : 28,
    textAlign: "center",
    marginTop: 16,
  },

  textUnit: {
    fontSize: deviceWidth > 400 ? 32 : 28,
    color: "#AAA9B0",
    fontWeight: "600",
  },
  textValue: {
    fontSize: deviceWidth > 400 ? 54 : 42,
    fontWeight: "600",
    transform: [{ scaleY: 1.25 }],
  },

  containerTextValue: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },

  containerUnit: {
    marginLeft: 2,
    position: "relative",
    top: deviceWidth > 400 ? -10 : -6,
    transform: [{ scaleX: 1.1 }],
  },
});

export default styles;
