import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { ScrollView, Text } from 'react-native'

const Faq = () => {
    const text = `
It is a long established fact that a reader will be distract by the readable content of a page when looking at its layout. The point of using a Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to the using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model & text.

It is a long established fact that a reader will be distract by the readable content of a page when looking at its layout. The point of using a Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to the using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model & text.

It is a long established fact that a reader will be distract by the readable content of a page when looking at its layout. The point of using a Lorem Ipsum is that it has a more normal distribution.
`;
    return (
        <PageWrapper>
            <GlobalTopBar title='Terms & Condition' icon={true} menu={false} />
            <ScrollView contentContainerStyle={tw``} showsVerticalScrollIndicator={false}>
                <Text style={tw`text-text17 leading-7 text-secondaryColor font-sfProRegular`}>
                    {text}
                </Text>
            </ScrollView>
        </PageWrapper>
    )
}

export default Faq