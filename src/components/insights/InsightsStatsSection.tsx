import { View, Text } from 'react-native'
import React from 'react'
import { useGroceryStore } from '@/store/grocery-store'
import { FontAwesome6 } from '@expo/vector-icons';

const InsightsStatsSection = () => {
 const { items } = useGroceryStore();
 const totalItems = items.length;
 const completedItems = items.filter((item) => item.purchased).length;
 const pendingItems = totalItems - completedItems;
 const completionRate = totalItems ? Math.round( (completedItems / totalItems) * 100 ) : 0

  return (
    <>
      <View className="flex-row gap-2">

        <View className='flex-1 rounded-3xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-4'>
            <View className='h-8 w-8 items-center justify-center rounded-xl bg-primary dark:bg-primary-dark'>
                <FontAwesome6 name="clock" size={18} color="#fff"/>
            </View>
            <Text className='mt-3 text-xs uppercase tracking-[1px] text-muted-foreground'> Pending </Text>
            <Text className='mt-1 text-3xl font-extrabold text-foreground dark:text-foreground-dark'>{pendingItems}</Text>
        </View>

        <View className='flex-1 rounded-3xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-4'>
            <View className='h-8 w-8 items-center justify-center rounded-xl bg-primary dark:bg-primary-dark'>
                <FontAwesome6 name="check" size={18} color="#fff"/>
            </View>
            <Text className='mt-3 text-xs uppercase tracking-[1px] text-muted-foreground'> Completed </Text>
            <Text className='mt-1 text-3xl font-extrabold text-foreground dark:text-foreground-dark'>{completedItems}</Text>
        </View>

        <View className='flex-1 rounded-3xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-4'>
            <View className='h-8 w-8 items-center justify-center rounded-xl bg-primary dark:bg-primary-dark'>
                <FontAwesome6 name="layer-group" size={18} color="#fff"/>
            </View>
            <Text className='mt-3 text-xs uppercase tracking-[1px] text-muted-foreground'> Total </Text>
            <Text className='mt-1 text-3xl font-extrabold text-foreground dark:text-foreground-dark'>{totalItems}</Text>
        </View>

      </View>

        <View className='rounded-3xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-4'>
            <View className='flex-row items-center justify-between '>
                <Text className='text-sm font-semibold text-foreground dark:text-foreground-dark'> Completion rate </Text>
                <Text className='text-sm font-semibold text-primary dark:text-primary-dark'>{completionRate}%</Text>
            </View>
            <View className='mt-3 overflow-hidden rounded-full bg-secondary dark:bg-secondary-dark'>
                <View className='h-3 rounded-full bg-ring dark:bg-ring-dark' style={{width: `${Math.max(2, completionRate)}%`}}/>
            </View>
        </View>

    </>
  )
}

export default InsightsStatsSection