import { IconLesson, IconLock, IconMyNote, IconPlay, IconsRightArrowBlack } from '@/assets/icons'
import GlobalText from '@/src/components/GlobalText'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { _height } from '@/src/utils/utils'
import { useEvent } from 'expo'
import { router } from 'expo-router'
import { useVideoPlayer, VideoView } from 'expo-video'
import React from 'react'
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'

const videoSource =
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function ViewCourse() {
    const { top, bottom } = useSafeAreaInsets()
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });
    const [activeTab, setActiveTab] = React.useState<"courses" | "notes">("courses");


    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });
    return (

        <View style={tw`flex-1 bg-white gap-2`} >
            <View style={tw`flex-1 items-center justify-center `}>
                <VideoView
                    style={tw`w-full h-[${_height / 2}px]`}
                    player={player}
                // allowsFullscreen
                // allowsPictureInPicture
                />

                <TouchableOpacity onPress={() => router.back()} style={tw`absolute top-[${top + 4}px] left-5  z-30`} >
                    <SvgXml xml={IconsRightArrowBlack} />
                </TouchableOpacity>
            </View>

            <PageWrapper>
                <ScrollView contentContainerStyle={{ paddingBottom: 20 }} showsVerticalScrollIndicator={false} >
                    <View style={tw`flex-col gap-5 justify-between items-start`}>
                        <View style={tw`flex-col gap-2 justify-between items-start`}>
                            <GlobalText text="Acrylic Nail Extension Basics" size="text20" weight="semibold" align="left" />
                            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>Lesson 2 of 10</Text>
                        </View>
                        <View style={tw`flex-col gap-2 border border-inactive px-2 py-3 rounded-2xl `}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconLesson} />
                                <GlobalText text="Lesson Description" size="text17" weight="semibold" align="left" />
                            </View>
                            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor leading-4 `} >
                                Master the art of acrylic nail application with this comprehensive course. Learn techniques from basic application to advanced nail art designs that will set your services apart.
                            </Text>
                        </View>
                    </View>



                    <View style={tw`flex-row justify-center mt-5`}>
                        {/* === Courses Tab === */}
                        <Pressable
                            onPress={() => setActiveTab("courses")}
                            style={tw.style(
                                `w-1/2 h-14 justify-center border rounded-l-lg`,
                                activeTab === "courses"
                                    ? "bg-[#F2DA87]/20 border-goldenBoarder"
                                    : "border-goldenBoarder bg-white"
                            )}
                        >
                            <Text
                                style={tw.style(
                                    `text-center text18 font-sfProMedium`,
                                    activeTab === "courses" ? "text-[#F2DA87]" : "text-primaryColor"
                                )}
                            >
                                Courses
                            </Text>
                        </Pressable>

                        {/* === Notes Tab === */}
                        <Pressable
                            onPress={() => setActiveTab("notes")}
                            style={tw.style(
                                `w-1/2 h-14 justify-center border rounded-r-lg`,
                                activeTab === "notes"
                                    ? "bg-[#F2DA87]/20 border-goldenBoarder"
                                    : "border-goldenBoarder bg-white"
                            )}
                        >
                            <Text
                                style={tw.style(
                                    `text-center text18 font-sfProMedium`,
                                    activeTab === "notes" ? "text-[#F2DA87]" : "text-primaryColor"
                                )}
                            >
                                Notes
                            </Text>
                        </Pressable>
                    </View>
                    {
                        activeTab === "notes" ? (
                            <>
                                <View style={tw`p-2 mt-5 rounded-2xl border border-inactive overflow-hidden`}>
                                    <View style={tw` flex-col gap-2 `}>
                                        {/* Header Section */}
                                        <View style={tw`flex-row items-start gap-2`}>
                                            <SvgXml xml={IconMyNote} />
                                            <GlobalText text="My Notes" size="text16" weight="semibold" align="left" />
                                        </View>

                                        {/* Description */}
                                        <Text
                                            style={tw`text-text12 font-sfProRegular text-secondaryColor `}
                                        >
                                            In this lesson, you'll learn the fundamental techniques for applying acrylic nail
                                            extensions. We cover proper tip sizing, adhesive application. In this lesson, you'll
                                            learn the fundamental techniques for applying acrylic nail extensions. We cover proper
                                            tip sizing, adhesive application.
                                        </Text>
                                    </View>
                                </View>

                            </>
                        ) :
                            <View style={tw`flex-col gap-4 mt-5`}>
                                <View style={tw`flex-row justify-between items-center`}>
                                    <GlobalText text="Course Content" size="text20" weight="semibold" align="left" />
                                </View>


                                <View style={tw`flex-col  justify-between gap-3 `}>
                                    {
                                        Array.from({ length: 5 }, (_, index) => (
                                            <View key={index} style={tw`py-3 px-4 border items-center flex-row gap-5 rounded-full border-bgGray`} >
                                                <SvgXml xml={index === 0 ? IconPlay : IconLock} />
                                                <View style={tw`flex-col gap-1`} >
                                                    <GlobalText text={`${index + 1}. Introduction to Acrylics`} size="text16" weight="semibold" align="left" />
                                                    <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>15 min</Text>
                                                </View>
                                            </View>
                                        ))
                                    }
                                </View>
                            </View>

                    }

                </ScrollView>

            </PageWrapper>


        </View>

    )
}