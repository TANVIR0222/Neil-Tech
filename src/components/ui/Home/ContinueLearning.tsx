import tw from '@/src/lib/tailwind'
import React from 'react'
import { View } from 'react-native'
import GlobalText from '../../GlobalText'
import GradientProgressBar from '../../GradientProgressBar'

const ContinueLearning = () => {
    return (
        <View style={tw`p-6 bg-white  flex-col gap-5 rounded-2xl shadow-md w-full max-w-sm `}>

            <View style={tw` flex-col items-start gap-6`}>
                {/* Title */}
                {/* <GradientText title='Upcoming Appointments' textStyle={{
                    fontSize: 20
                }} /> */}
                <GlobalText text="Upcoming Appointments" size="text20" weight="semibold" align="left" />

                <GradientProgressBar progress={0.5} />
            </View>

        </View>
    )
}

export default ContinueLearning