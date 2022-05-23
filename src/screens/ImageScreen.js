import React from "react";

import { Text, StyleSheet, View } from "react-native";

import ImageComponent from "../Components/ImageComponent";

const ImageScreen = (props) => {
  console.log("image screen");
  console.log(props);
  return (
    <View>
      <ImageComponent
        title="forest1"
        imageSrc={require("../../assets/download-1.jpg")}
      />
      <ImageComponent
        title="forest2"
        imageSrc={require("../../assets/download-2.jpg")}
      />
      <ImageComponent
        title="forest3"
        imageSrc={require("../../assets/download-3.jpg")}
      />
      <ImageComponent
        title="forest4"
        imageSrc={require("../../assets/download-3.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
