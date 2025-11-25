import styles from "@/styles/common";
import { Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
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
  const percent: number = (inputValue / maxValue) * 100;

  return (
    <View style={styles.containerRoundedComponent}>
      <AnimatedCircularProgress
        size={200}
        width={8}
        fill={percent}
        tintColor={color}
      >
        {() => (
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            {percent}
            {valueUnit}
          </Text>
        )}
      </AnimatedCircularProgress>
      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 8 }}>
        {title}
      </Text>
    </View>
  );
}
