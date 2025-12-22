import CalendarView from '@/src/components/CalendarComponent';
import GlobalTopBar from '@/src/components/GlobalTopBar';
import PageWrapper from '@/src/components/PageWrapper';
import AppointmentsforToday from '@/src/components/ui/planner/AppointmentsforToday';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function Planner() {

    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Planner" menu={true} addIiocns={true} route={() => router.push("/planner-view")} />
            <View style={tw`flex-1`} >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={tw`flex-col gap-4 pb-16`}  >
                    <View style={tw`mx-2 mt-2`} >
                        <CalendarView />
                    </View>
                    <AppointmentsforToday />
                </ScrollView>
            </View>
        </PageWrapper>
    )
}