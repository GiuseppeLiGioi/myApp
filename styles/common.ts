import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  containerRoundedComponent: {
    width: "80%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textBottom: {
    textAlign: "center",
    marginTop: 16,
  },

  textUnit: {
    color: "#AAA9B0",
    fontWeight: "400",
  },
  textValue: {
    fontWeight: "400",
    transform: [{ scaleY: 1.25 }],
  },

  containerTextValue: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  containerUnit: {
    marginLeft: 2,
    position: "relative",
    transform: [{ scaleX: 1.1 }],
  },
});

export default styles;
