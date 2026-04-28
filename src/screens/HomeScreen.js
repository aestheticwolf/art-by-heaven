import { View, FlatList, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
      
      <LinearGradient
        colors={["#fbc2eb", "#a6c1ee"]}
        style={styles.header}
      >
        <Text style={styles.title}>Art by Heaven ✨</Text>
      </LinearGradient>

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
    flex: 1,
    backgroundColor: "#fdf6f9",
  },
  header: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});