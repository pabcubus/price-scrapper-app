import { StyleSheet, View, FlatList } from "react-native";
import { ListItem, Avatar, Surface, Text } from "@react-native-material/core";

const fontFamily = 'monserrat-regular';

const Products = ({ products }) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => DrawItem(item)}
      keyExtractor={item => item.id}
    />
  );
};

const getBusinessColor = (str) => {
  if (str === 'olimpica') {
    return {...materialStyle.businessContainer, backgroundColor: '#e2001a'}
  }

  if (str === 'exito') {
    return {...materialStyle.businessContainer, backgroundColor: '#ffe800'}
  }

  if (str === 'alkosto') {
    return {...materialStyle.businessContainer, backgroundColor: '#004797'}
  }
};

const DrawItem = (p) => {
  return (
    <View style={styles.container}>
      <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: p.img }} />
        }
        title={
          <Text style={materialStyle.listTitle}>Hi!</Text>
        }
        secondaryText={
          <Text style={materialStyle.listDesc}>
            I'll be in your neighborhood doing errands this…
          </Text>
        }
      />
      <Surface elevation={1} style={getBusinessColor(p.business)}>
        <Text style={styles.textStyle(p.business)}>{p.business}</Text>
      </Surface>
    </View>
  );
}

export default Products;

const materialStyle = {
  businessContainer: {
    position: 'absolute',
    right: 10,
    top: 5,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  listTitle: {
    fontFamily
  },
  listDesc: {
    fontFamily,
    fontSize: 11
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  textStyle: (str) => {
    const props = {
      fontFamily,
      fontSize: 10
    }
    
    if (str === 'exito') {
      return {color: 'black', ...props};
    }

    return {color: 'white', ...props};
  }
});
