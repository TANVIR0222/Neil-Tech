import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function _layout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="[id]" />
            <Stack.Screen name="order-summary-modal"

                options={{
                    presentation: "formSheet",
                    sheetAllowedDetents: 'fitToContents'
                }}

            />
            <StatusBar style="light" animated translucent />
        </Stack>
    )
}