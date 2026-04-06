import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 200, height: 200, borderRadius: 20 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
