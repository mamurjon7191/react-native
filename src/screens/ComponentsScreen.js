import react from "react";
import { Text, StyleSheet, View } from "react-native";

// view-> bu bir nechta element yozmoqchi bolsak ishlatamiz divni ornida

const ComponentsScreen = () => {
  const name = "Mamur";
  return (
    <View>
      <Text style={styles.textStyle1}>This is componentScreen component</Text>
      <Text style={styles.textStyle2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle1: {
    fontSize: 20,
  },
  textStyle2: {
    fontSize: 40,
  },
});

export default ComponentsScreen;
