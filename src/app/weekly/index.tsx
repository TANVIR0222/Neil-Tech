import GlobalTopBar from '@/src/components/GlobalTopBar'
import PageWrapper from '@/src/components/PageWrapper'
import TotalProgress from '@/src/components/ui/planner/TotalProgress'
import WeeklyProgress from '@/src/components/ui/planner/WeeklyProgress'
import WeeklyToDoProgress from '@/src/components/ui/planner/WeeklyToDoProgress'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function NewPage() {
  return (
    <PageWrapper>
      <GlobalTopBar icon={true} title="Weekly To-Do List" menu={false} addIiocns={true} route={() => router.push("/weekly/add-task-modal")} />
      <View style={tw`flex-1`}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`flex-col gap-4  pb-20`}
        >
          <WeeklyToDoProgress />
          <WeeklyProgress />
          <TotalProgress />
        </ScrollView>
      </View>

    </PageWrapper >
  )
}