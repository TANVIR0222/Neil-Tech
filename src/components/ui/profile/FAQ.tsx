import { IconDownArrow } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 'faq1',
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase, provided it is in its original condition and packaging."
    },
    {
        id: 'faq2',
        question: "How long does shipping take?",
        answer: "Shipping usually takes 3-5 business days depending on your location."
    },
    {
        id: 'faq3',
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries. Shipping charges may vary based on the destination."
    },
    {
        id: 'faq4',
        question: "How can I track my order?",
        answer: "After your order is shipped, you will receive a tracking number via email."
    },
    {
        id: 'faq5',
        question: "How can I contact support?",
        answer: "You can contact our support team via email at support@example.com or call us at +123456789."
    },
];

export default function FAQScreen() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const renderItem = ({ item }: { item: FAQItem }) => {
        const isExpanded = item.id === expandedId;

        return (
            <Animated.View
                layout={Layout.springify()} // smooth expand/collapse animation
                style={tw`border border-bgGray ${isExpanded ? 'rounded-[20px]' : 'rounded-[20px]'} mb-4`}
            >
                {/* Question Header */}
                <TouchableOpacity
                    onPress={() => toggleExpand(item.id)}
                    style={tw`flex-row justify-between items-center px-4 py-3`}
                >
                    <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>{item.question}</Text>
                    <SvgXml xml={IconDownArrow} style={tw`${isExpanded ? 'rotate-180' : ''}`} />
                </TouchableOpacity>

                {/* Answer */}
                {isExpanded && (
                    <Animated.View
                        entering={FadeIn.duration(200)}
                        exiting={FadeOut.duration(200)}
                        style={tw`px-4 py-2 border-t border-bgGray`}
                    >
                        <Text style={tw`text-text14 font-sfProRegular text-secondaryColor`}>
                            {item.answer}
                        </Text>
                    </Animated.View>
                )}
            </Animated.View>
        );
    };

    return (

        <View style={tw`flex-1 `}>
            <FlatList
                data={faqData}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
