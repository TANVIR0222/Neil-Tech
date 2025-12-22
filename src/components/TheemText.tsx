import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { GradientTextProps } from '../type/type';



const TheemText: React.FC<GradientTextProps> = ({ title, textStyle, textWeight }) => {
    const [textWidth, setTextWidth] = useState(0);
    const fontSize = textStyle?.fontSize || 16;
    // console.log(textWidth);


    return (
        <MaskedView
            maskElement={
                <Text
                    onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
                    style={textStyle}
                >
                    {title}
                </Text>
            }
        >
            <LinearGradient
                colors={['#F2DA87', '#91741A', '#F2DA87']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                // start={{ x: 0, y: 0 }}
                // end={{ x: 1, y: 0 }}
                style={{ width: textWeight, height: fontSize * 1.2 }}
            />
        </MaskedView>
    );
};

export default TheemText;