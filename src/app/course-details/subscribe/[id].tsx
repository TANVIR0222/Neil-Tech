import { IconDate, IconLock, IconMean, IconsRightArrowBlack } from '@/assets/icons'
import GlobalText from '@/src/components/GlobalText'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'

export default function ViewCourse() {
    const { top, bottom } = useSafeAreaInsets()
    return (

        <View style={{ flex: 1, backgroundColor: '#fff' }} >
            <ImageBackground
                source={require('@/assets/images/nail-image.png')}
                style={tw`w-full h-[320px] bg-black  `}
            >
                {/* Top icon */}
                <TouchableOpacity onPress={() => router.back()} style={tw`absolute top-[${top + 4}px] left-5  z-30`} >
                    <SvgXml xml={IconsRightArrowBlack} />
                </TouchableOpacity>

                {/* Gradient overlay */}
                <LinearGradient
                    colors={["rgba(0,0,0,0.5)", "transparent"]}
                    locations={[0, 0.3]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={tw`absolute top-0 w-full h-full`}
                />
                <View style={tw`flex-col items-start absolute bottom-5 px-5 gap-1.5`}>

                    {/* <Text
                        style={tw`text-text24 font-sfProMedium text-black`}
                        numberOfLines={2}
                    >
                       
                    </Text> */}
                    <GlobalText text=" Acrylic Nail Extension Basics" size="text24" weight="semibold" align="left" />

                    <View style={tw`flex-row  gap-3.2 items-center`}>
                        <View style={tw`flex-row gap-1 items-center`}>
                            <SvgXml xml={IconMean} />
                            <Text style={tw`text-text12 text-primaryColor/80 font-sfProRegular`}>
                                Emma Wilson
                            </Text>
                        </View>

                        <View style={tw`flex-row gap-1 items-center`}>
                            <SvgXml xml={IconDate} />
                            <Text style={tw`text-text12 text-primaryColor/80 font-sfProRegular`}>
                                4h 20m
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>

            <PageWrapper>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false} >
                    <Text style={tw`text-text17 font-sfProRegular text-secondaryColor leading-7 `} >
                        Master the art of acrylic nail application with this comprehensive course. Learn techniques from basic application to advanced nail art designs that will set your services apart.
                    </Text>
                    <View style={tw`flex-col gap-4 mt-5`}>
                        <View style={tw`flex-row justify-between items-center`}>
                            <GlobalText text="Course Content" size="text20" weight="semibold" align="left" />
                        </View>


                        <View style={tw`flex-col  justify-between gap-3 `}>
                            {
                                Array.from({ length: 5 }, (_, index) => (
                                    <View key={index} style={tw`py-3 px-4 border items-center flex-row gap-5 rounded-full border-bgGray`} >
                                        <SvgXml xml={IconLock} />
                                        <View style={tw`flex-col gap-1`} >
                                            <GlobalText text={`${index + 1}. Introduction to Acrylics`} size="text16" weight="semibold" align="left" />
                                            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>15 min</Text>
                                        </View>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </ScrollView>

                <View
                    style={[
                        tw` justify-center w-full`,
                        { bottom: bottom }, // dynamic bottom value
                    ]}
                >
                    <MainButton title="Subscribe - $29.00" onPress={() => router.push('/course-details/my-course')} />
                </View>
                {/* <MainButton title="Subscribe - $29.00" /> */}

            </PageWrapper>


        </View>

    )
}