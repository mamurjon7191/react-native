import React from "react";

import { Text, StyleSheet, View, Image } from "react-native";

const ImageComponent = (props) => {
  return (
    <View>
      <Text style={styles.imageStyle}>This is imageScreen {props.title}</Text>
      <Image source={props.imageSrc} />
      <Text style={styles.score}>{props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    marginVertical: 30,
    fontSize: 20,
  },
  score: {
    color: "red",
  },
});

export default ImageComponent;
