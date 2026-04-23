import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useGroceryStore } from "@/store/grocery-store";
import TabScreenBackground from "@/components/TabScreenBackground";
import { FontAwesome6 } from "@expo/vector-icons";
import PlannerHeroImage from "@/components/planner/PlannerHeroImage";
import PlannerFormCard from "@/components/planner/PlannerFormCard";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller"

const PlannerScreen = () => {
  const { items } = useGroceryStore();
  const PendingCount = items.filter((item) => !item.purchased).length;
  const highPriorityCount = items.filter((item) => !item.purchased && item.priority === "high",).length;
  const totalQuantity = items.filter((item) => !item.purchased).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <KeyboardAwareScrollView
      bottomOffset={80}
      className="flex-1 bg-background dark:bg-background-dark py-4"
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding:20, gap:14,}}
      keyboardShouldPersistTaps="handled"
    >
      <TabScreenBackground/>
      <View className="gap-4 rounded-3xl border border-border dark:border-border-dark bg-card/70 dark:bg-card-dark/70 p-5">
        <View className="flex-row items-start justify-between">
          <View className="flex-1 pr-4">
            <Text className="text-xs font-semibold uppercase tracking-[1.2px] text-muted-foreground"> Grocery planner </Text>
            <Text className="mt-1 text-3xl font-bold leading-9 text-foreground dark:text-foreground-dark"> Plan smarter, shop calmer</Text>
            <Text className="mt-2 text-sm leading-5 text-muted-foreground">
              Organize your next grocery run with categories, quantities and priority in one place.
            </Text>
          </View>
          <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary dark:bg-primary-dark">
            <FontAwesome6 name="wand-magic-sparkles" size={18} color="#ffffff"/>
          </View>
        </View>
        <View className="flex-row gap-2">
          <View className="flex-1 rounded-2xl border border-border dark:border-border-dark bg-background/80 dark:bg-background-dark/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">Peding</Text>
            <Text className="mt-1 text-xl font-bold text-foreground dark:text-foreground-dark">{PendingCount}</Text>
          </View>
          <View className="flex-1 rounded-2xl border border-border dark:border-border-dark bg-background/80 dark:bg-background-dark/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">High priority</Text>
            <Text className="mt-1 text-xl font-bold text-foreground dark:text-foreground-dark">{highPriorityCount}</Text>
          </View>
          <View className="flex-1 rounded-2xl border border-border dark:border-border-dark bg-background/80 dark:bg-background-dark/80 p-3">
            <Text className="text-xs font-medium uppercase tracking-[1px] text-muted-foreground">Units</Text>
            <Text className="mt-1 text-xl font-bold text-foreground dark:text-foreground-dark">{totalQuantity}</Text>
          </View>
        </View>
      </View>
      <PlannerHeroImage/>
      <View className="px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">Build your list</Text>
        <Text className="mt-1 text-sm text-muted-foreground">Add items with the right quantity, category and urgency</Text>
      </View> 
      <View style={{paddingBottom: 130}}>
        <PlannerFormCard/>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PlannerScreen;
