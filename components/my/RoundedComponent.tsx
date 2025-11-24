import styles from "@/styles/common";
import { Text, View } from "react-native";

type RoundedComponentProps = {
  inputValue: number;
  maxValue: number;
  title: string;
  color: string;
  valueUnit: string;
};
export default function RoundedComponent({
  inputValue,
  maxValue,
  title,
  color,
  valueUnit,
}: RoundedComponentProps) {
  const percent = (inputValue / maxValue) * 100;

  const angle = (percent / 100) * 360;
  let rightRotation = angle <= 180 ? angle : 180;
  let leftRotation = angle > 180 ? angle - 180 : 0;

  const rightColor = percent > 0 ? color : "transparent";
  const leftColor = percent > 50 ? color : "transparent";

  /*console.log(
    "percent",
    percent,
    "rightRotation",
    rightRotation,
    "leftRotation",
    leftRotation
  );*/

  return (
    <View style={styles.containerRoundedComponent}>
      <View style={styles.circleContainer}>
        <View style={styles.containerOuterCircle}></View>
        <View style={styles.containerInnerCircleRight}>
          <View
            style={[
              styles.innerSemiCircle,
              {
                borderRightColor: "transparent",
                borderLeftColor: rightColor,
                borderTopColor: rightColor,
                borderBottomColor: rightColor,
                transform: [{ rotate: `${rightRotation}deg` }],
              },
            ]}
          ></View>
        </View>
        <View style={styles.containerInnerCircleLeft}>
          <View
            style={[
              styles.innerSemiCircle,
              {
                borderLeftColor: "transparent",
                borderRightColor: leftColor,
                borderTopColor: leftColor,
                borderBottomColor: leftColor,
                transform: [{ rotate: `${leftRotation}deg` }],
              },
            ]}
          ></View>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.contentInner}>
            {percent}
            {valueUnit}
          </Text>
        </View>
      </View>
      <Text style={styles.contentOuter}>{title}</Text>
    </View>
  );
}
