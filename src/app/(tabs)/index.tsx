import CompletedItems from "@/components/list/CompletedItems";
import ListHeroCard from "@/components/list/ListHeroCard";
import PadingItemCard from "@/components/list/PadingItemCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useGroceryStore } from "@/store/grocery-store";
import { Show, useClerk, useUser } from "@clerk/expo";
import { UserButton } from "@clerk/expo/native";
import { Pressable, StyleSheet, Text, View, ScrollView, FlatList } from "react-native";


export default function ListScreen() {
  const {items} = useGroceryStore();
  const pedingItems = items.filter( (item) => !item.purchased )

  return (
        <FlatList
        className="flex-1 bg-background dark:bg-background-dark"
        data={pedingItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PadingItemCard item={item}/>}
        contentContainerStyle={{padding: 20, gap:14}}
        contentInsetAdjustmentBehavior="automatic"
        ListHeaderComponent={
          <View style={{gap:14}}>
            <TabScreenBackground/>
            <ListHeroCard/>
            <View className="flex-row items-center justify-between px-1">
              <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">Shopping items</Text>
              <Text className="text-sm text-muted-foreground">{pedingItems.length} active</Text>
            </View>
          </View>
        }
        ListEmptyComponent={
        <View className="flex-1 items-center">
          <Text className="text-sm font-semibold text-primary-foreground">No active</Text>
        </View>

      }
        ListFooterComponent={
          <View style={{paddingBottom:120}}>
            <CompletedItems/>
          </View>
      }
        />
  );
}


//FIRST VERSION WITH ITEMS.MAP
/* 
   <View className="flex-1 bg-background dark:bg-background-dark">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom:150 , gap: 14}}
      >
      <TabScreenBackground />
      <ListHeroCard/>
      <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">{pedingItems.length} active</Text>
      </View>
      
        {pedingItems.map( item => <PadingItemCard key={item.id} item={item} /> )}

        <CompletedItems/>

      </ScrollView>
    </View>
*/