import { 
  StyleSheet,
  TextInput
} from 'react-native'
import { Flex, Button, Surface, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from '../../assets/styles/global'

const borderRadius = 20;
const gap = 10;

const SearchBar = () => {
  return (
    <Flex direction="column" style={materialStyle.container}>
      <Flex direction="row" style={materialStyle.searchContainer}>
        <TextInput placeholder="¿Que quieres buscar?" style={style.input} />
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
    gap
  },
  searchContainer: {
    gap: 5
  },
  dataContainer: {
    gap
  },
  dataContainerItem: {
    gap: 5,
    flexShrink: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: defaultStyles.gray1,
    borderRadius
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
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: defaultStyles.colorPrincipal,
    borderRadius
  }
});