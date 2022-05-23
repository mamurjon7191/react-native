import react, { useState } from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
      />
      <View
        style={{
          width: 500,
          height: 500,
          backgroundColor: `rgb(${red}, ${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
