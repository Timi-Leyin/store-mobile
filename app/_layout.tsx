import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "@/components/navigation/bottom-nav";
import { CartProvider } from "@/context/cart-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    PlusJakartaBold: require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf"),
    PlusJakarta: require("../assets/fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <CartProvider>
      <SafeAreaProvider>
        <Slot />
        <BottomNav />
      </SafeAreaProvider>
    </CartProvider>
  );
}
