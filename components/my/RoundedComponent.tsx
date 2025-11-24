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
                borderLeftColor: color,
                borderTopColor: color,
                borderBottomColor: color,
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
                borderRightColor: color,
                borderTopColor: color,
                borderBottomColor: color,
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
