// import { LinearGradient } from "expo-linear-gradient";
// import { StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
// import tw from "../lib/tailwind";

// interface MainButtonProps extends TouchableOpacityProps {
//     title: string;
//     buttonStyle?: StyleProp<ViewStyle>;
//     textStyle?: StyleProp<TextStyle>;
//     showSignUpLink?: boolean;
//     onSignUpPress?: () => void;
//     signUpText?: string;
//     signUpPrompt?: string;
//     original?: boolean;

// }

// const MainButton: React.FC<MainButtonProps> = ({
//     title,
//     onPress,
//     buttonStyle,
//     textStyle,
//     disabled = false,
//     showSignUpLink = false,
//     onSignUpPress,
//     signUpText,
//     signUpPrompt,
//     original,
//     ...props

// }) => {
//     return (
//         <View style={tw`flex-col  gap-4.2 pb-2`}>
//             <TouchableOpacity
//                 onPress={(event) => onPress?.(event)}
//             // activeOpacity={0.9}
//             >
//                 <LinearGradient
//                     colors={['#C9A227', '#F2DA87', '#C9A227']}
//                     // start={{ x: 1, y: 0.5 }}
//                     // end={{ x: 1, y: 0.5 }}
//                     style={tw`w-full h-12 rounded-full justify-center items-center`}
//                 >
//                     <Text style={[tw`text-white text-text16 text-center font-sfProMedium`, textStyle]}>
//                         {title}
//                     </Text>
//                 </LinearGradient>
//             </TouchableOpacity>

//             {showSignUpLink && (
//                 <View style={tw`flex-row items-center justify-center`}>
//                     <Text style={tw`text-secondaryColor font-sfProRegular text-text15`} >{signUpPrompt}</Text>
//                     <TouchableOpacity onPress={onSignUpPress}>
//                         <Text style={[tw`text-[#C9A227] text-text13 font-sfProSemibold`]}>
//                             {signUpText}
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </View>
//     );
// };



// export default MainButton;

import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle,
} from "react-native";
import tw from "../lib/tailwind";

interface MainButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    showSignUpLink?: boolean;
    onSignUpPress?: () => void;
    signUpText?: string;
    signUpPrompt?: string;
    gradientColors?: string[]; // optional gradient override
}

const MainButton: React.FC<MainButtonProps> = ({
    title,
    onPress,
    buttonStyle,
    textStyle,
    disabled = false,
    showSignUpLink = false,
    onSignUpPress,
    signUpText,
    signUpPrompt,
    gradientColors = ["#C9A227", "#F2DA87", "#C9A227"],
    ...props
}) => {
    return (
        <View style={tw`flex-col gap-4.2 pb-2`}>
            {/* <TouchableOpacity onPress={(event) => onPress?.(event)} disabled={disabled} {...props}>
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[tw`w-full h-12 rounded-full justify-center items-center`, buttonStyle]}
                >
                    <Text style={[tw`text-center`, textStyle]}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={(event) => onPress?.(event)} >
                <LinearGradient
                    colors={["#F2DA87", "#BA9215"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={tw`w-full py-2 rounded-full justify-center items-center border-2 border-[#C9A227]`}
                >
                    <Text style={[tw`text-center font-sfProMedium`, textStyle]}>{title}</Text>

                </LinearGradient>
            </TouchableOpacity>

            {showSignUpLink && (
                <View style={tw`flex-row items-center justify-center`}>
                    <Text style={tw`text-secondaryColor font-sfProRegular text-text15`}>
                        {signUpPrompt}
                    </Text>
                    <TouchableOpacity onPress={onSignUpPress}>
                        <Text style={[tw`text-[#C9A227] text-text13 font-sfProSemibold`]}>{signUpText}</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default MainButton;

