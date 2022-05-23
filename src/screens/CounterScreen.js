import react, { useState } from "react";

import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>CounterScreen</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button
        title="Decrease"
        onPress={() => (counter > 0 ? setCounter(counter - 1) : counter)}
      />
      <Text>Current count is: {counter}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default CounterScreen;
