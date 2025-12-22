import CalendarView from '@/src/components/CalendarComponent'
import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import AnalyticsGraph from '@/src/components/ui/income-tracker/AnalyticsGraph'
import IncomeNewView from '@/src/components/ui/income-tracker/IncomeNewView'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function index() {
    return (
        <PageWrapper>
            <GlobalTopBar icon={true} title="Income Tracker" menu={false} addIiocns={false} />
            <ScrollView showsVerticalScrollIndicator={false}  >
                <View style={tw`flex-1 flex-col gap-5`} >
                    <View style={tw`mx-2 mt-2`} >
                        <CalendarView />
                    </View>
                    <AnalyticsGraph />
                    <IncomeNewView income={true} />
                </View>
            </ScrollView>
        </PageWrapper>
    )
}