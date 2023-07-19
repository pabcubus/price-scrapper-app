import { Flex, Text } from "@react-native-material/core";
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import Constants from 'expo-constants';
import Products from "../../components/Products/Products";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Flex direction="column">
        <Button
            title="Go!"
            onPress={() =>
                navigation.navigate('Search')
            }
        />
      </Flex>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
