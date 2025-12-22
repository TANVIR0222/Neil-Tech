import { IconMonth } from '@/assets/icons'
import CalendarView from '@/src/components/CalendarComponent'
import GlobalText from '@/src/components/GlobalText'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

export default function index() {
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Daily Affirmation" menu={false} addIiocns={true} route={() => router.push("/daily-affirmation/past-pntries")} />
            <KeyboardAvoidingWrapper>
                <ScrollView contentContainerStyle={tw` flex-col gap-5  pb-10`} >
                    <View style={tw`bg-[#FFE0BC]  rounded-full flex-row items-center  gap-4 py-3 px-5`}>
                        <SvgXml xml={IconMonth} />
                        <View style={tw`flex-col gap-1 `} >
                            <Text style={tw` text-text14 font-sfProRegular text-black `}>You’re on a 7-day streak!</Text>
                            <Text style={tw` text-text12 font-sfProRegular text-black `}>Keep going to maintain your momentum</Text>
                        </View>
                    </View>


                    <View style={tw`mx-2 mt-2`} >
                        <CalendarView />
                    </View>


                    <View style={tw`mx-2 flex-col gap-5`} >
                        {/* <GradientText title='Today’s Reflection Questions' textStyle={tw`text-text20  font-sfProMedium `} /> */}
                        <View style={tw` items-start`} >
                            <GlobalText text="Today’s Reflection Questions" size="text20" weight="medium" align="left" />
                        </View>

                        <View style={tw`flex-col gap-4`}>
                            {/* Task Name */}
                            <View style={tw`flex-col gap-3 shadow-md shadow-black py-4 px-5 rounded-xl bg-white`}>
                                <Text style={tw`text-primaryColor font-sfProRegular text-text14`}>What’s are you grateful today?</Text>
                                <TextInput
                                    placeholder="Type your answer here...."
                                    style={tw`border  border-bgGray rounded-lg px-4 py-3 h-30`}
                                    textAlignVertical="top"
                                    textAlign="left"
                                    placeholderTextColor="#989898"
                                    // keyboardAppearance='light'
                                    multiline
                                />
                            </View>
                            <View style={tw`flex-col gap-3 shadow-md shadow-black py-4 px-5 rounded-xl bg-white`}>
                                <Text style={tw`text-primaryColor font-sfProRegular text-text14`}>What's one thing you'll focus on improving?</Text>
                                <TextInput
                                    placeholder="Type your answer here...."
                                    style={tw`border  border-bgGray rounded-lg px-4 py-3 h-30`}
                                    textAlignVertical="top"
                                    textAlign="left"
                                    placeholderTextColor="#989898"
                                    // keyboardAppearance='light'
                                    multiline
                                />
                            </View>
                            <View style={tw`flex-col gap-3 shadow-md shadow-black py-4 px-5 rounded-xl bg-white`}>
                                <Text style={tw`text-primaryColor font-sfProRegular text-text14`}>Who inspired you today and why?</Text>
                                <TextInput
                                    placeholder="Type your answer here...."
                                    style={tw`border  border-bgGray rounded-lg px-4 py-3 h-30`}
                                    textAlignVertical="top"
                                    textAlign="left"
                                    placeholderTextColor="#989898"
                                    // keyboardAppearance='light'
                                    multiline
                                />
                            </View>
                            <View style={tw`flex-col gap-3 shadow-md shadow-black py-4 px-5 rounded-xl bg-white`}>
                                <Text style={tw`text-primaryColor font-sfProRegular text-text14`}>How do you feel about your progress this week?</Text>
                                <TextInput
                                    placeholder="Type your answer here...."
                                    style={tw`border  border-bgGray rounded-lg px-4 py-3 h-30`}
                                    textAlignVertical="top"
                                    textAlign="left"
                                    placeholderTextColor="#989898"
                                    // keyboardAppearance='light'
                                    multiline
                                />
                            </View>

                        </View>
                    </View>
                </ScrollView>
                <MainButton title="Save My Reflections  " />

            </KeyboardAvoidingWrapper>


        </PageWrapper>
    )
}