import { View, Text } from 'react-native'
import React from 'react'
import { useGroceryStore } from '@/store/grocery-store'

const InsightsPriorityySection = () => {
 const { items } = useGroceryStore();
 const highPrioriry = items.filter((item) => item.priority === "high" && !item.purchased).length;
 const highPriorityTone = highPrioriry === 0 ? "Everything critical is covered." : "Handle these first for a smoother trip.";

  return (
    <View className='rounded-3xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-4'>
        <View className='flex-row items-center justify-between'>
            <Text className='text-sm font-semibold text-foreground dark:text-foreground-dark'>High priority remaning</Text>
            <View 
                className={`rounded-full px-0 py-1 ${highPrioriry ? "bg-priority-high" : "bg-priority-low" }`}
            >
                <Text 
                    className={`text-xs font-bold uppercase ${
                        highPrioriry ? "text-priority-high-foreground" : "text-priority-low-foreground"
                    }`}
                >
                    {highPrioriry ? "Action" : "clear"}
                </Text>
            </View>
        </View>
        <Text className='mt-1 text-3xl font-extrabold text-foreground dark:text-foreground-dark'>{highPrioriry}</Text>
        <Text className='mt-1 text-sm text-muted-foreground'>{highPriorityTone}</Text>
    </View>
  )
}

export default InsightsPriorityySection