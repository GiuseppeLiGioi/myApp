import RoundedComponent from "@/components/my/RoundedComponent";
import { View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <RoundedComponent
        inputValue={50}
        maxValue={100}
        title={"Rating"}
        color={"#1EA2F5"}
        checked={false}
        valueUnit={"%"}
      />
    </View>
  );
}
