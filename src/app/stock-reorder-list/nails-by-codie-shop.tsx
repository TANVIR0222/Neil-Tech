import { IconStar } from '@/assets/icons';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { nailData } from '@/src/utils/dammy-data';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function NailsByCodieShop() {

    const [search, setSearch] = React.useState<string>("");


    return (
        <PageWrapper>
            <View style={tw`mb-2 flex-col `}>
                <GlobalTopBar icon={true} title="Nails by Codie Shop" menu={false} search={true} />
                {/* <GlobalSearch onChangeText={setSearch} placeholder='search' value={search} /> */}
            </View>
            {/* Horizontal Scroll */}
            <View style={tw`pb-16`}>
                <FlatList
                    data={nailData}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={tw`justify-between  pb-3 mx-1 `}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            // onPress={() => router.push(`/course-details/subscribe/[id]`)}
                            style={tw`bg-white  shadow  rounded-2xl w-[48%]   `}
                        >
                            <View style={tw`flex-col gap-1.5 `}>
                                <Image
                                    source={item.image}
                                    style={tw`w-full h-40 rounded-t-xl`}
                                    resizeMode="cover"
                                />
                                <View style={tw`flex-col gap-1 p-3`}>
                                    <Text
                                        style={tw`text-text14 font-sfProMedium text-black`}
                                        numberOfLines={2}
                                    >
                                        {item?.instructor}
                                    </Text>

                                    <Text
                                        style={tw` text-primaryColor font-sfProBold text-text16`}
                                    >
                                        ${item.price.toFixed(2)}
                                    </Text>

                                    <View style={tw`flex-row gap-2 items-center`}>
                                        <SvgXml xml={IconStar} />
                                        <Text style={tw`text-goldenBoarder text-xs`}>
                                            +50 pts
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            {/* {item.subscribed ? (
                            <View style={tw`mt-2`}>
                                <View style={tw`bg-[#D6C176] rounded-full py-1 px-3 self-start`}>
                                    <Text style={tw`text-white text-xs`}>Subscribed</Text>
                                </View>
                                <Text style={tw`text-xs text-gray-500 mt-1`}>
                                    {item.progress}% complete
                                </Text>
                            </View>
                        ) : (
                            
                        )} */}
                        </TouchableOpacity>
                    )}
                />
            </View>

        </PageWrapper>
    );
}
