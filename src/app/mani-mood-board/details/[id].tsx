import { IconEditeNode, IconMove, IconRightMenu, IconsRightArrowBlack, IconViewDeleted } from '@/assets/icons';
import GlobalText from '@/src/components/GlobalText';
import PageWrapper from '@/src/components/PageWrapper';
import tw from '@/src/lib/tailwind';
import { albums } from '@/src/utils/dammy-data';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
    Image,
    ImageBackground,
    Modal,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    useWindowDimensions,
    View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Id() {
    const { height, width } = useWindowDimensions();
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [visible, setVisible] = React.useState(false);
    const [move, setMove] = React.useState(false);
    const [note, setNote] = React.useState("Client Sarah loved this look...");

    return (
        <View style={tw`flex-1 bg-white`}>
            {/* ---------- Background Section ---------- */}
            <ImageBackground
                source={require('@/assets/images/main-mood.png')}
                resizeMode="cover"
                style={{ width, height: height * 0.55 }}
            >
                {/* Back Button */}
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={tw`absolute top-12 left-5 z-30  `}
                >
                    <SvgXml xml={IconsRightArrowBlack} width={40} height={40} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setIsMenuOpen(!isMenuOpen)}
                    style={tw`absolute top-12 right-5 z-30  `}
                >
                    <SvgXml xml={IconRightMenu} width={40} height={40} />
                </TouchableOpacity>

                {/* Gradient Overlay */}
                <LinearGradient
                    colors={["#fff", "#000", "transparent"]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[1, 0.1]}
                    style={tw`absolute bottom-0 w-full h-[50%]`}
                />
            </ImageBackground>

            {/* ---------- Content Section ---------- */}
            <PageWrapper>
                <ScrollView
                    contentContainerStyle={tw`pb-10`}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={tw`flex-col mt-3`}>
                        <Text
                            style={tw`text-text20 font-sfProMedium text-primaryColor `}
                        >
                            French Tips
                        </Text>
                        <Text
                            style={tw`text-text12 font-sfProRegular text-secondaryColor `}
                        >
                            Added on March 12, 2025
                        </Text>
                    </View>
                    <Text
                        style={tw`text-text17 font-sfProRegular text-secondaryColor leading-7 mt-3`}
                    >
                        Client Sarah loved this look last visit — try matte version next time. She mentioned wanting something similar for her wedding in June.
                    </Text>
                </ScrollView>
            </PageWrapper>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <View
                    style={tw`absolute right-4 top-22 bg-white shadow-lg rounded-lg border border-gray-200 z-50`}
                >
                    <TouchableOpacity
                        style={tw`px-4 py-2 flex-row items-center gap-2`}
                        onPress={() => setVisible(true)}
                    >
                        <View style={tw`flex-row items-center gap-2`}>
                            <SvgXml xml={IconEditeNode} width={20} height={20} />
                            <Text style={tw`text-text12 font-sfProRegular text-primaryColor`}>
                                Edit Notes
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`px-4 py-2 flex-row items-center gap-2`}
                        onPress={() => setMove(true)}
                    >
                        <View style={tw`flex-row items-start gap-2`}>
                            <SvgXml xml={IconMove} width={20} height={20} />
                            <Text style={tw`text-text12 font-sfProRegular text-primaryColor`}>
                                {`Move to anothe\n Album`}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={tw`px-4 py-2 flex-row items-start gap-2`}
                        onPress={() => console.log("Delete")}
                    >
                        <View style={tw`flex-row items-center  gap-2`}>
                            <SvgXml xml={IconViewDeleted} width={20} height={20} />
                            <Text style={tw`text-text12 font-sfProRegular text-primaryColor`}>
                                Delete
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )}

            {/* Edit Modal */}
            <Modal visible={visible} transparent animationType="fade">
                <View style={tw`flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]`}>
                    <View style={tw`bg-white w-11/12 rounded-2xl p-5`}>
                        {/* Header */}
                        <View style={tw`flex-row justify-between items-center mb-4`}>
                            <GlobalText text="Edit Notes" size="text20" weight="medium" align="left" />

                            <TouchableOpacity onPress={() => setVisible(false)}>
                                <Text style={tw`text-red text-lg`}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Text Area */}
                        <TextInput
                            style={tw`border border-inactive rounded-lg p-3 h-30 text-secondaryColor text-text14 font-sfProRegular`}
                            multiline
                            value={note}
                            onChangeText={setNote}
                            placeholder="Write your note here..."
                            placeholderTextColor="#989898"
                            textAlignVertical="top"
                            textAlign="left"
                        />

                        {/* Buttons */}
                        <View style={tw`flex-row justify-between mt-5`}>
                            {/* Cancel */}
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={tw`w-[48%] border border-goldenBoarder rounded-full py-2`}
                            >
                                <Text style={tw`text-center text-text16 font-sfProMedium text-goldenBoarder`}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>

                            {/* Save */}
                            <LinearGradient
                                colors={["#c9a227", "#f2da87", "#c9a227"]}
                                start={[0, 0]}
                                end={[1, 1]}
                                style={tw`w-[48%] rounded-full`}
                            >
                                <TouchableOpacity
                                    onPress={() => setVisible(false)}
                                    style={tw`py-2 rounded-full`}
                                >
                                    <Text style={tw`text-center text-text16 font-sfProMedium text-primaryColor`}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>
                    </View>
                </View>
            </Modal>
            {/* Dropdown Menu */}
            <Modal visible={move} transparent animationType="fade">
                <View style={tw`flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]`}>
                    <View style={tw`bg-white w-11/12 rounded-2xl p-5 max-h-[80%]`}>
                        {/* Header */}
                        <View style={tw`flex-row justify-between items-center mb-4`}>
                            <GlobalText text=" Move to Album" size="text20" weight="medium" align="left" />
                            <TouchableOpacity onPress={() => { setMove(false); setIsMenuOpen(false) }}>
                                <Text style={tw`text-red text-lg`}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Album List */}
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={tw`flex-col gap-5`}>
                                {albums.map((item) => (
                                    <TouchableOpacity
                                        key={item.id}
                                        style={tw`flex-row items-center gap-4 border-b border-bgGray pb-3`}
                                    >
                                        <Image
                                            source={item.thumbnail}
                                            style={tw`w-16 h-16 rounded-lg`}
                                            resizeMode="cover"
                                        />
                                        <View>
                                            <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>
                                                {item.title}
                                            </Text>
                                            <Text style={tw`text-text12 font-sfProRegular text-secondaryColor`}>
                                                {item.images} Images
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                                {/* Create New Album */}
                                <TouchableOpacity
                                    onPress={() => { router.push("/mani-mood-board/add-in-mani-mood"); setMove(false); setIsMenuOpen(false) }}
                                    style={tw`flex-row items-center gap-4 mt-4`}
                                >
                                    <Image
                                        source={require("@/assets/images/add-image.png")}
                                        style={tw`w-16 h-16`}
                                        resizeMode="contain"
                                    />
                                    <Text style={tw`text-text16 font-sfProMedium text-primaryColor`}>
                                        Create New Album
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
