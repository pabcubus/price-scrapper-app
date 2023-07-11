import { View, TextInput, Pressable, StyleSheet, Image, Text } from "react-native";
import SearchIcon from '../../assets/icons/search_small.png'

const SearchBar = () => {
  const imageSrc = '../../assets/icons/search_small.png';

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Ingresa tu texto" />
      <Pressable style={styles.button}>
        <Image style={styles.buttonImage} source={SearchIcon}/>
      </Pressable>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: "row",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    borderStyle: "solid",
    flexGrow: 1,
    marginRight: 5,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  buttonImage: {
  }
});
