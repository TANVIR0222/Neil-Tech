import tw from '@/src/lib/tailwind'
import { _width } from '@/src/utils/utils'
import React from 'react'
import { Text, View } from 'react-native'
import GlobalText from '../../GlobalText'
import GradientProgressBar from '../../GradientProgressBar'

const TotalProgress = () => {
    return (
        <View style={tw`flex-col gap-6 bg-white shadow-md  mt-6 py-4 px-4 mx-1 rounded-xl `}>
            <View style={tw`flex-row  items-center justify-between `}>
                <GlobalText text="Weekly Progress" size={_width > 370 ? "text20" : "text14"} weight="medium" align="left" />
                <Text style={tw`text-text14 font-sfProMedium text-secondaryColor`} >3 of 4 tasks completed</Text>
            </View>
            <GradientProgressBar progress={0.5} />

        </View>
    )
}

export default TotalProgress