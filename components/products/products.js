import { StyleSheet, View } from "react-native";
import Product from "../product/product";

const Products = ({ products }) => {
  return (
    <View style={styles.container}>
      {products.map((p, i) => (
        <Product key={i} product={p} />
      ))}
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
