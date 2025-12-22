import {
    IconAffirmation,
    IconLogOutOutLine,
    IconManiMood,
    IconsCrouse,
    IconShop,
    IconsIncomeTracker,
    IconsProfile,
    IconsReward,
    IconsStockReorderList,
    IconsWeeklyToDoList
} from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import GradientText from "./GradientText";

export default function BuCustomDrawerContent(props: DrawerContentComponentProps) {



    return (
        <View style={tw`flex-1  bg-white`}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={tw`flex-col gap-6 justify-between h-full`}>
                    <View style={tw`flex-col gap-6 py-10`}>
                        {/* Drawer Header */}
                        <View style={tw`flex-row px-4 items-center justify-between`}>
                            <Image
                                source={require("@/assets/images/app-logo.png")}
                                resizeMode="cover"
                                style={tw`w-28 h-11`}
                            />
                        </View>

                        {/* Welcome Text */}
                        <View style={tw`px-4`}>
                            <GradientText
                                title="Welcome Back!"
                                textStyle={{
                                    fontSize: 20,
                                    fontFamily: "sfpro-600",
                                    textAlign: "left",
                                }}
                                containerStyle={tw`items-start`}
                            />
                        </View>

                        {/* Divider */}
                        <View style={tw`border-b border-secondaryColor opacity-15`} />

                        {/* Navigation Items */}
                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/(drawer)/(tabs)/profile")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsProfile} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Profile
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/*  Income Tracker */}
                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/income-tracker")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsIncomeTracker} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Income Tracker
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/* Weekly To-Do List */}
                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/weekly")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsWeeklyToDoList} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Weekly To-Do List
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Mani Mood Board */}
                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/mani-mood-board")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconManiMood} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Mani Mood Board
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/*  */}
                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/(drawer)/(tabs)/course")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsCrouse} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Courses
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        {/*      */}

                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/daily-affirmation")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconAffirmation} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Daily Affirmation
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        </View>

                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/(drawer)/(tabs)/shop-page")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconShop} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Shop
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        </View>


                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/stock-reorder-list")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsStockReorderList} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Stock Reorder List
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        </View>


                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity
                                onPress={() => router.push("/reward")}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconsReward} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-secondaryColor font-sfProMedium`,
                                        )}
                                    >
                                        Reward
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        </View>
                        <View style={tw`flex-col gap-4 px-4`}>
                            <TouchableOpacity

                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconLogOutOutLine} />
                                    <Text
                                        style={tw.style(
                                            `text-text15 text-red font-sfProMedium`,
                                        )}
                                    >
                                        Log Out
                                    </Text>
                                </View>

                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
