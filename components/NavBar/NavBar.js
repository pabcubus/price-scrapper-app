import { AppBar, IconButton, FAB, Surface, HStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from '../../assets/styles/global'

const NavBar = () => {
  return (
    <HStack center style={materialStyle.dataContainerItem}>
      <IconButton m={0} icon={props => <Icon name="head" {...props} />} />
      <IconButton m={0} icon={props => <Icon name="magnify" {...props} />} />
      <IconButton m={0} icon={props => <Icon name="logout" {...props} />} />
    </HStack>
    /*
    <AppBar
      color={defaultStyles.colorPrincipal}
      variant="bottom"
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={(props) => (
        <IconButton
          icon={(props) => <Icon name="magnify" {...props} />}
          {...props}
        />
      )}
    ></AppBar>
    */
  );
};

export default NavBar;

const materialStyle = {
  dataContainerItem: {
    borderRadius: 50,
    backgroundColor: defaultStyles.colorPrincipal,
    margin: 5,
    justifyContent: 'space-around',
    boxSizing: 'border-box',
    padding: 3,
  }
}
