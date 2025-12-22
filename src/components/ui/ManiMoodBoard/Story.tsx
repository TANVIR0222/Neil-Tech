import tw from "@/src/lib/tailwind";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    Modal,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import GradientText from "../../GradientText";

interface Story {
    id: string;
    name: string;
    image: string | any;
}

const InstagramStories = () => {
    const [stories, setStories] = useState<Story[]>([
        { id: "1", name: "Your Story", image: require("@/assets/images/nail-image.png") },
        { id: "2", name: "Tanvir", image: require("@/assets/images/nail-image.png") },
        { id: "3", name: "Ayesha", image: require("@/assets/images/nail-image.png") },
        { id: "4", name: "Rafi", image: require("@/assets/images/nail-image.png") },
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newName, setNewName] = useState("");
    const [newImage, setNewImage] = useState<string | null>(null);

    // 🖼 Pick image from gallery
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            quality: 0.8,
        });

        if (!result.canceled && result.assets && result.assets[0].uri) {
            setNewImage(result.assets[0].uri);
        }
    };

    // ➕ Add new story
    const handleAddStory = () => {
        if (!newImage || !newName.trim()) return;

        const newStory = {
            id: Date.now().toString(),
            name: newName.trim(),
            image: { uri: newImage },
        };

        setStories([newStory, ...stories]);
        setNewImage(null);
        setNewName("");
        setModalVisible(false);
    };

    return (
        <View style={tw` my-3`}>
            {/* 🔹 Stories List */}

            <FlatList
                data={[{ id: "0", name: "Add", image: null }, ...stories]}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={tw`px-3`}
                renderItem={({ item }) =>
                    item.id === "0" ? (
                        // ➕ Add Story Button
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={tw`mr-4 items-center`}
                            activeOpacity={0.7}
                        >
                            <View
                                style={tw`w-16 h-16 rounded-full  justify-center items-center`}
                            >
                                <Image
                                    source={require("@/assets/images/add-image.png")}
                                    style={tw`w-16 h-16`}
                                    resizeMode="contain"
                                />
                            </View>
                            <Text style={tw`text-text12 text-secondaryColor font-sfProRegular `}>Create Album</Text>
                        </TouchableOpacity>
                    ) : (
                        // 🟡 Normal Story Card
                        <TouchableOpacity style={tw`mr-4 items-center`}>
                            <LinearGradient
                                colors={["#F2DA87", "#91741A", "#F2DA87"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={tw`w-16 h-16 rounded-full p-[2px]`}
                            >
                                <View style={tw`flex-1 bg-white rounded-full justify-center items-center`}>
                                    <Image
                                        source={item.image}
                                        style={tw`w-16 h-16 rounded-full`}
                                        resizeMode="cover"
                                    />
                                </View>
                            </LinearGradient>
                            <Text style={tw`text-text12 text-secondaryColor font-sfProRegular`} numberOfLines={1}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }
            />

            {/* 🔹 Modal for Adding Story */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={tw`flex-1 bg-black/50 justify-center items-center px-5`}>
                    <View style={tw`bg-white w-full gap-5 rounded-2xl p-6`}>
                        <GradientText title="Create New Story" textStyle={{ fontSize: 20 }} />

                        {/* Image Picker */}
                        <TouchableOpacity
                            onPress={pickImage}
                            activeOpacity={0.8}
                            style={tw`w-full h-48 rounded-2xl border-2 border-dashed border-[#F2DA87] justify-center items-center bg-white mb-4 overflow-hidden`}
                        >
                            {newImage ? (
                                <Image
                                    source={{ uri: newImage }}
                                    style={tw`w-full h-full rounded-2xl`}
                                    resizeMode="cover"
                                />
                            ) : (
                                <View style={tw`items-center`}>
                                    <Image
                                        source={require("@/assets/images/solar_gallery-bold.png")}
                                        style={tw`w-10 h-10 mb-2`}
                                        resizeMode="contain"
                                    />
                                    <Text style={tw`text-text14 text-secondaryColor font-sfProMedium`}>
                                        Choose from Gallery
                                    </Text>
                                </View>
                            )}
                        </TouchableOpacity>

                        <View style={tw`flex-col gap-2`}>
                            <Text style={tw`text-text14 text-primaryColor font-sfProMedium`}> Album Name</Text>
                            {/* Story Name Input */}
                            <TextInput
                                placeholder="Glitter"
                                placeholderTextColor="#999"
                                style={tw`border border-bgGray rounded-full px-3 py-3 `}
                                value={newName}
                                onChangeText={setNewName}
                            />

                        </View>
                        {/* Action Buttons */}
                        <View style={tw`flex-row gap-3`}>
                            <TouchableOpacity
                                style={tw`flex-1 bg-gray-200 rounded-lg py-3`}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={tw`text-center text-gray-800 font-medium`}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={tw`flex-1 bg-[#C9A227] rounded-lg py-3`}
                                onPress={handleAddStory}
                            >
                                <Text style={tw`text-center text-white font-semibold`}>Add Story</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default InstagramStories;
