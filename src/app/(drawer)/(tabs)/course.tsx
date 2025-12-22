import { IconDate, IconMean, IconStar } from '@/assets/icons';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalText from '@/src/components/GlobalText';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { sections } from '@/src/utils/dammy-data';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function CoursesPage() {

    const [search, setSearch] = React.useState<string>("");


    return (
        <PageWrapper>
            <View style={tw`mb-2 flex-col gap-4`}>
                <GlobalTopBar icon={true} title="Courses" menu={true} search={true} />
                <GlobalSearch onChangeText={setSearch} placeholder='search' value={search} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={tw`pb-16 bg-white pt-4`}
            >
                {sections.map((section) => (
                    <View key={section.title} style={tw` pb-3 flex-col gap-4`}>
                        {/* Header */}
                        <View style={tw`flex-row justify-between items-center  `}>

                            {/* <GradientText title={section.title} textStyle={tw`text-text20 font-sfProMedium `} /> */}
                            <GlobalText text={section.title} size="text20" weight="medium" align="left" />
                            <TouchableOpacity onPress={() => router.push(`/course-details`)}>
                                <Text style={tw`text-text14 font-sfProRegular text-goldenBoarder `}> See All</Text>
                            </TouchableOpacity>

                        </View>

                        {/* Horizontal Scroll */}
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={section.data}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => router.push('/course-details/subscribe/[id]')}
                                    style={tw`bg-white border border-[#D6C176] rounded-2xl  mr-4 p-3`}
                                >
                                    <View style={tw`flex-col gap-1.5`}>
                                        <Image
                                            source={item.image}
                                            style={tw`w-full h-40 rounded-xl`}
                                            resizeMode="cover"
                                        />

                                        <Text
                                            style={tw`text-text16 font-sfProMedium  text-black`}
                                            numberOfLines={2}
                                        >
                                            {item.title}
                                        </Text>

                                        <View style={tw`flex-row  gap-1 items-center`}>
                                            <SvgXml xml={IconMean} />
                                            <Text style={tw`text-text12 text-secondaryColor font-sfProRegular`}>
                                                {item.instructor}
                                            </Text>
                                        </View>

                                        <View style={tw`flex-row gap-1 items-center `}>
                                            <SvgXml xml={IconDate} />
                                            <Text style={tw`text-text12 text-secondaryColor font-sfProRegular`}>
                                                {item.duration}
                                            </Text>
                                        </View>
                                        <View style={tw`flex-row gap-2 items-center `}>
                                            <SvgXml xml={IconStar} />
                                            <Text style={tw`text-goldenBoarder  text-text12 font-sfProRegular`}>
                                                Earn +{item.points} Reward Points
                                            </Text>
                                        </View>
                                    </View>


                                    {item.subscribed ? (
                                        <View style={tw`mt-2 flex-col gap-2`}>
                                            <View style={tw`bg-[#D6C176] rounded-full py-1 px-3 self-start`}>
                                                <Text style={tw`text-white text-xs`}>Subscribed</Text>
                                            </View>

                                            <View style={tw`flex-col justify-between items-end  gap-1`}>
                                                <View
                                                    style={[
                                                        tw`w-full bg-[#E9E9E9]`,
                                                        { height: 5, borderRadius: 10, overflow: "hidden" },
                                                    ]}
                                                >
                                                    <LinearGradient
                                                        colors={["#F2DA87", "#BA9215"]}
                                                        start={{ x: 0, y: 0 }}
                                                        end={{ x: 1, y: 0 }}
                                                        style={{ width: `${item.progress}%`, height: "100%" }}
                                                    />
                                                </View>
                                                <Text style={tw` text-text10 text-secondaryColor font-sfProRegular`}>
                                                    {item.progress}% complete
                                                </Text>
                                            </View>
                                        </View>
                                    ) : (
                                        <Text
                                            style={tw`mt-2 text-primaryColor font-sfProBold text-text16`}
                                        >
                                            ${item.price.toFixed(2)}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            )}

                        />
                    </View>
                ))}
            </ScrollView>
        </PageWrapper>
    );
}
