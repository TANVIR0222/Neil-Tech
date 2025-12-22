import { IconBox, IconBoxActive } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import { weeklyTasks } from '@/src/utils/dammy-data';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MainButton from '../../MainButton';



const WeeklyToDo = () => {
    const [active, setActive] = React.useState<boolean>(false);
    // console.log(active);

    return (
        <View style={tw`p-6 bg-white  flex-col gap-5 rounded-2xl shadow-md w-full  `}>

            <View style={tw` flex-col gap-6`}>
                {/* Title */}
                <Text style={tw`text-text24 font-sfProMedium  text-black `}>
                    Weekly To-Do
                </Text>

                <View style={tw` flex-col gap-4`} >
                    {
                        weeklyTasks.map((task) => (
                            <View key={task.id} style={tw`flex-row items-center   gap-4 ${active ? 'bg-[#E9E9E9] ' : 'border border-secondaryColor '} p-4 border-opacity-50  rounded-full  `} >
                                <View>
                                    <TouchableOpacity onPress={() => setActive(!active)} >
                                        <SvgXml xml={active ? IconBoxActive : IconBox} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={tw`text-text16  ${active ? 'line-through text-inactive' : 'text-primaryColor'} font-sfProRegular  `}>
                                    {task.text}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>

            {/* View All */}
            <MainButton
                title="View All"
                onPress={() => router.push('/weekly')}
                textStyle={tw`text-text16 text-primaryColor font-sfProMedium`}
            />

        </View>
    )
}

export default WeeklyToDo