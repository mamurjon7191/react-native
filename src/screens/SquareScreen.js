import react, { useState, useReducer } from "react";
import { Text, Button, StyleSheet, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";
import ComponentsScreen from "./ComponentsScreen";

// useState bilan qilingani

// const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [green, setGreen] = useState(0);
//   const [blue, setBlue] = useState(0);

//   return (
//     <View>
//       <ColorCounter
//         color="Red"
//         onIncrease={() => (red + 10 <= 255 ? setRed(red + 10) : null)}
//         onDecrease={() => (red - 10 < 0 ? null : setRed(red - 10))}
//       />
//       <ColorCounter
//         color="Green"
//         onIncrease={() => (green + 10 <= 255 ? setGreen(green + 10) : null)}
//         onDecrease={() => (green - 10 < 0 ? null : setGreen(green - 10))}
//       />
//       <ColorCounter
//         color="Blue"
//         onIncrease={() => (blue + 10 <= 255 ? setBlue(blue + 10) : null)}
//         onDecrease={() => (blue - 10 < 0 ? null : setBlue(blue - 10))}
//       />
//       <View
//         style={{
//           width: 500,
//           height: 500,
//           backgroundColor: `rgb(${red}, ${green},${blue})`,
//         }}
//       ></View>
//     </View>
//   );
// };

// useReducer bilan qilingani

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state);

  return (
    <View>
      <ColorCounter
        color="Red"
        // onIncrease={() => }
        // onDecrease={() => }
      />
      <ColorCounter
        color="Green"
        // onIncrease={() => }
        // onDecrease={() => }
      />
      <ColorCounter
        color="Blue"
        // onIncrease={() => }
        // onDecrease={() => }
      />
      <View
        style={{
          width: 500,
          height: 500,
          // backgroundColor: `rgb(${red}, ${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
