import { 
  TextInput,
  StyleSheet
} from 'react-native'
import { Flex, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from '../../assets/styles/global'

const SearchBar = () => {
  const imageSrc = '../../assets/icons/search_small.png';

  return (
    <Flex direction="column" style={materialStyle.container}>
      <Flex direction="row" style={materialStyle.searchContainer}>
        <TextInput style={style.input} placeholder="Ingresa tu texto" />
        <IconButton
          color={defaultStyles.colorFont}
          icon={props => <Icon name="magnify" {...props} />}
        />
      </Flex>
      <Flex direction="row" style={materialStyle.filterContainer}>
        <Button
          style={materialStyle.filter}
          color={defaultStyles.colorFont}
          leading={props => <Icon name="filter" {...props} />}
          variant="text" title="Text" />
      </Flex>
    </Flex>
  );
};

export default SearchBar;

const materialStyle = {
  container: {
    padding: 10,
    gap: 5
  },
  searchContainer: {
    gap: 5
  },
  filterContainer: {
    gap: 5
  },
  filter: {
    color: defaultStyles.colorFont,
    paddingRight: 5
  }
}

const style = StyleSheet.create({
  input: {
    flexGrow: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    borderStyle: "solid",
  }
});