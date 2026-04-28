import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Art by Heaven</Text>
      <Button title="Go to Product" onPress={() => navigation.navigate("Product")} />
    </View>
  );
}