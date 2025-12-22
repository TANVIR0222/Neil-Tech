import CustomTabBar from "@/src/components/CustomTabBar";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <Tabs
                screenOptions={{
                    headerShown: false,
                }}
                tabBar={() => <CustomTabBar />}
            >
            </Tabs>

            <StatusBar style="dark" animated translucent />
        </SafeAreaView>
    );
}
