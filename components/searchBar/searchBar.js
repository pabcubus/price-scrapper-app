import { 
  StyleSheet
} from 'react-native'
import { Flex, IconButton, Button, TextInput, Surface, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from '../../assets/styles/global'

const SearchBar = () => {
  return (
    <Flex direction="column" style={materialStyle.container}>
      <Flex direction="row" style={materialStyle.searchContainer}>
        <TextInput          
          style={style.input}
          label="Label"
          variant="outlined"
        />
      </Flex>
      <Flex direction="row" style={materialStyle.dataContainer}>
        <Surface style={materialStyle.dataContainerItem}>
          <Text variant="h6">$ 1.600.000</Text>
          <Flex direction="row" style={materialStyle.dataContainerItemValue}>
            <Icon
              style={materialStyle.dataContainerItemIcon}
              name="cash"
              size={13}
              color={defaultStyles.colorFont}/>
            <Text variant="caption">Valor promedio</Text>
          </Flex>
        </Surface>
        <Surface style={materialStyle.dataContainerItem}>
          <Text variant="h6">34</Text>
          <Flex direction="row" style={materialStyle.dataContainerItemValue}>
            <Icon
              style={materialStyle.dataContainerItemIcon}
              name="menu"
              size={13}
              color={defaultStyles.colorFont}/>
            <Text variant="caption">Cantidad</Text>
          </Flex>
        </Surface>
      </Flex>
      <Flex direction="row" style={materialStyle.filterContainer}>
        <Button
          style={materialStyle.filter}
          color={defaultStyles.colorFont}
          leading={props => <Icon name="filter" {...props} />}
          variant="text" title="Filters" />
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
  dataContainer: {
    gap: 10
  },
  dataContainerItem: {
    gap: 5,
    flexShrink: 1,
    padding: 10,
    backgroundColor: defaultStyles.colorPrincipal,
    borderRadius: 10
  },
  dataContainerItemValue: {
    flexDirection: 'row',
    gap: 3
  },
  dataContainerItemIcon: {
    paddingTop: 2
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
    flexGrow: 1
  }
});