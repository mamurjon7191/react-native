import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate("Component")}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to CounterScreen demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to ColorScreen demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to SquareScreen demo"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
