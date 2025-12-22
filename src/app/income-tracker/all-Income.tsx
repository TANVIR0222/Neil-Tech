import { IconProfite, IconTotalIncome } from '@/assets/icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import IncomeNewView from '@/src/components/ui/income-tracker/IncomeNewView'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { ImageBackground, Text, useWindowDimensions, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function AllIncome() {
    const cards = [
        { id: 1, title: "Total Income", value: "$185", icon: IconTotalIncome },
        { id: 2, title: "Total Expenditure", value: "$96", icon: IconTotalIncome },
        { id: 3, title: "Net Profit", value: "$89", icon: IconProfite },
        { id: 4, title: "Loss", value: "12%", icon: IconTotalIncome },

    ];

    const { width } = useWindowDimensions();
    console.log((width / 2) - 20);


    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="All Income" menu={false} addIiocns={true} route={() => router.push("/income-tracker/income-entry")} />
            {/* <View style={tw`flex-row justify-between items-center`}>
                <Text>Entry History</Text>
                <TouchableOpacity onPress={() => router.push("/income-tracker/sabrina-carpenter")} >

                    <SvgXml xml={IconEnterHistory} />
                </TouchableOpacity>
            </View> */}

            <View style={tw`flex-row flex-wrap justify-between mt-4`}>
                {cards.map((item) => (
                    <ImageBackground
                        key={item.id}
                        source={require("@/assets/images/income-frame.png")}
                        resizeMode="cover"
                        style={tw`w-[${(width / 2) - 25}px] mb-4 rounded-xl overflow-hidden`}
                    >
                        <View style={tw`flex-row justify-between  items-center p-3`}>
                            {/* Left side - text */}
                            <View style={tw` flex-col gap-2`}>
                                <Text style={tw`text-white font-sfProRegular text-text13`}>
                                    {item.title}
                                </Text>
                                <Text style={tw`text-white font-sfProSemibold text-text20 mt-1`}>
                                    {item.value}
                                </Text>
                            </View>

                            {/* Right side - icon */}
                            <SvgXml xml={item.icon} />
                        </View>
                    </ImageBackground>
                ))}
            </View>
            <IncomeNewView income={false} />
        </PageWrapper>
    )
}