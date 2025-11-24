import RoundedComponent from "@/components/my/RoundedComponent";
import { Text, View } from "react-native";
export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Sono Home</Text>
      <RoundedComponent
        inputValue={60}
        maxValue={100}
        title={"Raiting"}
        color={"#4b90f8ff"}
        valueUnit={"%"}
      />
    </View>
  );
}
