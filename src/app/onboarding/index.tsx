import { IconsRightArrowBlack } from '@/assets/icons';
import { AppColors } from '@/src/constants/app-color';
import tw from '@/src/lib/tailwind';
import { _small_device, dynamicHeight, dynamicWidth, scaleFont } from '@/src/utils/utils';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    Easing,
    FlatList,
    ImageBackground,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface Slide {
    id: string;
    title: string;
    subtitle?: string;
    backgroundImage: ImageSourcePropType;
    image: ImageSourcePropType;
    buttonTitle: string;
    buttonIcons?: string;
}

interface SlideItemProps {
    item: Slide;
    onNextPress: () => void;
    slides: Slide[];
    scrollX: Animated.Value;
    isActive: boolean;
}

const slides: Slide[] = [
    {
        id: '1',
        title: 'Your business, all in one place',
        subtitle: 'Log appointments, track income, manage clients, and reorder stock effortlessly',
        backgroundImage: require('@/assets/images/splace-screen.png'),
        image: require('@/assets/images/splace-screen-1.png'),
        buttonTitle: 'Get Started',
        buttonIcons: IconsRightArrowBlack,
    },
    {
        id: '2',
        title: 'Stay ahead with pro courses',
        subtitle: 'Access tutorials, track progress, and earn completion badges anytime, anywhere',
        backgroundImage: require('@/assets/images/splace-screen.png'),
        image: require('@/assets/images/splace-screen-2.png'),
        buttonTitle: 'Get Started',
        buttonIcons: IconsRightArrowBlack,
    },
    {
        id: '3',
        title: 'Tools to grow your craft',
        subtitle: 'From your planner to your mood board — keep your creative business organized',
        backgroundImage: require('@/assets/images/splace-screen.png'),
        image: require('@/assets/images/splace-screen-3.png'),
        buttonTitle: 'Get Started',
        buttonIcons: IconsRightArrowBlack,
    },
];

// 🔹 Single Slide Component
const SlideItem = ({ item, onNextPress, slides, scrollX, isActive }: SlideItemProps & { isActive: boolean }) => {
    const animValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        animValue.stopAnimation();
        Animated.timing(animValue, {
            toValue: isActive ? 1 : 0,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    }, [isActive, animValue]);

    const scale = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1], // 
    });

    const rotate = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '0deg'],
    });

    return (
        <View style={[tw`relative`, styles.slide]}>
            <ImageBackground
                source={item.backgroundImage}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                <View style={tw`flex-col absolute top-20 items-center justify-between px-5`}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={tw`text-base text-[#3A3734] text-center `}>
                        {item.subtitle}
                    </Text>
                </View>

                <Animated.Image
                    source={item.image}
                    style={{
                        width: dynamicWidth(400),
                        height: dynamicHeight(500),
                        resizeMode: 'contain',
                        transform: [{ scale }, { rotate }],
                        marginBottom: _small_device ? -100 : 15,
                    }}
                />
            </ImageBackground>

            {/* Dots */}
            <View style={styles.dotsContainer}>
                {slides.map((_, i) => {
                    const opacity = scrollX.interpolate({
                        inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });
                    return (
                        <Animated.View key={i.toString()} style={[styles.dot, { opacity }]} />
                    );
                })}
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={onNextPress}
                    activeOpacity={0.9}
                    style={styles.buttonContainer}
                >
                    <LinearGradient
                        colors={['#C9A227', '#F2DA87', '#C9A227']}
                        start={{ x: -0.5, y: 0.5 }}
                        // end={{ x: 1, y: 0.5 }}
                        style={tw`w-80 h-12 rounded-md justify-center items-center`}
                    >
                        <Text style={styles.buttonText}>{item.buttonTitle}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};


// 🔹 Parent Onboarding Component
export default function OnboardingScreens() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef<FlatList<Slide>>(null);

    const handleNext = useCallback(() => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            router.push('/auth');
        }
    }, [currentIndex]);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                ref={flatListRef}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewConfig}
                renderItem={({ item, index }) => (
                    <SlideItem
                        item={item}
                        onNextPress={handleNext}
                        slides={slides}
                        scrollX={scrollX}
                        isActive={index === currentIndex} //  triggers animation when slide is visible
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    slide: { width, height, justifyContent: 'center', alignItems: 'center' },
    imageBackground: { flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    title: {
        color: '#3A3734',
        fontSize: scaleFont(34),
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    buttonContainer: { justifyContent: 'center', alignItems: 'center' },
    buttonText: { color: '#333', fontWeight: '600', fontSize: scaleFont(16) },
    dotsContainer: {
        bottom: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    dot: {
        width: 17,
        height: 8,
        borderRadius: 2,
        backgroundColor: AppColors.DARK_GOLD,
        marginHorizontal: 4,
    },
});
