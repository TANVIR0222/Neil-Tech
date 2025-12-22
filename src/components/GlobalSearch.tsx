import { TextInput, View } from "react-native"
import tw from "../lib/tailwind"
import { SearchProps } from "../type/type"

const GlobalSearch: React.FC<SearchProps> = ({
    placeholder,
    value,
    onChangeText,
    onClear
}) => {
    return (
        <View style={tw`gap-6`}>
            <View style={tw` w-full flex-row items-center border-inactive rounded-full border px-2 gap-2`}>
                <TextInput
                    style={tw`flex-1 h-12 items-center justify-center text-primaryColor`}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    placeholderTextColor="#888"
                    clearButtonMode="while-editing"
                    returnKeyType="search"
                    autoCapitalize="none"
                />
            </View>
        </View>
    )
}

export default GlobalSearch;