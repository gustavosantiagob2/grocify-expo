import { useClerk, useUser } from "@clerk/expo"
import { View, Text, Image, Pressable } from 'react-native'
import React, { use } from 'react'
import { FontAwesome6 } from "@expo/vector-icons";

const UserProfile = () => {
 const { signOut } = useClerk();
 const { user } = useUser();
 const email = user?.primaryEmailAddress?.emailAddress;
 const displayName = user?.fullName || email?.split("@")[0];

  return (
    <View className="rounded-3xl border border-border dark:border-border-dark bg-accent dark:bg-card-dark p-4">
        <View className="flex-row items-center gap-3">
            <View className="size-12 rounded-full overflow-hidden">
                <Image source={{ uri: user?.imageUrl}} style={{width: "100%", height:"100%"}} />
            </View>
            <View className="flex-1">
                <Text className="text-xs uppercase tracking-[1px] text-muted-foreground"> Signed in as</Text>
                <Text className="mt-1 text-lg font-bold text-foreground dark:text-foreground-dark">{displayName}</Text>
                <Text className="text-sm text-muted-foreground">{email}</Text>
            </View>
            <Pressable className="h-9 w-9 items-center justify-center rounded-xl bg-destructive dark:bg-destructive-dark">
                <FontAwesome6 name="right-from-bracket" size={13} color="#d45f58"/>
            </Pressable>
        </View>
    </View>
  )
}

export default UserProfile