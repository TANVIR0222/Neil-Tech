import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function _layout() {
    return (
        // <Tabs screenOptions={{ headerShown: false }}>
        //     <Tabs.Screen name="index" options={{ title: 'Weekly Overview' }} />
        // </Tabs>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" options={{
                    headerShown: false
                }} />
                <Stack.Screen
                    name="add-task-modal"
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal',
                        animation: 'slide_from_bottom'
                    }}
                />
            </Stack>
        </SafeAreaView>)
}