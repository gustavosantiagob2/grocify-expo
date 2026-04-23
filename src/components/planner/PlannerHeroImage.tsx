import { View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import React from "react";

const PlannerHeroImage = () => {
  return (
    <View className="overflow-hidden rounded-[30px] border border-border dark:border-border-dark bg-card dark:bg-card-dark">
      <Image
        className="h-56 w-full"
        resizeMode="cover"
        source={require("../../../assets/images/hero.png")}
      />
      <LinearGradient 
        pointerEvents="none"
        colors={['rgba(0,0,0,0.4)', 'transparent']}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        style={{ position: "absolute", bottom:0, left:0, right:0, height: 72 }}
      />
      <LinearGradient 
        pointerEvents="none"
        colors={['transparent','rgba(0,0,0,0.4)' ]}
        start={{x:0.5, y:0}}
        end={{x:0.5, y:1}}
        style={{ position: "absolute", bottom:0, left:0, right:0, height: 72 }}
      />
    </View>
  );
};

export default PlannerHeroImage;
