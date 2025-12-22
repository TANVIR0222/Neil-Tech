import { IconAlarm } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
// import GradientBorder from '../../GradientBorder'
import { router } from 'expo-router'
import GlobalGradientBox from '../../GlobalGradientBox'
import GlobalText from '../../GlobalText'
import MainButton from '../../MainButton'

const UpcomingAppointments = () => {
    const [active, setActive] = React.useState<boolean>(false);

    return (
        <View style={tw`p-6 bg-white  flex-col gap-5 rounded-2xl shadow-md w-full max-w-sm `}>

            <View style={tw` flex-col  gap-6`}>
                {/* Title */}
                {/* <GradientText title='Upcoming Appointments' textStyle={{
                    fontSize: 20
                }} /> */}
                <View style={tw`flex-row  items-start`}>

                    <GlobalText text='Upcoming Appointments' size="text20" weight="semibold" align="left" />
                </View>


                <View style={tw` flex-row items-center justify-between border border-inactive border-opacity-50 py-2 px-5 rounded-full `} >
                    <View style={tw`flex-col  gap-1`}>
                        <Text style={tw`text-text16 font-sfProRegular  text-black `} >Sabrina</Text>
                        <Text style={tw`text-text12 font-sfProRegular  text-secondaryColor `} >Gel Manicure with Nail Art</Text>
                    </View>
                    {/* <GradientBorder borderRadius={20}>
                      
                    </GradientBorder> */}
                    <GlobalGradientBox radius={50}>
                        <View style={tw`flex-row px-2 py-1 items-center justify-center gap-1  `}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={IconAlarm} height={15} width={15} />
                            </View>
                            <Text style={tw`text-black font-sfProRegular`}>08:00 AM</Text>
                        </View>
                    </GlobalGradientBox>


                </View>
            </View>

            {/* View All Button (Golden Color) */}
            {/* <MainButton textStyle={{ color: '#000' }} title='See All' /> */}
            <MainButton
                title="See All"
                onPress={() => router.push('/planner')}
                textStyle={tw`text-text16 text-primaryColor font-sfProMedium`}
            />
        </View>
    )
}

export default UpcomingAppointments