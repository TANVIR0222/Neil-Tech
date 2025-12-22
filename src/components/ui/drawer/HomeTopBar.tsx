import { IconMenuBar } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import GlobalText from '../../GlobalText';

type NavigationProp = DrawerNavigationProp<Record<string, object | undefined>>;

export default function HomeTopBar() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={tw`w-full flex-row items-center justify-between  py-2`}>
            {/* Left: Menu + Title */}
            <View style={tw`flex-row items-center gap-2`}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <SvgXml xml={IconMenuBar} />
                </TouchableOpacity>
                {/* <TheemText title="Good Morning , Sarah!" textStyle={tw`text-text16 font-sfProBold `} /> */}
                <GlobalText text="Good Morning, Sarah!" size="text20" weight="semibold" />


            </View>

            {/* Right: Avatar */}
            <View style={tw`flex-row items-center border border-[#F2DA87] p-1 border-opacity-50 rounded-full`}>
                <Image
                    source={require('@/assets/images/3d_avatar_12.png')}
                    style={tw`w-10 h-10 rounded-full`}
                    resizeMode="cover"
                />
            </View>
        </View>
    );
}

