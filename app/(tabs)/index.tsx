import RoundedComponent from "@/components/my/RoundedComponent";
import { View } from "react-native";
export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RoundedComponent
        inputValue={100}
        maxValue={100}
        title={"Rating"}
        color={"#1EA2F5"}
        checked={false}
        valueUnit={"%"}
      />
    </View>
  );
}
