import { IconStar } from '@/assets/icons'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { productData } from '@/src/utils/dammy-data'
import { BlurView } from 'expo-blur'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React, { useRef } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

const { width } = Dimensions.get('window')
const tabs = ["All Products", "Gel Polish", "Nail Art", "Tools", "Accessories"]

export default function PromoCard() {
    const [activeTab, setActiveTab] = React.useState("All Products")
    const scrollRef = useRef<ScrollView>(null)

    const handleTabPress = (tab: string, index: number) => {
        setActiveTab(tab)
        // scroll to the pressed tab position
        const scrollX = index * 100 // tab width approx (adjust if needed)
        scrollRef.current?.scrollTo({ x: scrollX, animated: true })
    }

    const filteredData =
        activeTab === "All Products"
            ? productData
            : productData.filter((item) => item.category === activeTab)

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Shop" menu={true} search={true} />
            <View style={tw`flex-col flex-1 gap-4`}>

                {/* Promo Image */}
                <ImageBackground
                    source={require('@/assets/images/shop-image.png')}
                    resizeMode="cover"

                    style={tw`relative  w-[100%] h-40 rounded-2xl justify-center items-start`}>


                    {/* Centered Blur Overlay */}
                    <BlurView
                        intensity={0}
                        tint="dark"
                        style={tw`absolute inset-0 justify-center items-center rounded px-4`}
                    >
                        <View style={tw`bg-white/60 rounded-2xl py-3 px-4 w-[90%] items-start`}>
                            <Text style={tw`text-text20 font-sfProMedium text-black text-center`}>
                                Premium Gel Collection
                            </Text>

                            <Text style={tw`text-text12 font-sfProRegular text-black text-center mt-1`}>
                                Get 20% off on all gel polishes this week
                            </Text>

                            <LinearGradient
                                colors={["#c9a227", "#f2da87", "#c9a227"]}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={tw`w-[48%] mt-3 rounded-full`}
                            >
                                <TouchableOpacity style={tw`py-2 items-center`}>
                                    <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>
                                        Shop Now
                                    </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </BlurView>
                </ImageBackground>

                {/* Tabs */}
                <View style={tw``}>
                    <ScrollView
                        ref={scrollRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={tw``}
                    >
                        {tabs.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => handleTabPress(tab, index)}
                                style={tw`mr-5 pb-2 ${activeTab === tab ? "border-b-2 border-goldenBoarder" : ""}`}
                            >
                                <Text
                                    style={tw.style(
                                        "text-sm font-sfProSemibold",
                                        activeTab === tab ? "text-goldenBoarder" : "text-secondaryColor"
                                    )}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Product List */}
                <View style={tw`flex-1  pb-16`}>
                    <FlatList
                        data={filteredData}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={tw`justify-between`}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => router.push('/shop/product-view/[id]')}
                                style={tw`bg-white border shadow-md border-gray-200 rounded-xl mb-4 w-[48%] overflow-hidden`}
                            >
                                <Image
                                    source={item.image}
                                    style={tw`w-full h-38 rounded-t-xl`}
                                    resizeMode="cover"
                                />
                                <View style={tw`p-3`}>
                                    <Text style={tw`text-text14 font-medium text-primaryColor`}>
                                        {item.title}
                                    </Text>

                                    <Text style={tw`text-text20 font-sfProBold text-primaryColor mt-1`}>
                                        {item.price}
                                    </Text>

                                    <View style={tw`flex-row items-center gap-1 mt-1`}>
                                        <SvgXml xml={IconStar} width={14} height={14} />
                                        <Text style={tw`text-text12 font-sfProRegular text-goldenBoarder`}>
                                            {item.points}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </PageWrapper>
    )
}
