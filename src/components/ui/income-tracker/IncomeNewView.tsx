// import tw from '@/src/lib/tailwind'
// import React from 'react'
// import { Text, View } from 'react-native'

// const Income = () => {
//     return (
//         <View>
//             <View style={tw`flex-row justify-between items-center`}>
//                 <Text style={tw` text-text20 font-sfProMedium text-goldenBoarder`} >Income</Text>
//                 <Text style={tw` text-text14 font-sfProRegular text-goldenBoarder`} >See All</Text>
//             </View>
//         </View>
//     )
// }

// export default Income


import { IconDeleteRed } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { DELETE_THRESHOLD, SWIPE_DELETE_DISTANCE, SWIPE_RESET_DURATION } from '@/src/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { SvgXml } from 'react-native-svg'
import GlobalText from '../../GlobalText'

type ServiceItem = {
    id: string;
    name: string;
    phonenumber: string;
};

type SwipeableItemProps = {
    item: ServiceItem;
    onDelete: (id: string) => void;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const SwipeableItem: React.FC<SwipeableItemProps> = ({ item, onDelete, active, setActive }) => {
    const translateX = useSharedValue(0);

    const resetSwipe = () => {
        translateX.value = withTiming(0, { duration: SWIPE_RESET_DURATION });
    };

    const handleDelete = () => {
        Alert.alert('Delete Service', `Delete ${item.name}?`, [
            { text: 'Cancel', style: 'cancel', onPress: resetSwipe },
            { text: 'Delete', style: 'destructive', onPress: () => runOnJS(onDelete)(item.id) },
        ]);
    };

    const pan = Gesture.Pan()
        .onUpdate((event) => {
            translateX.value = Math.max(event.translationX, SWIPE_DELETE_DISTANCE);
            if (translateX.value > 0) translateX.value = 0;
        })
        .onEnd(() => {
            if (translateX.value < DELETE_THRESHOLD) {
                translateX.value = withTiming(SWIPE_DELETE_DISTANCE, { duration: SWIPE_RESET_DURATION });
            } else {
                runOnJS(resetSwipe)();
            }
        });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const deleteButtonStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, [0, DELETE_THRESHOLD], [0, 1], 'clamp'),
    }));

    return (
        <View style={tw` relative`}>
            {/* Delete Button */}
            <Animated.View
                style={[
                    tw`absolute right-0 top-0 bottom-0 w-10 flex-row items-center justify-center rounded-xl`,
                    deleteButtonStyle,
                ]}
            >
                <TouchableOpacity onPress={handleDelete}>
                    <SvgXml xml={IconDeleteRed} />
                </TouchableOpacity>
            </Animated.View>

            {/* Swipeable Foreground */}
            <GestureDetector gesture={pan}>
                <Animated.View style={animatedStyle}>
                    <View style={tw`flex-row items-center gap-4 `}>


                        <TouchableOpacity
                            onPress={() => router.push("/income-tracker/sabrina-carpenter")}
                            style={[
                                tw`flex-row items-center gap-5 justify-between border border-inactive flex-1  py-2 px-5 rounded-full`,
                            ]}
                        >
                            <View style={tw`flex-col gap-1`}>
                                <Text
                                    style={tw`text-text16 font-sfProRegular text-goldenBoarder`}
                                >
                                    Sabrina
                                </Text>
                                <Text
                                    style={tw`text-text12 font-sfProRegular text-secondaryColor`}
                                >
                                    Gel Manicure with Nail Art
                                </Text>
                            </View>
                            <View style={tw`flex-col items-end gap-1`}>
                                <Text
                                    style={tw`text-text16 font-sfProRegular text-green`}
                                >
                                    $65
                                </Text>
                                <Text
                                    style={tw`text-text12 font-sfProRegular text-secondaryColor`}

                                >
                                    Fri, 05 April 2025
                                </Text>
                            </View>


                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};



export default function IncomeNewView({ income }: { income: boolean }) {
    const [active, setActive] = React.useState<boolean>(false);
    return (
        <View style={tw` flex-col gap-5 `} >
            {income && <View style={tw`flex-row justify-between items-center`}>
                {/* <Text style={tw` text-text20 font-sfProMedium text-goldenBoarder`} ></Text> */}
                <GlobalText text="Income" size="text20" weight="medium" align="left" />

                <TouchableOpacity onPress={() => router.push('/income-tracker/all-Income')}>
                    <Text style={tw` text-text14 font-sfProRegular text-goldenBoarder`} >See All</Text>
                </TouchableOpacity>
            </View>}

            <View style={tw` flex-col gap-4`}>
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <SwipeableItem
                            key={index}
                            item={{
                                id: index.toString(),
                                name: ' Sabrina',
                                phonenumber: 'Gel Manicure with Nail',
                            }}
                            onDelete={() => { }}
                            active={active}
                            setActive={setActive}
                        />
                    ))
                }

            </View>
        </View>
    )
}