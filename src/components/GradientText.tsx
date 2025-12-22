import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

interface GradientTextProps {
    title: string;
    textStyle?: TextStyle;      // Controls font size, font family, etc.
    containerStyle?: ViewStyle; // Optional container style
}

const GOLD_GRADIENT_COLORS = ['#C9A227', '#F2DA87', '#C9A227'];
const GOLD_GRADIENT_LOCATIONS = [0, 0.5, 1];

const GradientText: React.FC<GradientTextProps> = ({ title, textStyle, containerStyle }) => {
    const fontSize = (textStyle?.fontSize as number) || 16;

    return (
        <MaskedView
            style={[styles.container, containerStyle]}
            maskElement={
                <Text style={[styles.baseText, textStyle]} numberOfLines={3}>
                    {title}
                </Text>
            }
        >
            <LinearGradient
                colors={GOLD_GRADIENT_COLORS}
                locations={GOLD_GRADIENT_LOCATIONS}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={[
                    styles.fixedGradient,
                    {
                        height: fontSize * 1.3, //  gradient height auto matches text size
                    },
                ]}
            />
        </MaskedView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
    },
    baseText: {
        fontWeight: '700',
        color: 'black', // needed for mask
        includeFontPadding: false,
        textAlignVertical: 'center',
    },
    fixedGradient: {
        width: 300, // fixed width = consistent gold tone
    },
});

export default GradientText;
