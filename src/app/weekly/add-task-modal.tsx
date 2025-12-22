import { IconDateAndTime } from '@/assets/icons';
import GlobalGradientBox from '@/src/components/GlobalGradientBox';
import GlobalText from '@/src/components/GlobalText';
import MainButton from '@/src/components/MainButton';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, Platform, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const CustomBlurModal = () => {
    const router = useRouter();
    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);

    const handleDateChange = (event: any, selectedDate?: Date) => {
        if (Platform.OS === 'android') setDatePickerVisible(false); // hide picker on android after selection
        if (selectedDate) setDate(selectedDate);
    };

    const handleTimeChange = (event: any, selectedTime?: Date) => {
        if (Platform.OS === 'android') setTimePickerVisible(false); // hide picker on android after selection
        if (selectedTime) setTime(selectedTime);
    };

    return (

        <Pressable style={tw`flex-1 items-center justify-center`} onPress={() => router.back()}>
            <BlurView intensity={100} tint="dark" style={tw`flex-1 w-full items-center justify-center`}>

                <GlobalGradientBox radius={10}>
                    <Pressable
                        style={tw`w-[95%] bg-white rounded-2xl p-6`}
                        onPress={(e) => Keyboard.dismiss()} // prevent closing on inner press
                    >
                        <View style={tw`flex-col  gap-3`}>

                            <View style={tw`flex-row items-start`}>
                                <GlobalText text="Add New Task" size="text20" weight="semibold" align="left" />
                            </View>


                            <View style={tw`flex-col gap-3`}>
                                {/* Task Name */}
                                <View style={tw`flex-col gap-1`}>
                                    <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>Task Name</Text>
                                    <TextInput
                                        placeholder="Restock gel polishes"
                                        value={text}
                                        onChangeText={setText}
                                        style={tw`border  border-bgGray rounded-lg px-2 py-2 h-30`}
                                        textAlignVertical="top"
                                        textAlign="left"
                                        placeholderTextColor="#989898"
                                        // keyboardAppearance='light'
                                        multiline
                                    />
                                </View>

                                {/* Date */}
                                <View style={tw`flex-col gap-1`}>
                                    <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>Date</Text>
                                    <TouchableOpacity
                                        onPress={() => setDatePickerVisible(true)}
                                        style={tw`border border-bgGray rounded-lg px-3 py-3`}
                                    >
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={IconDateAndTime} />
                                            <Text>{date.toDateString()}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {isDatePickerVisible && (
                                        <DateTimePicker
                                            value={date}
                                            mode="date"
                                            display="default"
                                            onChange={handleDateChange}
                                        />
                                    )}
                                </View>

                                {/* Time */}
                                <View style={tw`flex-col gap-1`}>
                                    <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>Time</Text>
                                    <TouchableOpacity
                                        onPress={() => setTimePickerVisible(true)}
                                        style={tw`border border-bgGray rounded-lg px-3 py-3`}
                                    >
                                        <View style={tw`flex-row items-center gap-2`}>
                                            <SvgXml xml={IconDateAndTime} />

                                            <Text>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    {isTimePickerVisible && (
                                        <DateTimePicker
                                            value={time}
                                            mode="time"
                                            display="default"
                                            onChange={handleTimeChange}
                                        />
                                    )}
                                </View>
                            </View>
                        </View>

                        {/* Submit Button */}
                        <View style={tw`flex-row justify-between mt-4`}>
                            {/* Cancel Button */}
                            <TouchableOpacity
                                style={tw`w-[48%] border h-11 border-inactive rounded-full px-3.5 py-1.3 `}
                                onPress={() => router.back()}
                            >
                                <Text style={tw`text-center text-text18 font-sfProMedium text-black`}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                            {/* Add Task / View All Button */}
                            <View style={tw`w-[48%]`}>
                                <MainButton
                                    title="View All"
                                    onPress={() => router.back()}
                                    textStyle={tw`text-text16 font-sfProMedium  py-0.2 text-white text-center`}
                                />
                            </View>
                        </View>


                    </Pressable>
                </GlobalGradientBox>


            </BlurView>
        </Pressable>
    );
};

export default CustomBlurModal;
