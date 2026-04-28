import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

export default function ProductCard({ item, onPress }) {
  return (
    <Animated.View entering={FadeInUp.duration(500)}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    margin: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },
  name: {
    fontSize: 15,
    marginTop: 8,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});