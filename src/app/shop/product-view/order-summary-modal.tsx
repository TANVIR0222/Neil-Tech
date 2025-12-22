
import { IconTopBar } from '@/assets/icons';
import MainButton from '@/src/components/MainButton';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const OrderSummaryScreen = () => {
    // Data from the image
    const subtotal = 49.99;
    const shipping = 4.99;
    const tax = 3.99;
    const total = 58.48; // Calculated as: 49.99 + 4.99 + 3.99

    // Helper component for the summary lines (e.g., Subtotal, Shipping, Tax)
    const SummaryLine = ({ label, value }: any) => (
        <View style={tw`flex-row justify-between py-3`}>
            <Text style={tw` text-text14  font-sfProRegular text-secondaryColor `}>{label}</Text>
            <Text style={tw`text-black  text-text13 font-sfProSemibold`}>${value.toFixed(2)}</Text>
        </View>
    );

    return (
        <View style={tw`p-5  bg-white `}>
            <View style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex-row  flex-1  bg-white justify-center items-center rounded-lg`}>
                    <SvgXml xml={IconTopBar} />
                </View>
            </View>
            {/* Header */}
            <Text style={tw`text-center text-text17 text-[#F0B000] font-sfProMedium mt-3`}>
                Order Summary
            </Text>

            {/* Product Details */}
            <View style={tw`flex-row items-center py-6`}>
                {/* Product Image Placeholder */}
                <View style={tw`rounded-full bg-gray-200 mr-4 overflow-hidden`}>
                    <Image source={require("@/assets/images/nail-image.png")} style={tw`w-16 h-16`} />
                </View>

                {/* Product Text */}
                <View style={tw`flex-col`}>
                    <Text style={tw` text-black text-text20 `}>
                        ProNail Drill Master
                    </Text>
                    <Text style={tw` text-text12 text-secondaryColor`}>
                        Professional Nail Drill Machine
                    </Text>
                </View>
            </View>

            {/* Summary Lines */}
            <SummaryLine label="Subtotal" value={subtotal} />
            <SummaryLine label="Shipping" value={shipping} />
            <SummaryLine label="Tax" value={tax} />

            {/* Divider Line */}
            <View style={tw`border-b border-inactive my-3`} />

            {/* Total Line */}
            <View style={tw`flex-row justify-between pt-1 pb-5`}>
                <Text style={tw`text-[#F0B000] text-text17 font-sfProMedium`}>Total</Text>
                <Text style={tw`text-black text-text16 font-sfProBold`}>${total.toFixed(2)}</Text>
            </View>

            {/* Next Button (Simulating a gradient with a solid color for simplicity) */}

            <MainButton title="Next" onPress={() => router.push('/shop')} />
        </View>
    );
};

export default OrderSummaryScreen;