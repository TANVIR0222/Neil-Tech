import tw from "@/src/lib/tailwind";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { View } from "react-native";

interface GradientBorderProps {
    children: ReactNode;
    colors?: string[];
    borderRadius?: number;
    borderWidth?: number;
    style?: object;
}

const GradientBorder: React.FC<GradientBorderProps> = ({
    children,
    colors = ["#F2DA8733", "#F2DA87", "#91741A"], // left halka, right intense
    borderRadius = 12,
    borderWidth = 2,
    style,
}) => {
    return (
        <LinearGradient
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0, 0.3, 1]} // left halka, right beshi intense
            style={[
                tw`items-center justify-center`,
                {
                    borderRadius,
                    padding: borderWidth, // inner space to show border
                },
                style,
            ]}
        >
            <View
                style={[
                    tw`bg-white w-full`,
                    {
                        borderRadius: borderRadius - borderWidth,
                    },
                ]}
            >
                {children}
            </View>
        </LinearGradient>
    );
};

export default GradientBorder;
