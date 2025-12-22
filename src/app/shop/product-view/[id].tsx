import { IconDownArrowGOlden, IconMinus, IconPlus, IconsRightArrowBlack, IconStarGolden } from '@/assets/icons';
import GlobalText from '@/src/components/GlobalText';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import ProductTabs from '@/src/components/ui/shop/ProductTabs';
import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const { width } = Dimensions.get('window');

// Mock product data (swap with API later)
const PRODUCT = {
    id: '1',
    title: 'Nail Polish',
    subtitle: 'Matte Finish',
    price: 42.99,
    rating: 4.6,
    reviews: 124,
    image: require('@/assets/images/nail-image.png'),
    description:
        'This professional gel-polished nail polish is built for perfection — longwear, smooth finish, and vibrant color. Apply two thin coats for best coverage. Made without harsh chemicals. Safe for natural nails.',
    specifications: [
        { key: 'Finish', value: 'Matte' },
        { key: 'Volume', value: '10 ml' },
        { key: 'Cruelty-Free', value: 'Yes' },
        { key: 'Made In', value: 'USA' },
    ],
    stock: 12,
};

const RELATED = new Array(6).fill(0).map((_, i) => ({
    id: String(i + 1),
    title: `Shade ${i + 1}`,
    price: 42.99,
    image: require('@/assets/images/nail-image.png'),
}));

