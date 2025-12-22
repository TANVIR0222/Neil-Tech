import { IconAppointmentReminder, IconChangePass, IconHelp, IconLogOut, IconNewCourses, IconPayment, IconProductRestockUpdate, IconProfileBack, IconProfileView, IconTerms } from '@/assets/icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Image, Switch, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SvgXml } from 'react-native-svg'

export default function Profile() {

    const profileData = [
        { id: 1, title: 'Edit Profile', icon: IconProfileView, route: '/common/update-profile' },
        { id: 2, title: 'Change Password', icon: IconChangePass, route: '/common/change-password' },
        { id: 3, title: 'Payment Method', icon: IconPayment, route: '/common/paymet-method' },
    ]
    const notificationData = [
        { id: 1, title: 'Appointment Reminder', icon: IconAppointmentReminder },
        { id: 2, title: 'Product Restock Update', icon: IconProductRestockUpdate },
        { id: 3, title: 'New Courses', icon: IconNewCourses },
    ]
    const privacyData = [
        { id: 1, title: 'Terms & Condition', icon: IconTerms, route: '/common/terms-and-condition' },
        { id: 2, title: 'Help & Support', icon: IconHelp, route: '/common' },
        { id: 3, title: 'Log Out', icon: IconLogOut },
    ]

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <PageWrapper>
            <GlobalTopBar title='Profile' icon={true} menu={true} />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
                <View style={tw`flex-1 flex-col gap-7 justify-center`}>
                    <View style={tw`flex-col items-center justify-center gap-4`}>
                        <View style={tw`flex-row items-center justify-center`}>
                            <View style={tw`flex-row items-center border border-[#F2DA87] p-1 border-opacity-50 rounded-full`}>
                                <Image
                                    source={require('@/assets/images/3d_avatar_12.png')}
                                    style={tw`w-24 h-24 rounded-full`}
                                    resizeMode="cover"
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={tw`text-text20 font-sfProMedium text-black text-center`}>Cristiano Ronaldo </Text>
                            <Text style={tw`text-text15 font-sfProRegular text-black text-center`}>leomessi@gmail.com  </Text>
                        </View>
                    </View>

                    <View style={tw`flex-col gap-4`}>
                        <View>
                            <Text style={tw`text-text17 font-sfProMedium text-goldenBoarder`}>  Account</Text>
                            {
                                profileData.map((item) => (
                                    <TouchableOpacity onPress={() => router.push(item.route)} key={item.id} style={tw`flex-row items-center justify-between border border-inactive border-opacity-50 py-3 px-5 rounded-full mt-4`}>
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={item?.icon} />
                                            <Text style={tw`text-black text-text14 font-sfProMedium`}>{item.title}</Text>
                                        </View>
                                        <SvgXml xml={IconProfileBack} />
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <View>
                            <Text style={tw`text-text17 font-sfProMedium text-goldenBoarder`}>Notification</Text>
                            {
                                notificationData.map((item) => (
                                    <View key={item.id} style={tw`flex-row items-center justify-between border border-inactive border-opacity-50 py-3 px-5 rounded-full mt-4`}>
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={item?.icon} />
                                            <Text style={tw`text-black text-text14 font-sfProMedium`}>{item.title}</Text>
                                        </View>
                                        <Switch
                                            trackColor={{ false: '#989898', true: '#4ACD67' }}
                                            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                                            ios_backgroundColor="#3e3e3e"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                        />
                                    </View>
                                ))
                            }
                        </View>
                        <View style={tw`mb-16`}>
                            <Text style={tw`text-text17 font-sfProMedium text-goldenBoarder`}>Notification</Text>
                            {
                                privacyData.map((item) => (
                                    <TouchableOpacity onPress={() => item.route && router.push(item.route)} key={item.id} style={tw`flex-row items-center justify-between border border-inactive border-opacity-50 py-3 px-5 rounded-full mt-4`}>
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={item?.icon} />
                                            <Text style={tw`${item.title === 'Log Out' ? 'text-red' : 'text-black'}  text-text14 font-sfProMedium`}>{item.title}</Text>
                                        </View>

                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </PageWrapper>
    )
}