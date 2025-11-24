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

  const rightRotation = percent <= 50 ? (percent / 50) * 180 - 36 : 180;
  const leftRotation = percent > 50 ? ((percent - 50) / 50) * 180 - 36 : 0;

  const rightColor = percent > 0 ? color : "transparent";
  const leftColor = percent > 50 ? color : "transparent";

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
                borderBottomColor: percent < 25 ? "transparent" : rightColor,
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
                borderTopColor: percent > 50 ? "transparent" : leftColor,
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
