import PageWrapper from "@/src/components/PageWrapper";
import HomeTopBar from "@/src/components/ui/drawer/HomeTopBar";
import ContinueLearning from "@/src/components/ui/Home/ContinueLearning";
import HomeCarousel from "@/src/components/ui/Home/HomeCarousel";
import UpcomingAppointments from "@/src/components/ui/Home/UpcomingAppointments";
import WeeklyToDoList from "@/src/components/ui/Home/WeeklyToDo";
import tw from "@/src/lib/tailwind";
import { _width } from "@/src/utils/utils";
import React from 'react';
import { Image, ImageBackground, ScrollView, TouchableOpacity, View } from "react-native";

export default function Home() {


    return (
        <PageWrapper>
            <HomeTopBar />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}  >
                <View style={tw`flex-col gap-4 mx-1 `}>
                    <HomeCarousel />
                    <WeeklyToDoList />
                    <UpcomingAppointments />
                    <ContinueLearning />

                    <View style={tw`w-full rounded-2xl `}>
                        <ImageBackground
                            source={require('@/assets/images/reedem-now.png')}
                            resizeMode="cover"
                            style={tw`${_width < 370 ? 'w-full h-36' : 'w-full h-38'} rounded-xl  overflow-hidden justify-center  items-center`}
                        >
                            <TouchableOpacity
                                style={tw`absolute bottom-5 w-[90%] h-12 rounded-2xl justify-center items-center shadow-lg`}
                            >
                                <Image
                                    source={require('@/assets/images/reedem-now-butn.png')}
                                    resizeMode="cover"
                                    style={tw`w-full h-full rounded-2xl`}
                                />
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
}
