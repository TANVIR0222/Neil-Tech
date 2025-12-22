import tw from "@/src/lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View } from "react-native";

interface GradientProgressBarProps {
    progress: number;
    height?: number;
    borderRadius?: number;
    colors?: string[];
}

const GradientProgressBar: React.FC<GradientProgressBarProps> = ({
    progress,
    height = 10,
    borderRadius = 10,
    colors = ["#F2DA87", "#91741A", "#F2DA87"],
}) => {
    return (
        <View
            style={[
                tw`w-full bg-[#E9E9E9]`,
                { height, borderRadius, overflow: "hidden" },
            ]}
        >
            <LinearGradient
                colors={["#F2DA87", "#BA9215"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: `${progress * 100}%`, height: "100%" }}
            />
        </View>
    );
};

export default GradientProgressBar;
