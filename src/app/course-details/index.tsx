import { IconDate, IconMean, IconStar } from '@/assets/icons';
import GlobalSearch from '@/src/components/GlobalSearch';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { popelerData } from '@/src/utils/dammy-data';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function CoursesPage() {

    const [search, setSearch] = React.useState<string>("");
    const { top } = useSafeAreaInsets();


    return (
        <PageWrapper>
            <View style={tw`mb-2 flex-col mt-[${top}px] `}>
                <GlobalTopBar icon={true} title="Popular" menu={false} search={true} />
                <GlobalSearch onChangeText={setSearch} placeholder='search' value={search} />
            </View>
            {/* Horizontal Scroll */}
            <FlatList
                data={popelerData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={tw`justify-between mb-4`}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => router.push(`/course-details/subscribe/[id]`)}
                        style={tw`bg-white border border-[#D6C176] rounded-2xl w-[48%] p-3`}
                    >
                        <View style={tw`flex-col  gap-1.5`}>
                            <Image
                                source={item.image}
                                style={tw`w-full h-40 rounded-xl`}
                                resizeMode="cover"
                            />

                            <Text
                                style={tw`text-text16 font-sfProMedium text-black`}
                                numberOfLines={2}
                            >
                                {item?.instructor}
                            </Text>

                            <View style={tw`flex-row gap-1 items-center`}>
                                <SvgXml xml={IconMean} />
                                <Text style={tw`text-text12 text-secondaryColor font-sfProRegular`}>
                                    {item.instructor}
                                </Text>
                            </View>

                            <View style={tw`flex-row gap-1 items-center`}>
                                <SvgXml xml={IconDate} />
                                <Text

                                    style={tw`text-text12 text-secondaryColor font-sfProRegular`}>
                                    {item.duration}
                                </Text>
                            </View>

                            <View style={tw`flex-row gap-2 items-center`}>
                                <SvgXml xml={IconStar} />
                                <Text style={tw`text-goldenBoarder text-text10`}>
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

        </PageWrapper>
    );
}
