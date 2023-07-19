import { Flex } from '@react-native-material/core';
import NavBar from '../components/NavBar/NavBar';

const Logged = ({ children }) => {
  return (
    <Flex direction="column" style={styles.container}>
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
  content: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    maxHeight: 100
  }
};
