import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function _layout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="income-entry" />
                <Stack.Screen name="all-Income" />
                <Stack.Screen name="sabrina-carpenter" />
            </Stack>
        </SafeAreaView>
    )
}