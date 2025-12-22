import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function _layout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="date-and-time"
                    options={{
                        presentation: "formSheet",
                        animation: 'slide_from_bottom',
                        sheetAllowedDetents: 'fitToContents'
                    }}
                />
                <Stack.Screen name="nails-by-codie-shop" />
            </Stack>
        </SafeAreaView>
    )
}