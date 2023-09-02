import React, { useState, useEffect } from 'react';
import { Flex, Button, Text, TextInput } from "@react-native-material/core";
import { StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import * as Font from 'expo-font';

const Login = ({ navigation }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'monserrat-regular': require('../../assets/fonts/MontserratRegular.ttf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return (<Text>Loading...</Text>);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Flex
        direction="column"
        style={materialStyles.container}>
        <TextInput
          inputStyle={materialStyles.input}
          style={materialStyles.input}         
          placeholder="Usuario"
          variant="standard" />
        <TextInput
          inputStyle={materialStyles.input}
          style={materialStyles.input}          
          placeholder="Contraseña"
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
  input: {
    fontFamily: 'monserrat-regular'
  },
  button: {
    fontFamily: 'monserrat-regular',
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
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
  }
});
