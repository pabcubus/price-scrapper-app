import { StyleSheet, View, Text, Image } from "react-native";

const Product = ({ product }) => {
  const { name, prices, img } = product;

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{ uri: img }} />
      </View>
      <View style={styles.legendWrapper}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default Product;

const width = 100;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    minHeight: width,
    justifyContent: "center",
    padding: 5,
  },
  imageWrapper: {
    padding: 5,
    flex: 1,
    maxWidth: width,
    boxSizing: "border-box",
  },
  image: {
    flex: 1,
    borderRadius: 5,
  },
  legendWrapper: {
    flex: 1,
  },
});
