import { View, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: "1",
    name: "Pink Tulip Bouquet",
    price: 299,
    image: "https://i.imgur.com/1.jpg",
  },
  {
    id: "2",
    name: "White Lily Bouquet",
    price: 349,
    image: "https://i.imgur.com/2.jpg",
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            onPress={() => navigation.navigate("Product", { item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdf6f9",
    flex: 1,
  },
});