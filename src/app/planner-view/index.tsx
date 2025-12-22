import { IconDateAndTime, IconDatePicker } from '@/assets/icons';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Image, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';

// Validation schema
export const AppointmentSchema = Yup.object().shape({
    clientName: Yup.string().required('Client name is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^\d{10,15}$/, 'Enter a valid phone number'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    serviceType: Yup.string().required('Service type is required'),
    date: Yup.date().required('Date is required'),
    time: Yup.date().required('Time is required'),
});

export default function AppointmentDetails() {
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Add New Appointment" menu={false} addIiocns={false} />


            <KeyboardAvoidingWrapper>
                <ScrollView>
                    <View style={tw`flex-col items-center mt-4`}>
                        <Image source={require('@/assets/images/3d_avatar_12.png')} style={{ width: 100, height: 100 }} />
                    </View>

                    <Formik
                        initialValues={{
                            clientName: '',
                            phone: '',
                            email: '',
                            serviceType: '',
                            date: new Date(),
                            time: new Date(),
                        }}
                        validationSchema={AppointmentSchema}
                        onSubmit={(values) => {
                            console.log('Appointment Data:', values);
                            // handle form submission here
                        }}
                    >
                        {({ values, setFieldValue, handleSubmit, errors, touched, handleChange, handleBlur }) => (
                            <View style={tw`flex-col gap-4  `}>
                                {/* Date Picker */}
                                <View style={tw`flex-col gap-2`}>
                                    <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>Date</Text>
                                    <TouchableOpacity
                                        onPress={() => setDatePickerVisible(true)}
                                        style={tw`border border-secondaryColor rounded-full px-3 py-4`}
                                    >
                                        <View style={tw`flex-row justify-between items-center gap-2`}>
                                            <Text>{values.date.toDateString()}</Text>
                                            <SvgXml xml={IconDatePicker} />
                                        </View>

                                    </TouchableOpacity>
                                    {errors.date && touched.date && (
                                        <Text style={tw`text-red-500 text-text12`}>{errors.date}</Text>
                                    )}
                                    {isDatePickerVisible && (
                                        <DateTimePicker
                                            value={values.date}
                                            mode="date"
                                            display="default"
                                            onChange={(_, selectedDate) => {
                                                setDatePickerVisible(false);
                                                if (selectedDate) setFieldValue('date', selectedDate);
                                            }}
                                        />
                                    )}
                                </View>

                                {/* Time Picker */}
                                <View style={tw`flex-col gap-2`}>
                                    <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>Time</Text>
                                    <TouchableOpacity
                                        onPress={() => setTimePickerVisible(true)}
                                        style={tw`border border-secondaryColor rounded-full px-3 py-4`}
                                    >
                                        <View style={tw`flex-row items-center justify-between gap-2`}>
                                            <Text>{values.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                                            <SvgXml xml={IconDateAndTime} />
                                        </View>
                                    </TouchableOpacity>
                                    {errors.time && touched.time && (
                                        <Text style={tw`text-red-500 text-text12`}>{errors.time}</Text>
                                    )}
                                    {isTimePickerVisible && (
                                        <DateTimePicker
                                            value={values.time}
                                            mode="time"
                                            display="default"
                                            onChange={(_, selectedTime) => {
                                                setTimePickerVisible(false);
                                                if (selectedTime) setFieldValue('time', selectedTime);
                                            }}
                                        />
                                    )}
                                </View>

                                <View>
                                    {/* Client Name */}
                                    <GlobalMainInput
                                        label="Client Name"
                                        value={values.clientName}
                                        onChangeText={handleChange('clientName')}
                                        onBlur={() => handleBlur('clientName')}
                                        error={errors.clientName}
                                        touched={touched.clientName}
                                        labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}
                                    />

                                    {/* Phone Number */}
                                    <GlobalMainInput
                                        label="Phone Number"
                                        value={values.phone}
                                        onChangeText={handleChange('phone')}
                                        onBlur={() => handleBlur('phone')}
                                        error={errors.phone}
                                        touched={touched.phone}
                                        labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                    />

                                    {/* Email */}
                                    <GlobalMainInput
                                        label="Email"
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={() => handleBlur('email')}
                                        error={errors.email}
                                        touched={touched.email}
                                        labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                    />

                                    {/* Service Type */}
                                    <GlobalMainInput
                                        label="Service Type"
                                        value={values.serviceType}
                                        onChangeText={handleChange('serviceType')}
                                        onBlur={() => handleBlur('serviceType')}
                                        error={errors.serviceType}
                                        touched={touched.serviceType}
                                        labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                    />
                                    {/* Task Name */}
                                    <View style={tw`flex-col gap-1`}>
                                        <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>Task Name</Text>
                                        <TextInput
                                            placeholder="Restock gel polishes"
                                            style={tw`border  border-bgGray rounded-lg px-2 py-2 h-30`}
                                            textAlignVertical="top"
                                            textAlign="left"
                                            placeholderTextColor="#989898"
                                            // keyboardAppearance='light'
                                            multiline
                                        />
                                    </View>
                                </View>

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
                                <MainButton title="Save" textStyle={tw` font-sfProBold`} onPress={() => handleSubmit()} />
                            </View>
                        )}
                    </Formik>

                </ScrollView>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    );
}
