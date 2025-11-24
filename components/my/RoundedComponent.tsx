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
  return (
    <View style={styles.containerRoundedComponent}>
      <View>
        <View style={styles.containerOuterCircle}></View>
        <View style={styles.containerInnerCircleLeft}>
          <View
            style={[styles.innerSemiCircle, { borderColor: color, left: -100 }]}
          ></View>
        </View>
        <View style={styles.containerInnerCircleRight}>
          <View
            style={[styles.innerSemiCircle, { borderColor: color, left: 0 }]}
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
