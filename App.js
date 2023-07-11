import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import Products from './components/products/products';
import SearchBar from './components/searchBar/searchBar';

const products = [{
  name: 'Nevera',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  name: 'Nevera',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  name: 'Nevera',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
},{
  name: 'Nevera',
  prices: [1829939, 1700000],
  img: 'https://olimpica.vtexassets.com/arquivos/ids/1057539-1200-auto?v=638145933296300000&width=1200&height=auto&aspect=true'
}]

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchBar />
      <Products products={products}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
