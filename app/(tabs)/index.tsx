import RoundedComponent from "@/components/my/RoundedComponent";
import { View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 12 }}>
      <RoundedComponent
        inputValue={100}
        maxValue={100}
        title={"Raiting"}
        color={"#4b90f8ff"}
        valueUnit={"%"}
      />
    </View>
  );
}
