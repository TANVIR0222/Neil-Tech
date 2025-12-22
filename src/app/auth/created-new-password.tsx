import AuthTopBar from '@/src/components/AuthTopBar';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalText from '@/src/components/GlobalText';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { createNewPasswordValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';

export default function CreatedNewPassword() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<string[]>([]);

    const handleRegister = () => {
        router.push('/(drawer)/(tabs)');
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>

                <View style={tw`flex-1 `}>
                    <AuthTopBar icon={true} />

                    <View style={tw`w-[95%] mx-auto px-6 py-6 shadow-md rounded-3xl bg-white`}>
                        <Formik
                            initialValues={{ password_confirmation: '', password: '' }}
                            validationSchema={createNewPasswordValidationSchema}
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
                                <View style={tw`flex-col  justify-between gap-6`}>

                                    {/* 🔹 Gradient Title */}
                                    {/* <GradientText
                                        title="Welcome Back!"
                                        textStyle={{
                                            fontSize: 28,
                                            fontFamily: 'sfpro-600',
                                            textAlign: 'center',
                                        }}
                                        containerStyle={tw`items-center`}
                                    /> */}

                                    <GlobalText text="Create New Password" weight="semibold" align="left" />


                                    {/* 🔹 Input Fields */}
                                    <View style={tw` `}>
                                        <GlobalMainInput
                                            label="New Password"
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={() => handleBlur('password')}
                                            error={errors.password}
                                            touched={touched.password}
                                        />
                                        <GlobalMainInput
                                            label="Confirm Password"
                                            value={values.password_confirmation}
                                            onChangeText={handleChange('password_confirmation')}
                                            onBlur={() => handleBlur('password_confirmation')}
                                            error={errors.password_confirmation}
                                            touched={touched.password_confirmation}
                                        />
                                        <MainButton
                                            title={isLoading ? 'Loading...' : 'Login'}
                                            onPress={() => router.push('/(drawer)/(tabs)')}
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