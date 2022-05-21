import react from "react";
import { Text, StyleSheet } from "react-native";

const ListScreen = () => {
  return <Text style={styles.textStyle}>THIS IS LIST SCREEN COMPONENT</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ListScreen;
