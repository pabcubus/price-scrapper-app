import * as Font from 'expo-font';

const fontLoader = (setFontLoaded) => {
  return (() => {
    async function loadFont() {
      await Font.loadAsync({
        "monserrat-regular": require("../../assets/fonts/MontserratRegular.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  });
};

export default fontLoader;
