import react, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>{props.color}</Text>
      <Button title={"More " + props.color} onPress={props.onIncrease} />
      <Button title={"Less " + props.color} onPress={props.onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
  },
});

export default ColorCounter;
