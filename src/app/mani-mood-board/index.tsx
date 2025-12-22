import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import InstagramStories from '@/src/components/ui/ManiMoodBoard/Story'
import tw from '@/src/lib/tailwind'
import { mainData } from '@/src/utils/dammy-data'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Index() {

    const { top } = useSafeAreaInsets();

    return (
        <PageWrapper>
            <View style={tw` flex-1 mt-[${top}px]`}>
                {/* 🔹 Stories List */}
                <GlobalTopBar title="Mani Mood Board" icon={true} menu={false} addIiocns={true} />


                <View style={tw` flex-1`}>
                    <FlatList
                        data={mainData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={tw`justify-between mb-6 m-1`}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => router.push('/mani-mood-board/details/[id]')}
                                style={tw`bg-white rounded-xl w-[31%] p-2 shadow-md`}
                                activeOpacity={0.8}
                            >
                                <View>
                                    <Image
                                        source={item.image}
                                        style={tw`w-full h-32 rounded border-goldenBoarder border`}
                                        resizeMode="cover"
                                    />
                                    <View style={tw`p-2`}>
                                        <Text
                                            style={tw`text-text12 font-sfProRegular text-black`}
                                            numberOfLines={2}
                                        >
                                            {item?.instructor}
                                        </Text>

                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}

                        ListHeaderComponent={
                            <View>
                                <InstagramStories />
                                <Text style={tw`text-text20 font-sfProMedium text-black mt-2 mb-3`}>French Tips</Text>

                            </View>
                        }
                    />
                </View>

            </View>
        </PageWrapper>
    )
}