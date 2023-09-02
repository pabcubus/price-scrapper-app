import { Flex } from '@react-native-material/core';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Products from '../../components/Products/Products';
import SearchBar from '../../components/SearchBar/SearchBar';
import Logged from '../../layouts/Logged';
import products from '../../demo/products';

const SearchProducts = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Logged>
        <Flex direction="column" style={materialStyles.container}>
          <SearchBar />
          <Products products={products} />
        </Flex>
      </Logged>
    </SafeAreaView>
  );
};

export default SearchProducts;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  }
});

const materialStyles = {
  container: {
    flex: 1
  }
};
