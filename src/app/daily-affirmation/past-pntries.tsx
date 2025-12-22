import { IconDownArrow } from '@/assets/icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

interface Question {
    id: string;
    question: string;
    answer: string;
}

interface DiaryEntry {
    id: string;
    date: string;
    questions: Question[];
}

const diaryData: DiaryEntry[] = [
    {
        id: 'entry1',
        date: 'Oct 22, 2025',
        questions: [
            { id: '1', question: "1. What's are you grateful today?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " },
            { id: '2', question: "2. What's are you grateful today?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " },
        ],
    },
    {
        id: 'entry2',
        date: 'Oct 23, 2025',
        questions: [
            { id: '3', question: "3. What's made you happy today?", answer: "Ut enim ad minim veniam..." },
        ],
    },
    {
        id: 'entry3',
        date: 'Oct 23, 2025',
        questions: [
            { id: '4', question: "4. What's made you happy today?", answer: "Ut enim ad minim veniam..." },
        ],
    },
    {
        id: 'entry4',
        date: 'Oct 23, 2025',
        questions: [
            { id: '5', question: "5. What's made you happy today?", answer: "Ut enim ad minim veniam..." },
        ],
    },
];

export default function DiaryScreen() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const renderItem = ({ item }: { item: DiaryEntry }) => {
        const isExpanded = item.id === expandedId;

        return (
            <Animated.View
                layout={Layout.springify()} // smooth auto layout animation
                style={tw`border border-inactive ${isExpanded ? 'rounded-[34px]' : 'rounded-[34px]'} py-2 px-5 mb-4`}
            >
                <TouchableOpacity
                    onPress={() => toggleExpand(item.id)}
                    style={tw`flex-row justify-between items-center px-4 py-3 `}
                >
                    <Text style={tw`text-text16 font-sfProRegular`}>{item.date}</Text>
                    <SvgXml xml={IconDownArrow} />
                </TouchableOpacity>

                {isExpanded && (
                    <Animated.View
                        entering={FadeIn.duration(200)}
                        exiting={FadeOut.duration(200)}
                        style={tw`px-4 py-2  rounded-b-lg`}
                    >
                        {item.questions.map(q => (
                            <View key={q.id} style={tw`mb-4 flex-col gap-2`}>
                                <Text style={tw`text-text14  font-sfProRegular text-black`}>{q.question}</Text>
                                <Text style={tw`text-text14  font-sfProRegular text-secondaryColor`}>{q.answer}</Text>
                            </View>
                        ))}
                    </Animated.View>
                )}
            </Animated.View>
        );
    };

    return (
        <PageWrapper>
            <GlobalTopBar menu={false} icon={true} title="Past Entries" />
            <View style={tw`flex-1  `}>
                <FlatList
                    data={diaryData}
                    keyExtractor={(item) => item.id} // unique key for each entry
                    renderItem={renderItem}
                />
            </View>
        </PageWrapper>
    );
}
