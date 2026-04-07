import { Show, useClerk, useUser } from "@clerk/expo";
import { UserButton } from "@clerk/expo/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View className="bg-white dark:bg-black p-4" style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <Show when="signed-in">
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Pressable style={styles.button} onPress={() => signOut()}>
          <Text style={styles.buttonText}>Sign out</Text>
        </Pressable>

        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 18,
            overflow: "hidden",
            alignItems: "center",
          }}
        >
          <UserButton />
        </View>

        {/* // # DEPOIS QUANDO ESTIVER COM O CELULAR RODAR O NPX RUN:ANDROID PARA RODAR COM ESSE
        // POIS ESSE CÓDIGO SO FUNCIONA DEPOIS DO PRÉ BUILD NATIVO NO EXPO GO NÃO FUNCIONA POIS É MUITO PESADO
        <UserProfileView style={{ flex: 1 }} /> */}
      </Show>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
