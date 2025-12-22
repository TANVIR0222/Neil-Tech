import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AuthLayout() {
    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }} >
            <Stack screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="user-register" />
                <Stack.Screen name="forget-password" />
                <Stack.Screen name="verification-code" />
                <Stack.Screen name="created-new-password" />
            </Stack>
        </SafeAreaView>
    )
}