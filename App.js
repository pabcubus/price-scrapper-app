import { StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import SearchProducts from './pages/SearchProducts/SearchProducts';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchProducts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
