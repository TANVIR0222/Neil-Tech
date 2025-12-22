import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../lib/tailwind';
import { CalendarDay } from '../type/type';

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

    const isToday = (date: Date) => date.toDateString() === new Date().toDateString();
    const isSelected = (date: Date) => date.toDateString() === selectedDate.toDateString();

    const generateCalendar = useCallback(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);
        const daysInMonth = lastDayOfMonth.getDate();

        const startDay = firstDayOfMonth.getDay(); // 0=Sun,1=Mon,...6=Sat
        const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7; // fill full weeks

        const days: CalendarDay[] = [];

        for (let i = 0; i < totalCells; i++) {
            const dayNumber = i - startDay + 1;
            if (i < startDay || dayNumber > daysInMonth) {
                // empty cell
                days.push({ day: null, date: null, isToday: false, isSelected: false });
            } else {
                const date = new Date(year, month, dayNumber);
                days.push({ day: dayNumber, date, isToday: isToday(date), isSelected: isSelected(date) });
            }
        }

        setCalendarDays(days);
    }, [currentDate, selectedDate]);

    useEffect(() => {
        generateCalendar();
    }, [generateCalendar]);

    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    const handleDateSelect = (date: Date | null) => date && setSelectedDate(date);

    return (
        <View style={tw`bg-white rounded-[28px] shadow-md p-3`}>
            {/* Header */}
            <View style={tw`flex-row justify-between items-center mb-4`}>
                <Text style={tw`text-text16 font-sfProMedium text-secondaryColor`}>
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </Text>
                <View style={tw`flex-row items-center`}>
                    <TouchableOpacity onPress={prevMonth} style={tw`p-2`}>
                        <Text style={tw`text-xl font-sfProMedium text-secondaryColor`}>‹</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={nextMonth} style={tw`p-2`}>
                        <Text style={tw`text-xl font-sfProMedium text-secondaryColor`}>›</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Weekday Header */}
            <View style={tw`flex-row justify-between mb-2`}>
                {weekDays.map((day, i) => (
                    <View key={i} style={tw`w-10 h-10 justify-center items-center`}>
                        <Text style={tw`font-sfProMedium text-secondaryColor text-text15`}>{day}</Text>
                    </View>
                ))}
            </View>

            {/* Calendar Grid */}
            <View style={tw`flex-row flex-wrap justify-between`}>
                {calendarDays.map((dayObj, i) => {
                    const specialDates = [5, 12, 20]; // যেসব তারিখে গোল্ডেন বর্ডার চাই
                    const hasGoldenBorder = specialDates.includes(dayObj.day || -1);

                    return (
                        <TouchableOpacity
                            key={i}
                            onPress={() => handleDateSelect(dayObj.date)}
                            style={tw`w-10 h-10 justify-center items-center m-1`}
                            disabled={!dayObj.date}
                        >
                            {dayObj.date ? (
                                dayObj.isSelected ? (
                                    <LinearGradient
                                        colors={['#F2DA87', '#91741A', '#F2DA87']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={tw`w-10 h-10 rounded-full items-center justify-center`}
                                    >
                                        <Text style={tw`text-white font-sfProMedium text-text15`}>
                                            {dayObj.day}
                                        </Text>
                                    </LinearGradient>
                                ) : (
                                    <View
                                        style={[
                                            tw`w-8 h-8 rounded-full justify-center items-center`,
                                            hasGoldenBorder && {
                                                borderWidth: 2,
                                                borderColor: '#F2DA87',
                                            },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                tw`font-medium`,
                                                dayObj.isToday
                                                    ? tw`text-goldenBoarder font-sfProMedium`
                                                    : tw`text-secondaryColor`,
                                            ]}
                                        >
                                            {dayObj.day}
                                        </Text>
                                    </View>
                                )
                            ) : (
                                <View style={tw`w-10 h-10`} />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>

        </View>
    );
};

export default Calendar;
