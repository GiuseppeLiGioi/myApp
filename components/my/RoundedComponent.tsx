import styles from "@/styles/common";
import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle, Path, Svg } from "react-native-svg";
type RoundedComponentProps = {
  inputValue: number;
  maxValue: number;
  title: string;
  color: string;
  valueUnit: string;
  checked: boolean;
};
export default function RoundedComponent({
  inputValue,
  maxValue,
  title,
  color,
  valueUnit,
  checked,
}: RoundedComponentProps) {
  const percent: number = (inputValue / maxValue) * 100;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (percent === 100) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    } else {
      fadeAnim.setValue(0);
    }
  }, [percent]);

  return (
    <View style={styles.containerRoundedComponent}>
      <AnimatedCircularProgress
        size={200}
        width={8}
        fill={percent}
        tintColor={color}
        renderCap={({ center }) => (
          <Circle cx={center.x} cy={center.y - 1} r={8} fill="blue" />
        )}
      >
        {() => (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {percent === 100 ? (
              <Animated.View
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 75,
                  backgroundColor: "#54B435",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: fadeAnim,
                }}
              >
                <Svg width={60} height={60} viewBox="0 0 40 40">
                  <Path
                    d="M12.5 20l5 5 9-9"
                    stroke="#fff"
                    strokeWidth={4}
                    fill="none"
                    strokeLinecap="round"
                  />
                </Svg>
              </Animated.View>
            ) : (
              <Text style={{ fontSize: 32, textAlign: "center" }}>
                {Math.round(percent)}
                {valueUnit}
              </Text>
            )}
          </View>
        )}
      </AnimatedCircularProgress>

      <Text style={{ fontSize: 24, textAlign: "center", marginTop: 8 }}>
        {title}
      </Text>
    </View>
  );
}