export default function ProductDetailsScreen() {
    const [qty, setQty] = useState(1);
    const [expanded, setExpanded] = useState(false);

    const total = (PRODUCT.price * qty).toFixed(2);

    function inc() {
        if (qty < PRODUCT.stock) setQty(qty + 1);
    }
    function dec() {
        if (qty > 1) setQty(qty - 1);
    }

    function renderSpec() {
        return (
            <View style={tw`bg-white rounded-lg p-4 shadow-md mt-3`}>
                {PRODUCT.specifications.map((s) => (
                    <View key={s.key} style={tw`flex-row justify-between py-2 border-b border-gray-100`}>
                        <Text style={tw`text-sm text-gray-600`}>{s.key}</Text>
                        <Text style={tw`text-sm font-semibold`}>{s.value}</Text>
                    </View>
                ))}
            </View>
        );
    }

    const { height } = Dimensions.get('screen');

    return (
        <ScrollView style={tw`flex-1 `}>
            {/* Hero */}
            <ImageBackground
                source={require('@/assets/images/shop-view-image.png')}
                resizeMode="cover"
                style={[tw`relative`, { width, height: height * 0.45 }]}
            >
                {/* Back Button */}
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={tw`absolute top-12 left-5 z-30  `}
                >
                    <SvgXml xml={IconsRightArrowBlack} width={40} height={40} />
                </TouchableOpacity>


                <View
                    style={tw`absolute bottom-4  left-4  `}
                >
                    <Text style={tw`text-text24 font-sfProMedium text-primaryColor`} >Nail Polish</Text>
                    <Text style={tw`text-text12 font-sfProRegular text-primaryColor`} >Nail Art</Text>
                </View>
            </ImageBackground>
            <PageWrapper>
                {/* Info Card */}
                <View style={tw` mt-4`}>
                    <View style={tw` `}>
                        <View style={tw`flex-row justify-between items-start`}>
                            <View style={tw`flex-1 pr-3`}>
                                <View style={tw`flex-col gap-1 mt-3`}>
                                    <Text style={tw`text-2xl font-bold text-black mr-3`}>${PRODUCT.price}</Text>
                                    <View style={tw` flex-row items-center`}>
                                        <SvgXml xml={IconStarGolden} />
                                        <Text style={tw`text-text12 font-sfProRegular text-[#F0B000]`}>Earn  +100 Reward Points</Text>
                                    </View>
                                </View>
                            </View>


                        </View>

                        {/* Description */}
                        <View style={tw`mt-4 border border-inactive rounded-xl py-4 px-4.2`}>
                            <View style={tw` flex-col gap-4`}>
                                <Text style={tw`text-text16 font-sfProMedium text-[#F0B000]`}>Description</Text>

                                <View>
                                    <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>{expanded ? PRODUCT.description : `${PRODUCT.description.slice(0, 110)}...`}</Text>

                                    <View style={tw` items-end`}>
                                        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={tw`mt-2`}>
                                            <View style={tw`flex-row items-center justify-center  gap-2`}>
                                                <Text style={tw`text-[#F0B000] font-sfProRegular `}>{expanded ? 'Show Less' : 'Read More'}</Text>
                                                <SvgXml xml={!expanded ? IconDownArrowGOlden : null} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Stock & Quantity */}
                        <View style={tw`mt-4 flex-col gap-3 border border-inactive rounded-xl py-4 px-4.2`}>
                            <View style={tw`flex-row items-center justify-between`}>
                                <Text style={tw`text-text16 font-sfProMedium text-[#F0B000]`}>Stock & Quantity</Text>
                                <Text style={tw`text-text12 font-sfProSemibold`}>{PRODUCT.stock} in stock</Text>
                            </View>

                            <View style={tw`flex-row items-center justify-between`}>
                                <View style={tw`flex-row items-center`}>
                                    <TouchableOpacity onPress={dec} style={tw` py-2 `}>
                                        <SvgXml xml={IconMinus} />
                                    </TouchableOpacity>
                                    <View style={tw`px-2`}>
                                        <Text style={tw`text-text25 font-sfProBold text-primaryColor`}>{qty}</Text>
                                    </View>
                                    <TouchableOpacity onPress={inc} style={tw` py-2 `}>
                                        <SvgXml xml={IconPlus} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={tw`text-text16 font-sfProMedium text-[#F0B000]`}>Total: $49.99</Text>

                            </View>
                        </View>

                        {/* Tabs: Details / Specs / Shipping */}
                        <View style={tw``}>
                            <ProductTabs />
                        </View>

                        {/* Rewards banner */}
                        <View style={tw`mt-4`}>
                            <LinearGradient
                                colors={["#C9A227", "#F2DA87", "#C9A227"]}
                                locations={[-0.3337, 0.5097, 1.3532]}
                                start={{ x: 0.49, y: 1 }}
                                end={{ x: 0.51, y: 0 }}
                                style={styles.gradient}
                            >
                                <View style={tw`mt-4 flex-col gap-5  rounded-lg py-4 px-4  justify-between`}>
                                    <View style={tw` flex-col gap-2 `}>
                                        <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>Earn Reward Points</Text>
                                        <Text style={tw`text-text12 font-sfProRegular text-black`}>Buy this product and earn +100 points toward your next reward! Next reward unlocks at 2,200 pts 🎁</Text>
                                    </View>
                                    <View style={tw` flex-row justify-end`}>
                                        <TouchableOpacity style={tw`w-40 h-9 items-center justify-center rounded-full border-2 border-[#F2DA87]`}>
                                            <Text style={tw`text-text12 font-sfProSemibold text-center text-black`}>
                                                View My Rewards
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </LinearGradient>
                        </View>


                    </View>

                    {/* Related */}
                    <View style={tw`mt-4`}>
                        {/* <Text style={tw` text-[#F0B000] font-semibold`}></Text> */}
                        <View style={tw`flex-row items-start`}>
                            <GlobalText text="You May Also Like" size="text20" weight="medium" align="left" />
                        </View>

                        <FlatList
                            horizontal
                            data={RELATED}
                            keyExtractor={(i) => i.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={tw` flex-row gap-3 mr-3`}>
                                    <View style={tw`  `}>
                                        <Image source={item.image} style={{ width: 120, height: 120 }} resizeMode="contain" />
                                        <Text style={tw`text-text10 text-primaryColor font-sfProMedium`}>{item.title}</Text>
                                        <Text style={tw`text-text13 font-sfProBold text-primaryColor`}>${item.price}</Text>
                                        <View style={tw`flex-row items-center gap-0.5`}>
                                            <SvgXml xml={IconStarGolden} />
                                            <Text style={tw`text-text12  text-[#F0B000] font-semibold`}>+50 pts</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>

                </View>

                <View style={tw`my-6`}>
                    <MainButton title="Buy Now" textStyle={tw` text-white font-sfProSemibold`} onPress={() => router.push('/shop/product-view/order-summary-modal')} />
                </View>

            </PageWrapper>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        // CSS: border-radius: 20px;
        borderRadius: 20,
        // CSS: box-shadow: 0 4px 4px 0 rgba(255, 255, 255, 0.25);

        // 💡 iOS Shadow Styles (White shadow with 25% opacity)
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,

        // 💡 Android Shadow Style (Elevation)
        elevation: 5, // Approximate shadow depth for Android

        // Example fixed size for the container (adjust as needed)
        width: 200,
        height: 60,
    },
    gradient: {
        // The gradient fill must take up the full space of the container
        flex: 1,
        borderRadius: 20, // Apply border-radius to the gradient as well
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black', // Example text color
        fontWeight: 'bold',
    }
});

