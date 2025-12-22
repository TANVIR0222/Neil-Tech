import { IconTopBar } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function DateAndTime() {
    return (
        <View style={tw`px-5  bg-white`}>
            <View style={tw`flex-row justify-between py-4 items-center`}>
                <View style={tw`flex-row  flex-1  bg-white justify-center items-center rounded-lg`}>
                    <SvgXml xml={IconTopBar} />
                </View>
            </View>
            {/* Header */}
            <View style={tw`flex-col gap-4 `}>
                <View style={tw`flex-col `}>
                    <Text style={tw`text-text20 font-sfProMedium text-primaryColor`}>
                        Set Restock Reminder
                    </Text>
                </View>

                {/* Frequency */}
                <View style={tw`flex-col gap-2 `}>
                    <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>
                        Choose frequency
                    </Text>

                    <View style={tw`flex-row justify-between gap-2 `}>

                        {["Days", "Weeks", "Months"].map((item, index) => (
                            <View
                                key={index}
                                style={tw`flex-1 border border-secondaryColor rounded-md py-2  items-center`}
                            >
                                <Text style={tw`text-text12 text-black font-sfProMedium`}>
                                    {item}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Input / Value */}
                <View
                    style={tw`border border-secondaryColor rounded-md h-10 justify-center px-4 `}
                >
                    <Text style={tw`text-text12 text-primaryColor font-sfProMedium`}>
                        21
                    </Text>
                </View>
            </View>


            <View style={tw`flex-row justify-between  py-5`}>
                <TouchableOpacity
                    style={tw`w-[48%] border border-secondaryColor rounded-full py-3 items-center`}
                >
                    <Text style={tw`text-text16 font-sfProMedium text-secondaryColor`}>
                        Cancel
                    </Text>
                </TouchableOpacity>

                <LinearGradient
                    colors={["#c9a227", "#f2da87", "#c9a227"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={tw`w-[48%] rounded-full`}
                >
                    <TouchableOpacity style={tw`py-3 items-center`}>
                        <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>
                            Save Reminder
                        </Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>

    )
}