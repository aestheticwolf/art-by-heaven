import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";

export default function ProductScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>

      <Animated.View entering={BounceIn.delay(300)}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 15,
  },
  name: {
    fontSize: 22,
    marginTop: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "#777",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ff7eb3",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});