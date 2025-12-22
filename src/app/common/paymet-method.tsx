import { IconEdite, IconMastrCard, IconVisa } from '@/assets/icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const Faq = () => {
    const profileData = [
        { id: 1, title: '**** **** **** 4978 ', icon: IconVisa },
        { id: 2, title: '**** **** **** 4978 ', icon: IconMastrCard },
    ]
    return (
        <PageWrapper>
            <GlobalTopBar title='Payment Method' icon={true} menu={false} />
            <View>
                {
                    profileData.map((item) => (
                        <TouchableOpacity key={item.id} style={tw`flex-row items-center justify-between border border-inactive border-opacity-50 py-3 px-5 rounded-full mt-4`}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <SvgXml xml={item?.icon} />
                                <Text style={tw`text-secondaryColor text-text14 font-sfProMedium`}>{item.title}</Text>
                            </View>
                            <SvgXml xml={IconEdite} height={20} width={20} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </PageWrapper>
    )
}

export default Faq