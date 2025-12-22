import { IconRecentRewards } from '@/assets/icons'
import GradientText from '@/src/components/GradientText'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

export default function RewardModal() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null)

    const cards = [
        {
            id: 1,
            title: 'Product Discount',
            description: 'Get 10% off your next product purchase',
            value: '$25',
            points: '+25',
        },
        {
            id: 2,
            title: 'Free Nail Kit',
            description: 'Unlock one premium nail art course',
            value: '$40',
            points: '+40',
        },
    ]

    return (
        <TouchableNativeFeedback onPress={() => router.back()}>
            <View style={tw`flex-1 bg-black/50 justify-center items-center px-5`}>
                <View style={tw`bg-white w-full gap-5 rounded-2xl p-6`}>
                    <GradientText title="Redeem your Points" textStyle={{ fontSize: 20 }} />

                    {/* Reward Cards */}
                    {cards.map((card) => (
                        <TouchableOpacity
                            key={card.id}
                            activeOpacity={0.8}
                            onPress={() => setSelectedCard(card.id)}
                            style={tw.style(
                                'border py-2 px-5 flex-col gap-2 rounded-md',
                                selectedCard === card.id
                                    ? 'border-goldenBoarder '
                                    : 'border-bgGray bg-white'
                            )}
                        >
                            <View style={tw`flex-row items-center justify-between gap-2`}>
                                <Text style={tw`text-text14 font-sfProMedium text-black`}>
                                    {card.title}
                                </Text>
                                <View style={tw`flex-row items-center gap-1`}>
                                    <Text style={tw`text-text12 font-sfProRegular text-goldenBoarder`}>
                                        {card.points}
                                    </Text>
                                    <SvgXml xml={IconRecentRewards} />
                                </View>
                            </View>

                            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>
                                {card.description}
                            </Text>
                            <Text style={tw`text-text14 font-sfProMedium text-goldenBoarder`}>
                                Value: {card.value}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}
