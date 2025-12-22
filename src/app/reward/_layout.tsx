import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function _layout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="reward-modal" options={{
                    presentation: "transparentModal",
                    animation: 'slide_from_bottom',

                }} />
            </Stack>
        </SafeAreaView>
    )
}