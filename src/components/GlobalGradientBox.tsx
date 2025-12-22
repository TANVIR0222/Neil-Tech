// import { LinearGradient } from "expo-linear-gradient";
// import React, { ReactNode } from "react";
// import { StyleProp, View, ViewStyle } from "react-native";
// import tw from "twrnc";

// interface Props {
//     children: ReactNode;
//     colors?: string[];
//     radius?: number;
//     padding?: number;
//     style?: StyleProp<ViewStyle>;
//     innerStyle?: StyleProp<ViewStyle>;
// }

// const GlobalGradientBox = ({
//     children,
//     colors = ["#F2DA87", "#91741A", "#F2DA87"],
//     radius = 16,
//     padding = 2,
//     style,
//     innerStyle,
// }: Props) => {
//     return (
//         <LinearGradient
//             colors={colors}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={[
//                 tw`m-1`,
//                 {
//                     borderTopRightRadius: radius,
//                     borderBottomLeftRadius: radius,
//                     borderBottomRightRadius: radius,
//                     borderTopLeftRadius: 0, // 3-side rounded
//                     padding,
//                 },
//                 style,
//             ]}
//         >
//             {/* Inner white box */}
//             <View
//                 style={[
//                     {
//                         backgroundColor: "#fff",
//                         borderTopRightRadius: radius,
//                         borderBottomLeftRadius: radius,
//                         borderBottomRightRadius: radius,
//                         borderTopLeftRadius: 0,
//                         elevation: 3,
//                         shadowColor: "#000",
//                         shadowOffset: { width: 0, height: 2 },
//                         shadowOpacity: 0.1,
//                         shadowRadius: 2,
//                         paddingHorizontal: 16,
//                         paddingVertical: 12,
//                     },
//                     innerStyle,
//                 ]}
//             >
//                 {children}
//             </View>
//         </LinearGradient>
//     );
// };

// export default GlobalGradientBox;

import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import tw from "twrnc";

interface Props {
    children: ReactNode;
    colors?: string[];
    radius?: number;
    padding?: number;
    style?: StyleProp<ViewStyle>;
    innerStyle?: StyleProp<ViewStyle>;
}

const GlobalGradientBox = ({
    children,
    colors = ["#F2DA87", "#91741A", "#F2DA87"],
    radius = 16,
    padding = 1,
    style,
    innerStyle,
}: Props) => {
    return (
        <LinearGradient
            colors={colors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[
                tw`m-1`,
                {
                    borderTopRightRadius: radius,
                    borderBottomLeftRadius: radius,
                    borderBottomRightRadius: radius,
                    borderTopLeftRadius: radius, // 3-side rounded
                    padding,
                },
                style,
            ]}
        >
            {/* Inner white box */}
            <View
                style={[
                    {
                        backgroundColor: "#fff",
                        borderTopRightRadius: radius,
                        borderBottomLeftRadius: radius,
                        borderBottomRightRadius: radius,
                        borderTopLeftRadius: radius,
                    },
                    innerStyle,
                ]}
            >
                {children}
            </View>
        </LinearGradient>
    );
};

export default GlobalGradientBox;
