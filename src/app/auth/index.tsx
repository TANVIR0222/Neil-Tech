import AuthTopBar from '@/src/components/AuthTopBar';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalText from '@/src/components/GlobalText';
import GradientText from '@/src/components/GradientText';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { loginValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string[]>([]);

    const handleRegister = () => {
        router.push('/(drawer)/(tabs)');
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>

                <View style={tw`flex-1 `}>
                    <AuthTopBar icon={false} />

                    <View style={tw`w-[95%] mx-auto px-6 py-6 shadow-md rounded-3xl bg-white`}>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={loginValidationSchema}
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
                                            fontSize: 20,
                                            fontFamily: 'sfpro-600',
                                            textAlign: 'left',
                                        }}
                                    // containerStyle={tw`items-center bg-red`}
                                    /> */}
                                    <GlobalText text="Welcome Back!" size="text24" weight="semibold" align="left" />


                                    {/* 🔹 Input Fields */}
                                    <View style={tw` `}>
                                        <GlobalMainInput
                                            label="Email"
                                            placeholder="mehedi@gmail.com"
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={() => handleBlur('email')}
                                            error={errors.email}
                                            touched={touched.email}
                                        />

                                        <View>
                                            <GlobalMainInput
                                                label="Password"
                                                placeholder="********"
                                                value={values.password}
                                                onChangeText={handleChange('password')}
                                                onBlur={() => handleBlur('password')}
                                                error={errors.password}
                                                touched={touched.password}
                                            />

                                            <View style={tw`  items-end justify-end `}>
                                                <TouchableOpacity onPress={() => router.push('/auth/forget-password')} style={tw`  mb-4`}>
                                                    <GradientText
                                                        title="Forget Password?"
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
                                            title={isLoading ? 'Loading...' : 'Login'}
                                            onPress={() => handleRegister()}
                                            disabled={isLoading}
                                            textStyle={tw`text-white`}
                                            showSignUpLink={true}
                                            signUpPrompt="Don’t have an account?"
                                            signUpText="Register"
                                            onSignUpPress={() => router.push('/auth/user-register')}
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
