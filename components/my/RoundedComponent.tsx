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
  let rightRotation = percent <= 50 ? (percent / 50) * 180 : 180;
  let leftRotation = percent > 50 ? ((percent - 50) / 50) * 180 : 0;

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
                borderColor: color,
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
                borderColor: color,
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
