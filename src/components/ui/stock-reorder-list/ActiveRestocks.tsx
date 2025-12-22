import { IconCarComplete, IconCard, IconCardDate, IconStore } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { _small_device } from '@/src/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const ActiveRestocks = () => {
    return (
        <View style={tw`flex-1   gap-5 flex-col justify-between pb-6`}>
            <View style={tw`flex-col gap-4`}>
                {
                    Array.from({ length: 6 }).map((_, index) => (
                        <View key={index} style={tw`flex-row justify-between items-center border-b pb-3 border-inactive`}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <View>
                                    <Image source={require('@/assets/images/product-image.png')} style={{ width: _small_device ? 30 : 40, height: 40 }} />
                                </View>
                                <View style={tw`flex-col gap-2`}>
                                    <Text style={tw`${_small_device ? 'text-text14' : 'text-text16'} font-sfProRegular text-goldenBoarder`}>Acrylic Powder - Clear</Text>
                                    <View style={tw`flex-row items-center gap-2`}>
                                        <View style={tw`flex-row items-center gap-1`}>
                                            <View style={tw`w-3 h-3 rounded-full bg-[#D8B236]`} />
                                            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`} >2 Left </Text>
                                        </View>
                                        <View style={tw`flex-row items-center gap-2 bg-[#CEFFBC] py-1.5 px-1 rounded-full`}>
                                            <SvgXml xml={IconStore} />
                                            <Text style={tw`text-text12 font-sfProRegular text-[#159336]`} >Own Store </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconCard} />
                                <TouchableOpacity onPress={() => router.push('/stock-reorder-list/date-and-time')}>
                                    <SvgXml xml={IconCardDate} />
                                </TouchableOpacity>
                                <SvgXml xml={IconCarComplete} />

                            </View>
                        </View>
                    ))
                }
            </View>
            <View style={tw`border border-inactive rounded-full p-3 items-center`}>
                <Text style={tw`text-secondaryColor text-text14`}>
                    Total Items Low/out of stock: <Text style={tw`text-[#C9A227] font-semibold`}>6</Text>
                </Text>
            </View>

        </View>
    )
}

export default ActiveRestocks