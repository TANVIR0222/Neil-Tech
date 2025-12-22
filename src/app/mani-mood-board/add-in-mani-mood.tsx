import { IconBottomArrow } from "@/assets/icons";
import GlobalTopBar from "@/src/components/GlobalTopBar";
import PageWrapper from "@/src/components/PageWrapper";
import tw from "@/src/lib/tailwind";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

const albums = ["Glitter", "Classic", "Matte", "Chrome", "Gel"];

const AddInManiMood = () => {
    const [selected, setSelected] = React.useState("Glitter");
    const [open, setOpen] = React.useState(false);
    const [showInput, setShowInput] = React.useState(false);

    const toggleInput = () => setShowInput(!showInput);


    const toggleDropdown = () => {
        setOpen(!open);
    };

    const handleSelect = (item: string) => {
        setSelected(item);
        setOpen(false);
    };
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    // Gallery থেকে image pick করার function
    const pickImageFromGallery = async () => {
        // Android/iOS permission
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert("Permission to access gallery is required!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,      // Crop/resize allowed
            aspect: [1, 1],           // Square image
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri); // uri থেকে Image set করবো
        }
    };

    return (
        <SafeAreaView style={tw`flex-1 bg-white`}>
            <PageWrapper>
                <GlobalTopBar title=" Add to Album" menu={false} icon={true} addIiocns={false} />
                <ScrollView
                    contentContainerStyle={tw`flex-1`}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={tw`flex-1 flex-col justify-between`}>
                        <View style={tw`flex-1 flex-col  gap-4`}>


                            {/* Choose from Gallery Section */}
                            <TouchableOpacity
                                onPress={pickImageFromGallery}
                                style={tw`mt-3 border-2 border-dashed border-[#c9a227] bg-[#f8f6f6] rounded-xl p-6 items-center`}
                            >
                                <View style={tw`w-20 h-20 bg-[#fff3] rounded-full justify-center items-center`}>
                                    {selectedImage ? (
                                        <Image source={{ uri: selectedImage }} style={tw`w-20 h-20 rounded`} />
                                    ) : (
                                        <Image
                                            source={require("@/assets/images/galarry.png")}
                                            style={tw`w-20 h-20`}
                                        />
                                    )}
                                </View>
                                <Text style={tw`mt-4 text-text15 font-sfProMedium text-secondaryColor text-center`}>
                                    {selectedImage ? "Image Selected" : "Choose from Gallery"}
                                </Text>
                            </TouchableOpacity>


                            {/* Album Select */}
                            <View style={tw`mt-3`}>


                                <View style={tw``}>
                                    <Text style={tw`text-text14 font-sfProMedium text-primaryColor mb-2`}>Album</Text>

                                    <View style={tw`flex-row items-center`}>
                                        {/* Dropdown Header (80% width) */}
                                        <TouchableOpacity
                                            onPress={() => toggleDropdown()}
                                            style={tw`flex-1 flex-row justify-between items-center border border-bgGray rounded-full px-4 py-3 bg-white mr-2`}
                                            activeOpacity={0.7}
                                        >
                                            <Text style={tw`text-text14 font-sfProRegular text-secondaryColor`}>
                                                {selected}
                                            </Text>
                                            <SvgXml xml={IconBottomArrow} />
                                        </TouchableOpacity>

                                        {/* Add Image Button (20% width) */}
                                        <TouchableOpacity
                                            onPress={toggleInput}
                                            style={tw`w-1/5 h-16 rounded-full justify-center items-center `}
                                        >
                                            <Image
                                                source={require("@/assets/images/add-image.png")}
                                                style={tw`w-12 h-12`}
                                                resizeMode="contain"
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    {/* Conditional TextInput */}
                                    {showInput && (
                                        <TextInput
                                            style={tw`border border-bgGray rounded-xl p-3 mt-3 text-text14 text-secondaryColor`}
                                            placeholder="Add a note..."
                                            placeholderTextColor="#989898"
                                        />
                                    )}
                                </View>

                                {/* Dropdown Items */}
                                {open && (
                                    <View
                                        style={tw`border border-bgGray rounded-xl mt-2 bg-white overflow-hidden`}
                                    >
                                        {albums.map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                style={tw`px-4 py-2.5 border-b border-gray-100`}
                                                onPress={() => handleSelect(item)}
                                            >
                                                <Text
                                                    style={tw`text-text14 ${selected === item
                                                        ? "text-primaryColor font-sfProMedium"
                                                        : "text-secondaryColor"
                                                        }`}
                                                >
                                                    {item}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                )}
                            </View>

                            {/* Add Details */}
                            <View style={tw`mt-3 `}>
                                <Text style={tw`text-text14 font-sfProMedium text-primaryColor mb-2`}>
                                    Add Details
                                </Text>
                                <TextInput
                                    style={tw`border border-bgGray rounded-xl p-3 h-32 text-text14 text-secondaryColor`}
                                    placeholder="Add a note (e.g. client or style details)"
                                    placeholderTextColor="#989898"
                                    multiline
                                    textAlignVertical="top"
                                />
                            </View>
                        </View>

                        {/* Buttons */}
                        <View>
                            <View style={tw`flex-row justify-between  mt-10`}>
                                <TouchableOpacity
                                    style={tw`w-[48%] border border-[#f2da87] rounded-full py-3 items-center`}
                                >
                                    <Text style={tw`text-text16 font-sfProMedium text-goldenBoarder`}>
                                        Discard
                                    </Text>
                                </TouchableOpacity>

                                <LinearGradient
                                    colors={["#c9a227", "#f2da87", "#c9a227"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={tw`w-[48%] rounded-full`}
                                >
                                    <TouchableOpacity style={tw`py-3 items-center`}>
                                        <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>
                                            Upload
                                        </Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </PageWrapper>
        </SafeAreaView>
    );
};

export default AddInManiMood;
