import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import AddExpenditure from '@/src/components/ui/income-tracker/AddExpenditure';
import AddIncome from '@/src/components/ui/income-tracker/AddIncome';
import tw from '@/src/lib/tailwind';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function GroupsScreen() {
    const [activeTab, setActiveTab] = useState<string>('income');

    const tabs = [
        { key: 'income', label: 'Add Income' },
        { key: 'expenditure', label: 'Add Expenditure' },
    ];

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} menu={false} />
            <View style={tw`flex-1 flex-col gap-6 bg-white `}>
                {/* Top Bar */}

                {/* Tabs */}
                <View style={tw`flex-row mb-2`}>
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <TouchableOpacity
                                key={tab.key}
                                onPress={() => setActiveTab(tab.key)}
                                style={[
                                    tw`flex-1 py-3 items-center border-b-2`,
                                    isActive ? tw`border-[#C9A227]` : tw`border-[#989898]`,
                                ]}
                            >
                                <Text
                                    style={[
                                        tw`text-sm font-montserrat-600`,
                                        { color: isActive ? '#C9A227' : '#989898' }, // ✅ Active / inactive colors
                                    ]}
                                >
                                    {tab.label}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Content */}
                <View style={tw`flex-1`}>
                    {activeTab === 'income' ? <AddIncome /> : <AddExpenditure />}
                </View>
            </View>
        </PageWrapper>
    );
}
