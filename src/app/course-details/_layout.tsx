import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function _layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="my-course" />
      <Stack.Screen name="subscribe" />
      <StatusBar style="light" animated translucent />

    </Stack>
  )
}