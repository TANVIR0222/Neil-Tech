import { IconProductsPurchased, IconRecentRewards, IconReward, IconRewardButton } from '@/assets/icons'
import GlobalText from '@/src/components/GlobalText'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import GradientProgressBar from '@/src/components/GradientProgressBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { rewardData } from '@/src/utils/dammy-data'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function Index() {
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} menu={false} title='My Rewards' />
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={tw`flex-col gap-4 flex-1 `}>
                        <View style={tw` border flex-col gap-1.5 py-5 items-center border-[#D6C176] rounded-2xl `}>
                            <View style={tw`flex-row items-center gap-2`}>
                                <Text style={tw`text-3xl font-bold text-goldenBoarder `} >250</Text>
                                <SvgXml xml={IconReward} />
                            </View>

                            <View style={tw`flex-col items-center gap-1.5`}>
                                <Text style={tw`text-text17 font-sfProRegular text-goldenBoarder `}>250 points available to redeem</Text>
                                <Text style={tw`text-text14 font-sfProRegular text-goldenBoarder `}>Your Creativity pays off</Text>
                            </View>
                        </View>

                        <View style={tw`flex-row justify-between mx-0.5`}>
                            {[
                                { id: 1, title: "Products Purchased", points: "150 pts", next: "Next Reward at 200 pts", percent: "75%", progress: 0.4 },
                                { id: 2, title: "Products Purchased", points: "150 pts", next: "Next Reward at 200 pts", percent: "75%", progress: 0.4 },
                            ].map((item) => (
                                <View key={item.id} style={tw`flex-col gap-2 py-3 px-4 shadow w-[48%] bg-white rounded-2xl`}>
                                    {/* Header */}
                                    <View style={tw`flex-row items-center gap-2`}>
                                        <SvgXml xml={IconProductsPurchased} />
                                        <Text style={tw`text-text14 font-sfProMedium text-secondaryColor`}>
                                            {item.title}
                                        </Text>
                                    </View>

                                    {/* Points */}
                                    <View style={tw`flex-row items-start gap-2`}>
                                        <GlobalText text={item.points} size="text20" weight="medium" align="left" />
                                    </View>


                                    {/* Info Row */}
                                    <View style={tw`flex-row items-center justify-between`}>
                                        <Text style={tw`text-text10 font-sfProRegular text-secondaryColor`}>
                                            {item.next}
                                        </Text>
                                        <Text style={tw`text-text10 font-sfProRegular text-secondaryColor`}>
                                            {item.percent}
                                        </Text>
                                    </View>

                                    {/* Progress */}
                                    <GradientProgressBar progress={item.progress} />
                                </View>
                            ))}
                        </View>

                        <View style={tw` flex-1  flex-col justify-between`}>
                            {/* <GradientText title='Recent Rewards' textStyle={{
                        fontSize: 18,
                        fontWeight: '700',
                        fontFamily: 'sfProMedium'
                    }} /> */}

                            <View style={tw` flex-row items-start justify-between `}>
                                <GlobalText text="Recent Rewards" size="text20" weight="semibold" align="left" />

                            </View>
                            <View style={tw` flex-1  flex-col justify-between`}>
                                <View style={tw`mt-4`}>
                                    <FlatList
                                        data={rewardData}
                                        keyExtractor={(item, index) => String(index)}
                                        showsVerticalScrollIndicator={false}
                                        nestedScrollEnabled={false}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity
                                                onPress={() => router.push('/reward/reward-modal')}
                                                style={tw`flex-row items-center bg-white justify-between  border border-bgGray rounded-full px-4 py-3 mb-3`}
                                            >
                                                {/* Left Section */}
                                                <View style={tw`flex-row items-center gap-3`}>
                                                    <View
                                                        style={tw` rounded-full  items-center justify-center`}
                                                    >
                                                        <SvgXml xml={item.icon} />
                                                    </View>
                                                    <View>
                                                        <Text style={tw`text-text15 font-sfProMedium text-primaryColor`}>
                                                            {item.title}
                                                        </Text>
                                                        <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>
                                                            {item.date}
                                                        </Text>
                                                    </View>
                                                </View>

                                                {/* Right Section */}
                                                <View style={tw`flex-row items-center gap-1`}>
                                                    <Text style={tw`text-text15 font-sfProMedium text-[#D6AF61]`}>
                                                        {item.points}
                                                    </Text>
                                                    <SvgXml xml={IconRecentRewards} />
                                                </View>
                                            </TouchableOpacity>
                                        )}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={(event) => { }}
                                // activeOpacity={0.9}
                                >
                                    <LinearGradient
                                        colors={['#C9A227', '#F2DA87', '#C9A227']}
                                        // start={{ x: 1, y: 0.5 }}
                                        // end={{ x: 1, y: 0.5 }}
                                        style={tw`w-full h-12 rounded-full justify-center items-center`}
                                    >
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={IconRewardButton} />
                                            <Text style={[tw`text-white text-text16 text-center font-sfProMedium`]}>
                                                Redeem Now
                                            </Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </PageWrapper>
    )
}