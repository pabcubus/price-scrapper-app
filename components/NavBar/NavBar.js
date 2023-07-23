import { AppBar, IconButton, FAB, Surface } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from '../../assets/styles/global'

const NavBar = () => {
  return (
    <Surface style={materialStyle.dataContainerItem}></Surface>
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
    height: 50,
    margin: 5,
    boxSizing: 'border-box'
  }
}
