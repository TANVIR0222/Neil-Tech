import AnimationTextInput from '@/src/components/AnimationTextInput';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, View } from 'react-native';

const AddNewAppointment = () => {
    const [formData, setFormData] = useState({
        date: '',
        serviceType: '',
        amount: '',
        notes: '',
    });

    const fields = [
        {
            key: 'date',
            placeholder: 'Date',
            svgSecondOnPress: () => alert('Pick Date'),
        },
        {
            key: 'serviceType',
            placeholder: 'Service Type',
            svgSecondIcon: undefined,
            svgSecondOnPress: () => { },
        },
        {
            key: 'amount',
            placeholder: 'Amount',
            svgSecondIcon: undefined,
            svgSecondOnPress: () => { },
        },
        {
            key: 'notes',
            placeholder: 'Notes',
            svgSecondIcon: undefined,
            svgSecondOnPress: () => { },
        },
    ];
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const handleChange = (key: string, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <PageWrapper>
            <GlobalTopBar
                icon={true}
                title="Sabrina Carpenter"
                menu={false}
                addIiocns={false}
            />

            <KeyboardAvoidingWrapper>
                <ScrollView contentContainerStyle={tw`flex-grow `}>
                    {/* Input Fields */}
                    <View style={tw`flex-col gap-4`}>
                        {fields.map(field => (
                            <AnimationTextInput
                                key={field.key}
                                placeholder={field.placeholder}
                                value={formData[field.key as keyof typeof formData]}
                                onChangeText={text => handleChange(field.key, text)}
                                required
                                touched={true}
                                errorText={
                                    formData[field.key as keyof typeof formData].trim() === ''
                                        ? `${field.placeholder} is required`
                                        : undefined
                                }
                                svgSecondIcon={field.svgSecondIcon}
                                svgSecondOnPress={field.svgSecondOnPress}
                                textXOutRangeFirst={10}
                                textXOutRangeSecond={20}
                            />
                        ))}
                    </View>
                </ScrollView>
                {/* Submit Button */}
                <View style={tw`flex-row items-center justify-between px-5 my-4 py-3 bg-[#F8F6F6] rounded-full`} >
                    <Text style={tw`text-primaryColor font-sfProMedium text-text20`} >Set Reminder</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#53B96A' }}
                        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                {/* Submit Button */}
                <MainButton title="Save" textStyle={tw` font-sfProBold`} />
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    );
};

export default AddNewAppointment;
