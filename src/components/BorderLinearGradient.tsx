import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View } from 'react-native'
import { BorderLinearGradientProps } from '../type/type'



const BorderLinearGradient: React.FC<BorderLinearGradientProps> = ({ children }) => {
    return (
        <LinearGradient
            colors={["#F2DA87", "#91741A", "#F2DA87"]} // gradient border colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                flex: 1,
                marginHorizontal: 5,
                marginVertical: 2,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                borderTopLeftRadius: 0, // ✅ 3 side rounded
                padding: 2, // ✅ thickness of gradient border
            }}
        >
            <View style={{ flex: 1 }} >
                {children}
            </View>

        </LinearGradient>
    )
}

export default BorderLinearGradient