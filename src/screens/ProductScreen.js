import { View, Text, Image, StyleSheet } from "react-native";

export default function ProductScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
  },
  name: {
    fontSize: 20,
    marginTop: 15,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "gray",
    marginTop: 5,
  },
});