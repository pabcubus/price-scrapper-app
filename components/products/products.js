import { StyleSheet, View, FlatList } from "react-native";
import Product from "../Product/Product";
import { ListItem, Avatar } from "@react-native-material/core";

const Products = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => DrawItem(item)}
      keyExtractor={item => item.id}
    />
  );
};

const DrawItem = (p) => {
  return (
    <ListItem
      leadingMode="avatar"
      leading={
        <Avatar image={{ uri: p.img }} />
      }
      title={p.name}
      secondaryText="I'll be in your neighborhood doing errands this…"
    />
  );
}

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
