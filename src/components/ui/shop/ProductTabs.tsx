import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export const categories = {
    Details: [
        "Professional-grade ceramic bits included",
        "Ergonomic handle design for better grip",
        "Low noise and vibration performance",
        "Adjustable speed control up to 30,000 RPM",
        "Compact and lightweight for easy portability",
    ],
    Specifications: [
        "Professional-grade ceramic bits included",
        "Ergonomic handle design for better grip",
        "Low noise and vibration performance",
        "Adjustable speed control up to 30,000 RPM",
        "Compact and lightweight for easy portability",
    ],
    ShippingInfo: [
        "Professional-grade ceramic bits included",
        "Ergonomic handle design for better grip",
        "Low noise and vibration performance",
        "Adjustable speed control up to 30,000 RPM",
        "Compact and lightweight for easy portability",
    ],
};

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState("Details");

    const renderItem = ({ item }: { item: string }) => (
        <View style={tw`mb-2`}>
            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>• {item}</Text>
        </View>
    );

    return (
        <View style={tw`mt-4 flex-col gap-3 border border-inactive rounded-xl py-4 px-4.2`}>
            {/* Tabs */}
            <View style={tw`flex-row gap-4 `}>
                {Object.keys(categories).map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={tw`pb-2`}
                    >
                        <Text
                            style={tw.style(
                                `text-text12 font-semibold`,
                                activeTab === tab ? "text-[#F0B000]" : "text-secondaryColor"
                            )}
                        >
                            {tab.replace(/([A-Z])/g, " $1").trim()}
                        </Text>
                        {activeTab === tab && (
                            <View style={tw`h-0.5 bg-[#F0B000] rounded-full `} />
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Tab Content */}
            <View style={tw``}>
                <FlatList
                    data={categories[activeTab as keyof typeof categories]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default ProductTabs;
