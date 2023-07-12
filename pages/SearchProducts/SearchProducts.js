import { Flex } from '@react-native-material/core';
import Products from '../../components/Products/Products';
import SearchBar from '../../components/SearchBar/SearchBar';

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

const SearchProducts = () => {
  return (
    <Flex direction="column" style={materialStyle.container}>
      <SearchBar />
      <Products products={products} />
    </Flex>
  );
};

export default SearchProducts;

const materialStyle = {
    flex: 1
}
