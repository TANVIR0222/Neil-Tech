import AuthTopBar from '@/src/components/AuthTopBar';
import GlobalText from '@/src/components/GlobalText';
import GradientText from '@/src/components/GradientText';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingComponent';
import MainButton from '@/src/components/MainButton';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
export default function VerificationCode() {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isError, setIsError] = React.useState<string[]>([]);
    const [otpVerify, setOtpVerify] = React.useState<string>("");

    const handleRegister = () => {
        router.push('/(drawer)/(tabs)');
    };

    return (
        <PageWrapper>
            <KeyboardAvoidingWrapper>

                <View style={tw`flex-1 `}>
                    <AuthTopBar icon={true} />

                    <View style={tw`w-[95%] mx-auto  px-6  py-6 flex-col gap-4 shadow-lg rounded-3xl bg-white`}>

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
                        <GlobalText text="Verification Code" size="text24" weight="semibold" align="left" />

                        <View style={tw`w-full  `}>
                            {/* Header */}
                            {/* ----------- heading-------------------------- */}

                            <View style={tw`flex-col gap-2 items-center justify-center mb-6 `}>

                                <Text style={tw` text-center text-secondaryColor text-text13 font-sfProRegular`}>
                                    {` We sent a reset link to your@email, enter 6 digit code that is mentioned in the email`}
                                </Text>
                            </View>
                            {/* ------------------ otp-------------------- */}
                            <View style={tw`flex flex-col gap-5`}>
                                {/* Email/Phone Input */}

                                <View style={tw`flex flex-col gap-2 justify-end items-end`}>
                                    <OtpInput
                                        focusColor="#F2DA87"
                                        placeholder="000000"

                                        autoFocus={false}
                                        numberOfDigits={6}
                                        type="numeric"
                                        onFilled={(text: string) => setOtpVerify(text)}
                                        textInputProps={{
                                            accessibilityLabel: "One-Time Password",
                                        }}
                                        textProps={{
                                            accessibilityRole: "text",
                                            accessibilityLabel: "OTP digit",
                                            allowFontScaling: false,

                                        }}
                                        theme={{
                                            pinCodeTextStyle: {
                                                color: '#91741A',
                                                fontSize: 20,
                                                fontFamily: 'sfpro-600',

                                            },
                                            pinCodeContainerStyle: {
                                                borderColor: '#91741A',
                                                borderWidth: 1,
                                                borderRadius: 8,
                                                width: 40,
                                                height: 50,
                                            }

                                        }}
                                    />
                                    {/* -------------- resend ----------- */}
                                    <TouchableOpacity>
                                        <GradientText
                                            title="Resend Code"
                                            textStyle={{
                                                fontSize: 13,
                                                fontFamily: 'sfpro-600',
                                                textAlign: 'right',
                                            }}
                                        />
                                    </TouchableOpacity>

                                </View>

                                {/* ----------------- button--------------- */}

                                {/* <MainButton handleNavigate={() => handleNavigate()} isLoading={isLoading} title='Verify Code' /> */}

                            </View>
                        </View>
                        <MainButton
                            title={isLoading ? 'Loading...' : 'Enter'}
                            // onPress={() => handleSubmit()}
                            onPress={() => router.push('/auth/created-new-password')}
                            disabled={isLoading}
                            textStyle={tw`text-white`}
                            showSignUpLink={false}

                        />
                    </View>
                </View>
            </KeyboardAvoidingWrapper>

        </PageWrapper>
    );
}