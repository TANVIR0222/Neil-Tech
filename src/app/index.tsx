import tw from '@/src/lib/tailwind';
import { router, SplashScreen } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import PageWrapper from '../components/PageWrapper';

SplashScreen.preventAutoHideAsync();

export default function MainScreen() {
  useEffect(() => {

    const time = setTimeout(() => {
      SplashScreen.hideAsync();
      router.replace('/onboarding');
      // router.replace('/(drawer)/(tabs)');
    }, 3000);

    return () => clearTimeout(time);

  }, []);
  return (
    <PageWrapper>
      <View style={tw`flex-1 justify-center items-center`}>
        <Image
          source={require('@/assets/images/app-logo.png')}
          style={tw`w-48 h-48 rounded-2xl`}
          resizeMode="contain"
        />
        <View style={tw`absolute bottom-20`}>
          <ActivityIndicator size="large" color="#F2DA87" />
        </View>
      </View>
    </PageWrapper>
  );
}
