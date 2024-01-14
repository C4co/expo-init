import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function Home() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "React Native",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Text className="bg-red-400 p-4">Hello World!</Text>
    </View>
  );
}
