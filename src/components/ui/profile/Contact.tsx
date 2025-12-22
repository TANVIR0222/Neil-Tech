import { IconFacebook, IconInstagram, IconProfileBack, IconTwitter, IconWhatsapp } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Contact() {
    const profileData = [
        { id: 4, title: 'Whatsapp', icon: IconWhatsapp, link: 'https://wa.me/1234567890' },
        { id: 1, title: 'Facebook', icon: IconFacebook, link: 'https://www.facebook.com/yourpage' },
        { id: 2, title: 'Twitter', icon: IconTwitter, link: 'https://twitter.com/yourhandle' },
        { id: 3, title: 'Instagram', icon: IconInstagram, link: 'https://www.instagram.com/yourhandle' },
    ];

    const handlePress = async (url: string) => {
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert("Cannot open the link:", url);
            }
        } catch (err) {
            console.error('An error occurred', err);
            Alert.alert('An error occurred while trying to open the link');
        }
    };

    return (
        <View style={tw`flex-col gap-4`}>
            {profileData.map((item) => (
                <TouchableOpacity
                    onPress={() => handlePress(item.link)}
                    key={item.id}
                    style={tw`flex-row items-center justify-between border border-inactive border-opacity-50 py-3 px-5 rounded-full`}
                >
                    <View style={tw`flex-row items-center gap-2`}>
                        <SvgXml xml={item?.icon} />
                        <Text style={tw`text-black text-text14 font-sfProMedium`}>{item.title}</Text>
                    </View>
                    <SvgXml xml={IconProfileBack} />
                </TouchableOpacity>
            ))}
        </View>
    );
}
