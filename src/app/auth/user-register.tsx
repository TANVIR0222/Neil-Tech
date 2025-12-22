import { IconActiveGlobal, IconBox } from '@/assets/icons';
import AuthTopBar from '@/src/components/AuthTopBar';
import GlobalMainInput from '@/src/components/GlobalMainInput';
import GlobalText from '@/src/components/GlobalText';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { registerValidationSchema } from '@/src/utils/auth-validationSchema';
import { router } from 'expo-router';
import { Formik } from 'formik';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Register() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<string[]>([]);
    const [isChecked, setChecked] = React.useState<boolean>(false);

    const handleRegister = () => {
        router.push('/(drawer)/(tabs)');
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>

                <View style={tw`flex-1 pb-10 `}>
                    <AuthTopBar icon={true} />

                    <View style={tw`w-[95%] mx-auto px-6 py-6 shadow-md rounded-3xl bg-white`}>
                        <Formik
                            initialValues={{ full_name: '', email: '', password: '', password_confirmation: '', checkbox: false }}
                            validationSchema={registerValidationSchema}
                            onSubmit={handleRegister}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                values,
                                errors,
                                touched,
                                setFieldValue
                            }) => (
                                <View style={tw`flex-col   justify-between gap-6`}>

                                    {/* 🔹 Gradient Title */}

                                    <GlobalText text="Create Account" size="text24" weight="semibold" align="left" />


                                    {/* 🔹 Input Fields */}
                                    <View style={tw` `}>
                                        <GlobalMainInput
                                            label="Full Name"
                                            // placeholder="mehedi@gmail.com"
                                            value={values.email}
                                            onChangeText={handleChange('full_name')}
                                            onBlur={() => handleBlur('full_name')}
                                            error={errors.full_name}
                                            touched={touched.full_name}
                                        />

                                        <GlobalMainInput
                                            label="Email"
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                            onBlur={() => handleBlur('email')}
                                            error={errors.email}
                                            touched={touched.email}
                                        />
                                        <GlobalMainInput
                                            label="Password"
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={() => handleBlur('password')}
                                            error={errors.password}
                                            touched={touched.password}
                                        />
                                        <View style={tw`flex-col mb-4 `}>
                                            <GlobalMainInput
                                                label="Confirm Password"
                                                value={values.password_confirmation}
                                                onChangeText={handleChange('password_confirmation')}
                                                onBlur={() => handleBlur('password_confirmation')}
                                                error={errors.password_confirmation}
                                                touched={touched.password_confirmation}
                                            />
                                            <View style={tw`flex-row items-center gap-1.5`}>
                                                <TouchableOpacity onPress={() => setChecked(!isChecked)} >
                                                    <SvgXml xml={isChecked ? IconBox : IconActiveGlobal} width={20} height={20} />
                                                </TouchableOpacity>
                                                <Text style={tw` font-sfProRegular text-text13 text-secondaryColor`}>I accept the Terms & Conditions</Text>
                                            </View>
                                        </View>
                                        <MainButton
                                            title={isLoading ? 'Loading...' : 'Login'}
                                            onPress={() => handleSubmit()}
                                            disabled={isLoading}
                                            textStyle={tw`text-white`}
                                            showSignUpLink={true}
                                            signUpPrompt="Already have an account?"
                                            signUpText="Sign In"
                                            onSignUpPress={() => router.push('/auth')}
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
