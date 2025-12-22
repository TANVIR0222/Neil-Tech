import { IconAdd, IconMenuBar, IconSeach, IconsRightArrowBlack } from '@/assets/icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import GlobalText from './GlobalText';
type NavigationProp = DrawerNavigationProp<Record<string, object | undefined>>;

interface AuthHeadingProps {
    icon?: boolean; // SVG XML string
    onBack?: () => void;
    title?: string;
    subtitle?: string;
    titleStyle?: string; // Tailwind class string
    subtitleStyle?: string; // Tailwind class string
    containerStyle?: string; // Tailwind class string
    gap?: string; // Tailwind spacing class
    route?: () => void
    addIiocns?: boolean
    deleteICons?: boolean
    threeDot?: boolean
    id?: string | number
    call?: boolean
    menu?: boolean
    search?: boolean
}

const GlobalTopBar: React.FC<AuthHeadingProps> = ({
    icon,
    onBack = () => router.back(),
    title = '',
    subtitle = '',
    titleStyle = 'text-text20 font-sfProMedium text-[#000]',
    subtitleStyle = 'text-text14 text-primaryColor font-sfpro-400 ',
    route,
    addIiocns,
    deleteICons,
    threeDot,
    id,
    call,
    menu,
    search
}) => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={tw` flex-row items-center`}>
            {/* Back Button */}
            {icon && (
                <TouchableOpacity
                    style={tw`${subtitle || addIiocns || deleteICons || threeDot || call ? 'w-[15%]' : 'w-[50%]'} py-2`}
                    onPress={menu ? () => navigation.openDrawer() : onBack}
                >
                    <SvgXml xml={menu ? IconMenuBar : IconsRightArrowBlack} width={40} height={40} />
                </TouchableOpacity>
            )}


            {/* Title */}
            <View style={tw`absolute left-0 right-0 items-center`}>
                {title ?
                    // <Text style={tw`${titleStyle}`}>{title}</Text> 
                    <GlobalText text={title} size="text20" weight="medium" align="left" />


                    : null}
            </View>


            {/* Right Side Icons */}
            <View style={tw`flex-1 flex-row items-center justify-end`}>
                {subtitle ? (
                    <TouchableOpacity onPress={() => route}>
                        <Text style={tw`${subtitleStyle}`}>{subtitle}</Text>
                    </TouchableOpacity>
                ) : null}
                {addIiocns ? (
                    <TouchableOpacity onPress={route}>
                        <SvgXml xml={IconAdd} width={40} height={40} />
                    </TouchableOpacity>
                ) : null}
                {search ? (
                    <TouchableOpacity onPress={route}>
                        <SvgXml xml={IconSeach} width={40} height={40} />
                    </TouchableOpacity>
                ) : null}

            </View>

        </View>
    );
};

export default GlobalTopBar;
