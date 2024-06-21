import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Hide header tab for index tab */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
