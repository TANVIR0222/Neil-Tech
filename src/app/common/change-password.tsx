import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { AppointmentSchema } from '../planner-view';

export default function ChangePassword() {
    return (
        <PageWrapper>
            <GlobalTopBar title="Change Passowrd" icon={true} menu={false} />

            <KeyboardAvoidingWrapper>
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
                        <View style={tw`flex-col gap-4 mt-5 flex-1 justify-between  `}>
                            <View>

                                {/* Client Name */}
                                <GlobalMainInput
                                    label="Enter Current password"
                                    placeholder='********'
                                    value={values.clientName}
                                    onChangeText={handleChange('clientName')}
                                    onBlur={() => handleBlur('clientName')}
                                    error={errors.clientName}
                                    touched={touched.clientName}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}
                                />

                                {/* Phone Number */}
                                <GlobalMainInput
                                    label="Enter new password"
                                    placeholder='********'

                                    value={values.phone}
                                    onChangeText={handleChange('phone')}
                                    onBlur={() => handleBlur('phone')}
                                    error={errors.phone}
                                    touched={touched.phone}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                />

                                {/* Email */}
                                <GlobalMainInput
                                    label="Confirm new password"
                                    placeholder='********'
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    error={errors.email}
                                    touched={touched.email}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                />


                            </View>

                            {/* Submit Button */}
                            <MainButton textStyle={tw`text-white font-sfProMedium text-text17`} title='Update' />
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}