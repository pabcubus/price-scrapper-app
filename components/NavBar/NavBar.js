import { AppBar, IconButton, FAB } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const NavBar = () => {
  return (
    <AppBar
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
  );
};

export default NavBar;
