import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";

const ImageComponent = (props) => {
  return (
    <View>
      <Text style={styles.imageStyle}>This is imageScreen {props.title}</Text>
      <Image source={props.imageSrc} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginVertical: 30,
    fontSize: 20,
  },
});

export default ImageComponent;
