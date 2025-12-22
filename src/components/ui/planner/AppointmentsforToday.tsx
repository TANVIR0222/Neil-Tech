// import { IconActiveGlobal, IconAlarm, IconBoxGolden } from '@/assets/icons'
// import tw from '@/src/lib/tailwind'
// import React, { useState } from 'react'
// import { Text, TouchableOpacity, View } from 'react-native'
// import { SvgXml } from 'react-native-svg'
// import GradientText from '../../GradientText'

// const AppointmentsforToday = () => {
//     const [active, setActive] = useState<boolean>(false);
//     return (
//         <View>
//             <GradientText title='Appointments for Today' textStyle={{
//                 fontSize: 20
//             }} />

//             <View style={tw`flex-row items-center gap-4 justify-between`}>
//                 <TouchableOpacity onPress={() => setActive(!active)}>
//                     <SvgXml xml={active ? IconActiveGlobal : IconBoxGolden} />
//                 </TouchableOpacity>

//                 <View
//                     style={[
//                         tw`flex-row items-center gap-5 justify-between ${active ? 'bg-bgGray' : 'border border-inactive'} py-2 px-5 rounded-full`,
//                     ]}
//                 >
//                     <View style={tw`flex-col gap-1`}>
//                         <Text
//                             style={[
//                                 tw`text-text16 font-sfProRegular text-black`,
//                                 active && tw`line-through text-secondaryColor`
//                             ]}
//                         >
//                             Sabrina
//                         </Text>
//                         <Text
//                             style={[
//                                 tw`text-text12 font-sfProRegular text-secondaryColor`,
//                                 active && tw`line-through text-gray-400`
//                             ]}
//                         >
//                             Gel Manicure with Nail Art
//                         </Text>
//                     </View>

//                     <View
//                         style={tw`flex-row items-center justify-center gap-2 border border-inactive py-1 px-3 rounded-full`}
//                     >
//                         <View style={tw`flex-row items-center gap-2`}>
//                             <SvgXml xml={IconAlarm} height={15} width={15} />
//                         </View>
//                         <Text style={tw`${active ? 'text-secondaryColor' : 'text-black'} font-sfProRegular`}>08:00 AM</Text>
//                     </View>
//                 </View>
//             </View>


//         </View>
//     )
// }

// export default AppointmentsforToday

import { IconActiveGlobal, IconAlarm, IconBoxGolden, IconDeleteRed, IconInactiveAlarm } from '@/assets/icons'
import tw from '@/src/lib/tailwind'
import { _small_device, DELETE_THRESHOLD, SWIPE_DELETE_DISTANCE, SWIPE_RESET_DURATION } from '@/src/utils/utils'
import { router } from 'expo-router'
import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { SvgXml } from 'react-native-svg'
import GlobalGradientBox from '../../GlobalGradientBox'
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
                    <View style={tw`flex-row items-center ${_small_device ? 'gap-2' : 'gap-4'}  `}>
                        <TouchableOpacity onPress={() => setActive(!active)}>
                            <SvgXml xml={active ? IconActiveGlobal : IconBoxGolden} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => router.push('/planner-view/add-new-apointment')}
                            style={[
                                tw`flex-row items-center ${_small_device ? 'gap-2  px-3' : 'gap-5  px-4'} py-2 justify-between ${active ? 'bg-bgGray' : 'border border-inactive'}  rounded-full`,
                            ]}
                        >
                            <View style={tw`flex-col `}>
                                <Text
                                    style={[
                                        tw`text-text16 font-sfProRegular text-black`,
                                        active && tw`line-through text-secondaryColor`
                                    ]}
                                >
                                    Sabrina
                                </Text>
                                <Text
                                    style={[
                                        tw`text-text12 font-sfProRegular text-secondaryColor`,
                                        active && tw`line-through text-gray-400`
                                    ]}
                                >
                                    Gel Manicure with Nail
                                </Text>
                            </View>

                            {/* <View
                                style={tw`flex-row items-center justify-center gap-2 border border-inactive py-1 px-3 rounded-full`}
                            >
                                <View style={tw`flex-row items-center gap-2`}>
                                    <SvgXml xml={IconAlarm} height={15} width={15} />
                                </View>
                                <Text style={tw`${active ? 'text-secondaryColor' : 'text-black'} font-sfProRegular`}>08:00 AM</Text>
                            </View> */}
                            {active ? (
                                <View
                                    style={tw`flex-row items-center justify-center gap-2 border border-inactive border-opacity-50 py-1 px-2 rounded-full`}
                                >
                                    <SvgXml xml={IconInactiveAlarm} />
                                    <Text style={tw`text-black font-sfProRegular`}>
                                        08:00 AM
                                    </Text>
                                </View>
                            ) : (


                                <GlobalGradientBox radius={50}>
                                    <View
                                        style={tw`flex-row items-center justify-center gap-2  py-1 px-3 rounded-full`}
                                    >
                                        <SvgXml xml={IconAlarm} />
                                        <Text style={tw`text-inactive font-sfProRegular`}>
                                            08:00 AM
                                        </Text>
                                    </View>
                                </GlobalGradientBox>
                            )}
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};



export default function InviteEmployee() {
    const [active, setActive] = React.useState<boolean>(false);
    return (
        <View style={tw`flex-col gap-4`} >
            <View style={tw` items-start   `}>

                <GlobalText text="Appointments for Today" size="text20" weight="semibold" align="left" />

            </View>

            <View style={tw` flex-col gap-4`}>
                {
                    Array.from({ length: 2 }, (_, index) => (
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