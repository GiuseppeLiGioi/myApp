import styles from "@/styles/common";
import { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Path, Svg } from "react-native-svg";
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
  const [containerSize, setContainerSize] = useState<number>(0);
  const percent: number = (inputValue / maxValue) * 100;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const maxContainerSize: number = 350;
  const fontSizeValue: number = containerSize * 0.25;
  const fontSizeSymbol: number = containerSize * 0.14;
  const fontSizeText: number = containerSize * 0.18;
  const borderSize: number = containerSize * 0.03;
  const topPosition: number = -(containerSize * 0.02);
  const innerBoxSize: number = containerSize * 0.6;
  const widthSvg: number = containerSize * 0.8;
  const strok: number = containerSize * 0.01;
  const animatedWidth: number = containerSize * 0.8;

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
    <View
      style={styles.containerRoundedComponent}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setContainerSize(Math.min(width, height, maxContainerSize));
      }}
    >
      {containerSize > 0 && (
        <AnimatedCircularProgress
          size={containerSize}
          width={borderSize}
          fill={percent}
          tintColor={color}
          lineCap="round"
          backgroundColor="#e0f2faff"
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
              {percent === 100 && checked === true ? (
                <Animated.View
                  style={{
                    width: animatedWidth,
                    height: animatedWidth,
                    borderRadius: animatedWidth / 2,
                    backgroundColor: "#54B435",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: fadeAnim,
                  }}
                >
                  <Svg width={widthSvg} height={widthSvg} viewBox="0 0 40 40">
                    <Path
                      d="M12.5 20l5 5 9-9"
                      stroke="#fff"
                      strokeWidth={strok}
                      fill="none"
                      strokeLinecap="round"
                    />
                  </Svg>
                </Animated.View>
              ) : (
                <View
                  style={[
                    styles.containerTextValue,
                    { width: innerBoxSize, aspectRatio: 1 },
                  ]}
                >
                  <Text
                    style={[
                      styles.textValue,
                      { color: color, fontSize: fontSizeValue },
                    ]}
                  >
                    {percent}
                  </Text>
                  <View style={styles.containerUnit}>
                    <Text
                      style={[
                        styles.textUnit,
                        { fontSize: fontSizeSymbol, top: topPosition },
                      ]}
                    >
                      {valueUnit}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
        </AnimatedCircularProgress>
      )}

      <Text style={[styles.textBottom, { fontSize: fontSizeText }]}>
        {title}
      </Text>
    </View>
  );
}
