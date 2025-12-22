import AuthTopBar from '@/src/components/AuthTopBar';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalText from '@/src/components/GlobalText';
import GradientText from '@/src/components/GradientText';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { resetPasswordValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function ForgetPassword() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<string[]>([]);

    const handleRegister = () => {
        router.push('/(drawer)/(tabs)');
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>

                <View style={tw`flex-1 `}>
                    <AuthTopBar icon={false} />

                    <View style={tw`w-[95%] mx-auto  px-6  shadow-lg rounded-3xl bg-white`}>
                        <Formik
                            initialValues={{ email: '' }}
                            validationSchema={resetPasswordValidationSchema}
                            onSubmit={handleRegister}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                            }) => (
                                <View style={tw`flex-col py-6  justify-between gap-6`}>

                                    {/* 🔹 Gradient Title */}
                                    {/* <GradientText
                                        title="Reset Your Password"
                                        textStyle={{
                                            fontSize: 28,
                                            fontFamily: 'sfpro-600',
                                            textAlign: 'center',
                                        }}
                                        containerStyle={tw`items-center`}
                                    /> */}
                                    <GlobalText text="Reset Your Password" size="text24" weight="semibold" align="left" />


                                    {/* 🔹 Input Fields */}
                                    <View style={tw` `}>


                                        <View>
                                            <GlobalMainInput
                                                label="Email"
                                                value={values.email}
                                                onChangeText={handleChange('email')}
                                                onBlur={() => handleBlur('email')}
                                                error={errors.email}
                                                touched={touched.email}
                                            />
                                            <View style={tw`  items-end justify-end `}>
                                                <TouchableOpacity style={tw`items-end  mb-4`}>
                                                    <GradientText
                                                        title="Resend"
                                                        textStyle={{
                                                            fontSize: 13,
                                                            fontFamily: 'sfpro-600',
                                                            textAlign: 'right',
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                            </View>

                                        </View>

                                        <MainButton
                                            title={isLoading ? 'Loading...' : 'Enter'}
                                            // onPress={() => handleSubmit()}
                                            onPress={() => router.push('/auth/verification-code')}
                                            disabled={isLoading}
                                            textStyle={tw`text-white`}
                                            showSignUpLink={false}

                                        />
                                    </View>



                                </View>
                            )}
                        </Formik>
                    </View>
                </View>
            </KeyboardAvoidingWrapper>

        </PageWrapper>
    );
}