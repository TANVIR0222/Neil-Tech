import tw from "@/src/lib/tailwind";
import { Formik } from "formik";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Yup from "yup";

import GlobalMainInput from "@/src/components/GlobalMainInput";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingComponent";
import MainButton from "@/src/components/MainButton";
import PageWrapper from "@/src/components/PageWrapper";

// ✅ Validation Schema
const shippingValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .trim()
        .min(2, "First name must be at least 2 characters")
        .required("First name is required"),
    lastName: Yup.string()
        .trim()
        .min(2, "Last name must be at least 2 characters")
        .required("Last name is required"),
    address: Yup.string()
        .trim()
        .min(5, "Address must be at least 5 characters")
        .required("Address is required"),
    city: Yup.string().trim().required("City is required"),
    zipCode: Yup.string()
        .matches(/^[0-9]{4,10}$/, "Enter a valid zip code")
        .required("Zip code is required"),
    phone: Yup.string()
        .matches(/^(?:\+?\d{10,14})$/, "Enter a valid phone number")
        .required("Phone number is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

export default function ShippingInfoScreen() {
    const { top } = useSafeAreaInsets();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleRegister = async (values: any) => {
        try {
            setIsLoading(true);
            // console.log("✅ Submitted Shipping Info:", values);
            // You can integrate API here
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: top }}>
            <PageWrapper>
                <GlobalTopBar title="Shipping Info" icon={true} menu={false} />

                <KeyboardAvoidingWrapper>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            address: "",
                            city: "",
                            zipCode: "",
                            phone: "",
                            email: "",
                        }}
                        validationSchema={shippingValidationSchema}
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
                            <View style={tw`flex-col justify-between flex-1 pb-5 `}>
                                {/* 🔹 Name Fields */}
                                <View style={tw`flex-col gap-2`}>
                                    <View style={tw`flex-row gap-4`}>
                                        <View style={tw`flex-1`}>
                                            <GlobalMainInput
                                                label="First Name"
                                                placeholder="Enter first name"
                                                value={values.firstName}
                                                onChangeText={handleChange("firstName")}
                                                onBlur={() => handleBlur("firstName")}
                                                error={errors.firstName}
                                                touched={touched.firstName}
                                                labelStyle={{
                                                    color: "black",
                                                }}
                                                textInputStyle={tw`border-black border`}
                                            />
                                        </View>
                                        <View style={tw`flex-1`}>
                                            <GlobalMainInput
                                                label="Last Name"
                                                placeholder="Enter last name"
                                                value={values.lastName}
                                                onChangeText={handleChange("lastName")}
                                                onBlur={() => handleBlur("lastName")}
                                                error={errors.lastName}
                                                touched={touched.lastName}
                                                labelStyle={{
                                                    color: "black",
                                                }}
                                                textInputStyle={tw`border-black border`}
                                            />
                                        </View>
                                    </View>

                                    {/* 🔹 Address */}
                                    <GlobalMainInput
                                        label="Address"
                                        placeholder="Enter street address"
                                        value={values.address}
                                        onChangeText={handleChange("address")}
                                        onBlur={() => handleBlur("address")}
                                        error={errors.address}
                                        touched={touched.address}
                                        labelStyle={{
                                            color: "black",
                                        }}
                                        textInputStyle={tw`border-black border`}
                                    />

                                    {/* 🔹 City & Zip */}
                                    <View style={tw`flex-row gap-4`}>
                                        <View style={tw`flex-1`}>
                                            <GlobalMainInput
                                                label="City"
                                                placeholder="Enter city"
                                                value={values.city}
                                                onChangeText={handleChange("city")}
                                                onBlur={() => handleBlur("city")}
                                                error={errors.city}
                                                touched={touched.city}
                                                labelStyle={{
                                                    color: "black",
                                                }}
                                                textInputStyle={tw`border-black border`}
                                            />
                                        </View>
                                        <View style={tw`flex-1`}>
                                            <GlobalMainInput
                                                label="Zip Code"
                                                placeholder="Enter zip code"
                                                value={values.zipCode}
                                                onChangeText={handleChange("zipCode")}
                                                onBlur={() => handleBlur("zipCode")}
                                                error={errors.zipCode}
                                                touched={touched.zipCode}
                                                labelStyle={{
                                                    color: "black",
                                                }}
                                                textInputStyle={tw`border-black border`}
                                            />
                                        </View>
                                    </View>

                                    {/* 🔹 Contact Info */}
                                    <GlobalMainInput
                                        label="Phone Number"
                                        placeholder="Enter phone number"
                                        value={values.phone}
                                        onChangeText={handleChange("phone")}
                                        onBlur={() => handleBlur("phone")}
                                        error={errors.phone}
                                        touched={touched.phone}
                                        labelStyle={{
                                            color: "black",
                                        }}
                                        textInputStyle={tw`border-black border`}
                                    />

                                    <GlobalMainInput
                                        label="Email"
                                        placeholder="Enter email address"
                                        value={values.email}
                                        onChangeText={handleChange("email")}
                                        onBlur={() => handleBlur("email")}
                                        error={errors.email}
                                        touched={touched.email}
                                        labelStyle={{
                                            color: "black",
                                        }}
                                        textInputStyle={tw`border-black border`}
                                    />
                                </View>

                                {/* 🔹 Submit Button */}
                                <MainButton
                                    title={isLoading ? "Submitting..." : "Confirm "}
                                    onPress={() => handleSubmit()}
                                    disabled={isLoading}
                                    textStyle={tw`text-white`}
                                    showSignUpLink={false}
                                />
                            </View>

                        )}
                    </Formik>
                </KeyboardAvoidingWrapper>
            </PageWrapper>
        </View>
    );
}
