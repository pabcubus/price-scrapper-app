import { Flex, HStack, IconButton, Text } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NavBar from '../components/NavBar/NavBar';

const appBarPadding = 5;

const Logged = ({ children }) => {
  return (
    <Flex direction="column" style={styles.container}>
      <HStack center spacing={8} style={styles.navbar}>
        <IconButton m={0} icon={props => <Icon name="arrow-left" {...props} />} />
        <Text variant="h6">
          Search
        </Text>
      </HStack>
      <Flex direction="column" style={styles.content}>
        {children}
      </Flex>
      <NavBar />
    </Flex>
  );
};

export default Logged;

const styles = {
  container: {
    flex: 1
  },
  navbar: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: appBarPadding,
    paddingTop: appBarPadding
  },
  content: {
    flex: 1,
  }
};
