import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Layout() {
    const { top } = useSafeAreaInsets()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="add-new-apointment" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaView>
    )
}