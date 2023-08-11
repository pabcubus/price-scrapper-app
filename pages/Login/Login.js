import { Flex, Button, Text, TextInput } from "@react-native-material/core";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Flex direction="column" style={materialStyles.container}>
        <TextInput label="Usuario" variant="standard" />
        <TextInput
          label="Contraseña"
          variant="standard"
          secureTextEntry={true} />
        <Button
          title={() => (
            <Text style={materialStyles.button}>
              Login!
            </Text>
          )}
          onPress={() => navigation.navigate("Search")}>
        </Button>
      </Flex>
    </SafeAreaView>
  );
};

export default Login;

const materialStyles = {
  button: {
    fontFamily: 'Montserrat Regular',
    color: 'white',
    fontSize: 15
  },
  container: {
    padding: 10,
    gap: 40,
  },
}

const styles = StyleSheet.create({
  safeArea: {
    fontFamily: 'Montserrat Regular',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  },
  button: {
    fontFamily: 'Montserrat Regular',
  }
});
