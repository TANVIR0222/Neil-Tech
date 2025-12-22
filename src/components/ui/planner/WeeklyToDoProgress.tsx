import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const WeeklyProgress = () => {
    // Get current date
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 6 = Saturday
    const currentDate = today.getDate();

    // Generate the last 7 days dynamically
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const weekDates = Array.from({ length: 7 }, (_, i) => ({
        label: daysOfWeek[i],
        date: currentDate - currentDay + i, // adjust dates dynamically
        index: i,
    }));

    return (
        <View style={tw`flex-col items-center justify-center border-b border-inactive`}>
            <View style={tw`flex-col items-center gap-2 justify-center pb-4`}>
                {/* Day Labels */}
                <View style={tw`flex-row justify-between`}>
                    {weekDates.map((day, index) => (
                        <Text
                            key={index}
                            style={tw`text-secondaryColor text-center flex-1 font-sfProRegular text-text16 `}
                        >
                            {day.label}
                        </Text>
                    ))}
                </View>

                {/* Circles Row */}
                <View style={tw`flex-row justify-between `}>
                    {weekDates.map((day, index) => {
                        const isPast = index < currentDay;
                        const isToday = index === currentDay;

                        // Dynamic colors
                        let circleContent;

                        if (isToday) {
                            // Gold gradient for today
                            circleContent = (
                                <LinearGradient
                                    colors={['#F2DA87', '#91741A', '#F2DA87']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={tw`w-10 h-10 rounded-full items-center justify-center`}
                                >
                                    <Text style={tw`text-white font-sfProSemibold`}>
                                        {day.date}
                                    </Text>
                                </LinearGradient>
                            );
                        } else if (isPast) {
                            // Green circle for completed days
                            circleContent = (
                                <View
                                    style={tw`w-10 h-10 rounded-full bg-[#32B768] items-center justify-center`}
                                >
                                    <Text style={tw`text-white font-sfProSemibold`}>
                                        {day.date}
                                    </Text>
                                </View>
                            );
                        } else {
                            // Gray circle for upcoming days
                            circleContent = (
                                <View
                                    style={tw`w-10 h-10 rounded-full bg-[#C4C4C4] items-center justify-center`}
                                >
                                    <Text style={tw`text-white font-sfProSemibold`}>
                                        {day.date}
                                    </Text>
                                </View>
                            );
                        }

                        return (
                            <View key={index} style={tw`flex-1 items-center`}>
                                {circleContent}
                            </View>
                        );
                    })}
                </View>
            </View>
            {/* <View style={tw`border-b border-inactive  mt-2`} /> */}
        </View>
    );
};

export default WeeklyProgress;
