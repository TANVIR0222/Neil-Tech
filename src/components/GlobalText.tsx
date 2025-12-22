import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import tw from "../lib/tailwind";

interface Props {
    text: string;
    size?: keyof typeof fontSizeMap; // dynamic Tailwind font sizes
    weight?: keyof typeof fontFamilyMap; // dynamic Tailwind font weights
    align?: "left" | "center" | "right";
    colors?: string[]; // optional gradient override
}

const fontFamilyMap = {
    light: "font-sfProLight",
    regular: "font-sfProRegular",
    medium: "font-sfProMedium",
    semibold: "font-sfProSemibold",
    bold: "font-sfProBold",
    black: "font-sfProBlack",
};

const fontSizeMap = {
    authMainheading: "text-authMainheading",
    text25: "text-text25",
    text24: "text-text24",
    text20: "text-text20",
    text17: "text-text17",
    text16: "text-text16",
    text15: "text-text15",
    text14: "text-text14",
    text13: "text-text13",
    text12: "text-text12",
    text10: "text-text10",
};

const GlobalText = ({
    text,
    size = "text20",
    weight = "medium",
    align,
}: Props) => {
    const fontSizeClass = fontSizeMap[size] || "text-text20";
    const fontWeightClass = fontFamilyMap[weight] || "font-sfProMedium";

    return (
        <MaskedView
            maskElement={
                <View style={tw`justify-center items-center`}>
                    <Text style={tw`${fontSizeClass} ${fontWeightClass} text-${align}`}>
                        {text}
                    </Text>
                </View>
            }
        >
            <LinearGradient
                colors={["#C9A227", "#F2DA87", "#C9A227"]}
                locations={[-0.3337, 0.5097, 1.3532]}
                start={{ x: 0.49, y: 4 }}
                end={{ x: 0.51, y: 0 }}
            >
                <Text
                    style={tw`${fontSizeClass} ${fontWeightClass} text-${align} opacity-0`}
                >
                    {text}
                </Text>
            </LinearGradient>
        </MaskedView>
    );
};

export default GlobalText;
