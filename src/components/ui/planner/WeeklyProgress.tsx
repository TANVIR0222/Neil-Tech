import {
    IconActiveGlobal,
    IconAlarm,
    IconBox,
    IconDelete,
    IconEdite,
    IconInactiveAlarm,
    IconLeftMenu,
    IconMarkAsComplete,
} from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { weeklyToDoList } from "@/src/utils/dammy-data";
import { _width } from "@/src/utils/utils";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import GlobalGradientBox from "../../GlobalGradientBox";

const WeeklyTasksList = () => {
    const [activeTask, setActiveTask] = useState(null);
    const [menuOpenTask, setMenuOpenTask] = useState(null);

    const toggleActive = (id: any) => {
        setActiveTask((prev) => (prev === id ? null : id));
    };

    const toggleMenu = (id: any) => {
        setMenuOpenTask((prev) => (prev === id ? null : id));
    };

    const renderTask = ({ item, index }: any) => {
        const isActive = activeTask === item.id;
        const isMenuOpen = menuOpenTask === item.id;
        const isLastItem = index === weeklyToDoList.length - 1; //  FIXED — correct dataset reference

        return (
            <View
                key={item.id}
                style={[
                    tw`flex-row items-center justify-between gap-3 `,
                    !isLastItem && tw`border-b border-inactive pb-4`, //  Only apply border if not last item
                ]}
            >
                {/* Checkbox */}
                <TouchableOpacity onPress={() => toggleActive(item.id)}>
                    <SvgXml xml={isActive ? IconActiveGlobal : IconBox} width={34} height={34} />
                </TouchableOpacity>

                {/* Task Info */}
                <View style={tw`flex-row items-center justify-between gap-3 flex-1`}>
                    <View
                        style={tw`flex-row items-center justify-between gap-4 ${isActive ? "bg-bgGray" : "border border-secondaryColor"
                            } py-1 pl-3 pr-2 border-opacity-50 rounded-full flex-1`}
                    >
                        <Text
                            style={tw`text-text16 ${isActive ? "line-through text-inactive" : "text-primaryColor"
                                } font-sfProRegular`}
                        >

                            {
                                _width > 370 ? (
                                    <Text style={tw`text-text16 ${isActive ? "line-through text-inactive" : "text-primaryColor"
                                        } font-sfProRegular`}>
                                        {item.text?.slice(0, 14)}
                                    </Text>
                                )
                                    : (
                                        <Text style={tw`text-text16 ${isActive ? "line-through text-inactive" : "text-primaryColor"
                                            } font-sfProRegular`}>
                                            {item.text?.slice(0, 9)}
                                        </Text>
                                    )
                            }
                        </Text>
                        {isActive ? (
                            <View
                                style={tw`flex-row items-center justify-center gap-2 border border-inactive border-opacity-50 py-1 px-3 rounded-full`}
                            >
                                <SvgXml xml={IconInactiveAlarm} />
                                <Text style={tw`text-black font-sfProRegular`}>
                                    08:00 AM
                                </Text>
                            </View>
                        ) : (


                            <GlobalGradientBox radius={50}>
                                <View
                                    style={tw`flex-row items-center justify-center gap-2  py-1 px-3 rounded-full`}
                                >
                                    <SvgXml xml={IconAlarm} />
                                    <Text style={tw`text-inactive font-sfProRegular`}>
                                        08:00 AM
                                    </Text>
                                </View>
                            </GlobalGradientBox>
                        )}

                    </View>

                    {/* Action Menu Icon */}
                    <TouchableOpacity onPress={() => toggleMenu(item.id)}>
                        <SvgXml xml={IconLeftMenu} />
                    </TouchableOpacity>
                </View>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <View
                        style={tw`absolute right-4 top-12 bg-white shadow-lg rounded-lg border border-gray-200 z-50`}
                    >
                        <TouchableOpacity
                            style={tw`px-4 py-2 flex-row items-center gap-2`}
                            onPress={() => router.push("/weekly/add-task-modal")}
                        >
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconEdite} />
                                <Text style={tw`text-text12 font-sfProRegular text-primaryColor`}>
                                    Edit
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={tw`px-4 py-2 flex-row items-center gap-2`}
                            onPress={() => console.log("Delete", item.id)}
                        >
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconDelete} />
                                <Text style={tw`text-text12 font-sfProRegular text-primaryColor`}>
                                    Delete
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={tw`px-4 py-2 flex-row items-center gap-2`}
                            onPress={() => toggleActive(item.id)}
                        >
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconMarkAsComplete} />
                                <Text style={tw`text-text12 font-sfProRegular text-primaryColor`}>
                                    Mark Complete
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };

    return (
        <FlatList
            data={weeklyToDoList}
            renderItem={renderTask}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={tw`flex-col gap-4`}
        />
    );
};

export default WeeklyTasksList;
