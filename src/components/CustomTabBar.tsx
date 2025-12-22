import { IconCrouse, IconCrouseActive, IconHome, IconHomeActive, IconPlanner, IconPlannerActive, IconProfileActive, IconShop, IconShopActive, IconsProfile, IconsTabTop } from "@/assets/icons";
import { usePathname, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";

const TABS = [
    { name: "/", icon: IconHome, iconActive: IconHomeActive, label: "Home" },
    { name: "/planner", icon: IconPlanner, iconActive: IconPlannerActive, label: "Planner" },
    { name: "/course", icon: IconCrouse, iconActive: IconCrouseActive, label: "Course" },
    { name: "/shop-page", icon: IconShop, iconActive: IconShopActive, label: "Shop" },
    { name: "/profile", icon: IconsProfile, iconActive: IconProfileActive, label: "Profile" },
] as const;

const { width } = Dimensions.get("window");
const TAB_BAR_HEIGHT = 60;
const TAB_WIDTH = width / TABS.length;

export default function CustomTabBar() {
    const router = useRouter();
    const pathname = usePathname();
    const activeIndex = TABS.findIndex((tab) => tab.name === pathname);
    const translateX = useSharedValue(activeIndex >= 0 ? activeIndex * TAB_WIDTH : 0);

    useEffect(() => {
        const targetX = activeIndex >= 0 ? activeIndex * TAB_WIDTH : 0;
        translateX.value = withSpring(targetX, { damping: 15, stiffness: 120 });
    }, [activeIndex, translateX]);

    const indicatorStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    return (
        <View style={tw`w-full absolute bottom-0 bg-white border-t border-secondaryColor border-opacity-15`}>
            <View style={tw`flex-row h-[${TAB_BAR_HEIGHT}px]`}>
                {TABS.map((tab, index) => {
                    const isActive = activeIndex === index;
                    return (
                        <Pressable
                            key={tab.name}
                            onPress={() => router.push(tab.name as any)}
                            style={tw`flex-1 items-center justify-center gap-0.5`}
                        >
                            <SvgXml xml={isActive ? tab.iconActive : tab.icon} />
                            <Text style={tw`${isActive ? "text-[#F2DA87]" : "text-gray-500"} text-xs`}>
                                {tab.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>

            {/* LinkedIn-style underline */}
            <Animated.View
                style={[
                    indicatorStyle, // translateX animation
                    { position: "absolute", top: 0, width: TAB_WIDTH, height: 30 }, // height SVG er size anujayi
                ]}
            >
                <SvgXml xml={IconsTabTop} width={TAB_WIDTH} height={30} />
            </Animated.View>
        </View>
    );
}
