import { IconDateAndTime } from '@/assets/icons';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import * as Yup from 'yup';
import GlobalGradientBox from '../../GlobalGradientBox';
import MainButton from '../../MainButton';

interface FormValues {
    clientName: string;
    category: string;
    amount: string;
    notes: string;
    date: Date;
}

const AddIncome: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);

    const initialValues: FormValues = {
        clientName: '',
        category: '',
        amount: '',
        notes: '',
        date: new Date(), // ✅ initialize date
    };

    const validationSchema = Yup.object().shape({
        clientName: Yup.string().required('Client Name is required'),
        category: Yup.string().required('Category is required'),
        amount: Yup.number()
            .typeError('Amount must be a number')
            .positive('Amount must be positive')
            .required('Amount is required'),
        notes: Yup.string(),
        date: Yup.date().required('Date is required'),
    });

    const handleSubmit = (values: FormValues) => {
        setIsLoading(true);
        console.log(values);

    };

    return (

        <KeyboardAvoidingWrapper>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    setFieldValue,
                }) => (
                    <View style={tw`flex-col justify-between  flex-1   `}>
                        <View style={tw`flex-col gap-2`}>
                            {/* Client Name */}
                            <GlobalMainInput
                                label="Client Name"
                                placeholder="Paige"
                                value={values.clientName}
                                onChangeText={handleChange('clientName')}
                                onBlur={() => handleBlur('clientName')}
                                error={errors.clientName}
                                touched={touched.clientName}
                                labelStyle={tw`text-primaryColor`}
                            />

                            {/* Category */}
                            <GlobalMainInput
                                label="Category"
                                placeholder="Gel Manicure"
                                value={values.category}
                                onChangeText={handleChange('category')}
                                onBlur={() => handleBlur('category')}
                                error={errors.category}
                                touched={touched.category}
                                labelStyle={tw`text-primaryColor`}
                            />

                            {/* Amount */}
                            <GlobalMainInput
                                label="Amount"
                                placeholder="100"
                                keyboardType="numeric"
                                value={values.amount}
                                onChangeText={handleChange('amount')}
                                onBlur={() => handleBlur('amount')}
                                error={errors.amount}
                                touched={touched.amount}
                                labelStyle={tw`text-primaryColor`}
                            />
                            {/* Date Picker */}
                            <View style={tw`flex-col gap-2`}>
                                <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>
                                    Date
                                </Text>
                                <TouchableOpacity
                                    onPress={() => setDatePickerVisible(true)}
                                    style={tw`border border-secondaryColor rounded-full px-3 py-4`}
                                >
                                    <View style={tw`flex-row items-center gap-2`}>
                                        <SvgXml xml={IconDateAndTime} />
                                        <Text>{values.date ? values.date.toDateString() : 'Select Date'}</Text>
                                    </View>
                                </TouchableOpacity>
                                {/* {errors.date && touched.date && (
                                    <Text style={tw`text-red-500 text-text12`}>{errors.date}</Text>
                                )} */}
                                {isDatePickerVisible && (
                                    <DateTimePicker
                                        value={values.date || new Date()} // fallback if undefined
                                        mode="date"
                                        display="default"
                                        onChange={(_, selectedDate) => {
                                            setDatePickerVisible(false);
                                            if (selectedDate) setFieldValue('date', selectedDate);
                                        }}
                                    />
                                )}
                            </View>

                            {/* Notes */}
                            <View style={tw`flex-col gap-1 mt-2`}>
                                <Text style={tw`text-primaryColor font-sfProMedium text-text14`}>
                                    Notes
                                </Text>
                                <TextInput
                                    placeholder="Add any note"
                                    value={values.notes}
                                    onChangeText={handleChange('notes')}
                                    onBlur={() => handleBlur('notes')}
                                    style={tw`border border-bgGray rounded-lg px-3 py-2 h-28 text-black`}
                                    multiline
                                    textAlignVertical="top"
                                    placeholderTextColor="#989898"
                                />
                                {errors.notes && touched.notes && (
                                    <Text style={tw`text-red-500 text-text12`}>{errors.notes}</Text>
                                )}
                            </View>


                        </View>




                        {/* Submit Button */}
                        <View style={tw`flex-row items-center justify-between mt-4`}>
                            {/* Cancel Button */}
                            <GlobalGradientBox radius={50} style={tw`w-[48%] `}>
                                <TouchableOpacity
                                    style={tw`h-11 w-full rounded-full px-3.5 py-1.5 justify-center`}
                                // onPress={() => router.back()}
                                >
                                    <Text style={tw`text-center text-text18 font-sfProMedium text-black`}>
                                        Cancel
                                    </Text>
                                </TouchableOpacity>
                            </GlobalGradientBox>

                            {/* Add Task / View All Button */}
                            <View style={tw`w-[48%]`}>
                                <MainButton
                                    title="View All"
                                    // onPress={() => router.back()}
                                    textStyle={tw`text-text16 py-0.8 font-sfProMedium text-black text-center`}
                                />
                            </View>
                        </View>


                    </View>
                )}
            </Formik>
        </KeyboardAvoidingWrapper>
    );
};

export default AddIncome;
