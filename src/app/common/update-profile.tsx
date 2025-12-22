import GlobalMainInput from '@/src/components/GlobalMainInput'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent'
import MainButton from '@/src/components/MainButton'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import { Formik } from 'formik'
import React from 'react'
import { Image, View } from 'react-native'
import { AppointmentSchema } from '../planner-view'

export default function UpdateProfile() {
    return (
        <PageWrapper>
            <GlobalTopBar title="Update Profile" icon={true} menu={false} />

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
                        <View style={tw`flex-col gap-4 flex-1 justify-between  `}>




                            <View>
                                <View style={tw`flex-row items-center pb-5 justify-center`}>
                                    <View style={tw`flex-row items-center border border-[#F2DA87] p-1 border-opacity-50 rounded-full`}>
                                        <Image
                                            source={require('@/assets/images/3d_avatar_12.png')}
                                            style={tw`w-24 h-24 rounded-full`}
                                            resizeMode="cover"
                                        />
                                    </View>

                                </View>
                                {/* Client Name */}
                                <GlobalMainInput
                                    label="Name"
                                    value={values.clientName}
                                    onChangeText={handleChange('clientName')}
                                    onBlur={() => handleBlur('clientName')}
                                    error={errors.clientName}
                                    touched={touched.clientName}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}
                                />

                                {/* Phone Number */}
                                <GlobalMainInput
                                    label="Date Of Birth"
                                    value={values.phone}
                                    onChangeText={handleChange('phone')}
                                    onBlur={() => handleBlur('phone')}
                                    error={errors.phone}
                                    touched={touched.phone}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                />

                                {/* Email */}
                                <GlobalMainInput
                                    label="Address"
                                    value={values.email}
                                    onChangeText={handleChange('email')}
                                    onBlur={() => handleBlur('email')}
                                    error={errors.email}
                                    touched={touched.email}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}

                                />

                                {/* Service Type */}
                                <GlobalMainInput
                                    label="Phone Number"
                                    value={values.serviceType}
                                    onChangeText={handleChange('serviceType')}
                                    onBlur={() => handleBlur('serviceType')}
                                    error={errors.serviceType}
                                    touched={touched.serviceType}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}
                                    keyboardType='name-phone-pad'

                                />
                                <GlobalMainInput
                                    label="Email"
                                    value={values.serviceType}
                                    onChangeText={handleChange('serviceType')}
                                    onBlur={() => handleBlur('serviceType')}
                                    error={errors.serviceType}
                                    touched={touched.serviceType}
                                    labelStyle={tw`text-primaryColor font-sfProMedium text-text14`}
                                    keyboardType='name-phone-pad'

                                />

                            </View>

                            {/* Submit Button */}
                            <MainButton title='Update' />
                        </View>
                    )}
                </Formik>
            </KeyboardAvoidingWrapper>
        </PageWrapper>
    )
}