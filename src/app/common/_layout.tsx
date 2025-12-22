import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RootLayout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="change-password" options={{ headerShown: false }} />
                <Stack.Screen name="faq" options={{ headerShown: false }} />
                <Stack.Screen name="update-profile" options={{ headerShown: false }} />
                <Stack.Screen name="terms-and-condition" options={{ headerShown: false }} />
                <Stack.Screen name="payment-method" options={{ headerShown: false }} />

            </Stack>
        </SafeAreaView>
    )
}