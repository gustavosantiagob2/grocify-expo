import { View, Text, ScrollView } from "react-native";
import React from "react";
import TabScreenBackground from "@/components/TabScreenBackground";
import UserProfile from "@/components/insights/UserProfile";
import InsightsCategorySection from "@/components/insights/InsightsCategorySection";
import InsightsPriorityySection from "@/components/insights/InsightsPriorityySection";
import InsightsStatsSection from "@/components/insights/InsightsStatsSection";
import ClearCompletedButton from "@/components/insights/ClearCompletedButton";

const InsightsScreen = () => {
  return (
    <ScrollView
      className="flex-1 bg-background dark:bg-background-dark py-0"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14,}}
      contentInsetAdjustmentBehavior="automatic"
    >
      <TabScreenBackground />
      <UserProfile />
      <InsightsStatsSection/>
      <InsightsCategorySection/>
      <InsightsPriorityySection/>
      <ClearCompletedButton/>
    </ScrollView>
  );
};

export default InsightsScreen;
