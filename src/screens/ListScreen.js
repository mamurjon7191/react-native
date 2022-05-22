import react from "react";
import { Text, StyleSheet, FlatList } from "react-native";

// FlatList arreyni ichini aylanib chiqish uchun kerak boladi

const ListScreen = () => {
  const array = [
    { friend: "Friend2 Age 22" },
    { friend: "Friend3 Age 32" },
    { friend: "Friend4 Age 21" },
    { friend: "Friend1 Age 42" },
    { friend: "Friend5 Age 52" },
    { friend: "Friend6 Age 12" },
    { friend: "Friend7 Age 62" },
  ];
  return (
    <FlatList
      // horizontal // yozilgan itemlarni vertikalmas garizantal qilib beradi
      // showsHorizontalScrollIndicator={false} // garizantal qiganimizda pasda scrollni indikatori chiqib turadi oshani ochirish uchun shu yoziladi
      keyExtractor={(mamur12) => mamur12.friend} // har biita elementga key berish uchun key extraktordan foydalamaiz
      data={array}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.friend}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginHorizontal: 34, // bu column gap ga oxshab joy tashab beradi
    marginVertical: 10, // bu row gap ga oxshab joy tashab beradi
  },
});

export default ListScreen;

// 5 ga keldim
