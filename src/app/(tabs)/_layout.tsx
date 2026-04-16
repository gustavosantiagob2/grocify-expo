import { useGroceryStore } from "@/store/grocery-store";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { Badge, Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";

export default function TabsLayout() {
  const { isSignedIn, isLoaded } = useAuth();
  const {loadItems, items} = useGroceryStore();
  const {colorScheme} = useColorScheme();
  const isDark = colorScheme === "dark";
  const tabTintColor = isDark ? "hsl(142 70% 54%)" : "hsl(147 75% 33%)";

  useEffect( () => {
    loadItems();
  }, [] )

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/(auth)/sign-in" />;
    // ../(auth)/sign-in

  return (
    <NativeTabs tintColor={tabTintColor}>
      <NativeTabs.Trigger name="index">
        <Label>List</Label>
        <Icon sf={{ default: "list.bullet.clipboard", selected: "list.bullet.clipboard.fill", }} drawable="sel_list" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="planner">
        <Label>Planner</Label>
        <Icon sf={{ default: "plus.circle", selected: "plus.circle.fill", }} drawable="sel_planner" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="insights">
        <Label>Insights</Label>
        <Icon sf={{ default: "chart.bar", selected: "chart.bar.fill", }} drawable="sel_insights" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
