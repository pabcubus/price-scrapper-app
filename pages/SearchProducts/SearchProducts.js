import { Flex } from '@react-native-material/core';
import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Products from '../../components/Products/Products';
import SearchBar from '../../components/SearchBar/SearchBar';
import Logged from '../../layouts/Logged';

const products = [{
  id: 1,
  name: 'Nevera 1',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 2,
  name: 'Nevera 2',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 3,
  name: 'Nevera 3',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 4,
  name: 'Nevera 4',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 11,
  name: 'Nevera 5',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 12,
  name: 'Nevera 6',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 13,
  name: 'Nevera 7',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 14,
  name: 'Nevera 8',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 15,
  name: 'Nevera 9',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 16,
  name: 'Nevera 17',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  id: 17,
  name: 'Nevera 1w8',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
}]

const SearchProducts = ({ navigation }) => {
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
    paddingTop: Constants.statusBarHeight
  }
});

const materialStyles = {
  container: {
    flex: 1
  }
};
