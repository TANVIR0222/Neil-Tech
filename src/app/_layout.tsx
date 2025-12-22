import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';


export default function RootLayout() {

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      // handle orientation or screen size change
    });

    return () => {
      // unsubscribe properly
      subscription.remove();
    };
  }, []);

  const [loaded] = useFonts({
    SFProBold: require('@/assets/fonts/SF-Pro-Text-Bold.otf'),
    SFProLight: require('@/assets/fonts/SF-Pro-Text-Light.otf'),
    SFProMedium: require('@/assets/fonts/SF-Pro-Text-Medium.otf'),
    SFProRegular: require('@/assets/fonts/SF-Pro-Text-Regular.otf'),
    SFProSemibold: require('@/assets/fonts/SF-Pro-Text-Semibold.otf'),
    SFProBlack: require('@/assets/fonts/SF-Pro-Display-Black.otf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <Stack screenOptions={{
        headerShown: false
      }} >
        <Stack.Screen name="index" />
        <Stack.Screen name="(drawer)" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="common" />
        <Stack.Screen name="weekly" />
        <Stack.Screen name="shop" />
        <Stack.Screen name="reward" />
        <Stack.Screen name="mani-mood-board" />
        <Stack.Screen name="income-tracker" />
        <Stack.Screen name="stock-reorder-list" />
        <Stack.Screen name="course-details" />
        <Stack.Screen name="daily-affirmation" />
        <Stack.Screen name="+not-found" />

      </Stack>
      <StatusBar style="dark" animated={true} translucent={true} />
    </GestureHandlerRootView>
  );
}
