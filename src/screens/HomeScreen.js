import React from "react";
import { Text, StyleSheet, Button, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to components demo" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
