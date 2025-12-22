import { IconsRightArrowBlack } from '@/assets/icons'
import { router } from 'expo-router'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import tw from '../lib/tailwind'
import { _small_device } from '../utils/utils'

const AuthTopBar: React.FC<{ icon?: boolean }> = ({ icon }) => {

    return (
        <View style={tw` ${icon ? 'py-5' : _small_device ? 'py-3' : 'py-12'} `}>
            <View style={tw` flex-col gap-4 `}>
                {icon && <TouchableOpacity onPress={() => router.back()} style={tw` `}>
                    <SvgXml xml={IconsRightArrowBlack} />
                </TouchableOpacity>}
                <View style={tw`items-center justify-center `}>
                    <Image source={require('@/assets/images/app-logo.png')} style={tw`${_small_device ? 'w-36 h-16' : 'w-full h-40'} `} resizeMode='cover' />
                </View>
            </View>
        </View>
    )
}

export default AuthTopBar