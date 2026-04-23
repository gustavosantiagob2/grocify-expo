import { View, Text, TextInput, Pressable, Alert } from 'react-native'
import React, { act, useState } from 'react'
import { GroceryCategory, GroceryPriority, useGroceryStore } from '@/store/grocery-store'
import { FontAwesome6 } from '@expo/vector-icons';


const categories:GroceryCategory[] = ["Produce", "Dairy", "Bakery", "Pantry", "Snacks"];
const priorities:GroceryPriority[] = ["low", "medium", "high"];
const categoryItens = {Produce: "leaf", Dairy: "cow", Bakery: "bread-slice", Pantry: "box-open", Snacks: "cookie-bite" };

const PlannerFormCard = () => {
    const {error, addItem} = useGroceryStore();
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1")
    const [category, setCategory] = useState<GroceryCategory>("Produce");
    const [priority, setPriority] = useState<GroceryPriority>("medium");
    const canCreate = name.trim().length > 0;
    const handleQuantityChange = (value:string) => {
        //this regex is used to remove all non-numeric characters from input
        setQuantity(value.replace(/[^0-9]/g, ""));
    };
    const createItem = async () =>{   
        await addItem({ name: name.trim(), category, priority, quantity: Number(quantity), });

        Alert.alert("Success", "Item created")

        //reset form
        setName("");
        setQuantity("1");
        setCategory("Produce");
        setPriority("medium");
    }


  return (
    <View className='rounded-3xl border border-border dark:border-border-dark bg-card dark:bg-card-dark p-4'>
     
    {/* Name */}
      <Text className='text-sm font-semibold text-foreground dark:text-foreground-dark'>Item name</Text>
      <View className='mt-2 flex-row items-center rounded-2xl border border-border dark:border-border-dark bg-muted dark:bg-muted-dark px-4 py-4'>
        <FontAwesome6 name="bag-shopping" size={13} color="#5b7567"/>
        <TextInput 
         className='ml-3 flex-1 text-base text-foreground dark:text-foreground-dark' 
         value={name} onChangeText={setName} placeholder='Ex: BlueBerries' placeholderTextColor="#8aa397"
        />
      </View>

    {/* Quantity */}
    <Text className='mt-4 text-sm font-semibold text-foreground dark:text-foreground-dark'>Quantity</Text>
    <View className='mt-2 flex-row items-center rounded-2xl border border-border dark:border-border-dark bg-muted dark:bg-muted-dark px-4 py-3'>
        <FontAwesome6 name ="hashtag" size={13} color="#5b7567"/>
        <TextInput 
         className='ml-3 flex-1 text-base text-foreground dark:text-foreground-dark' 
         value={quantity} onChangeText={handleQuantityChange} placeholder='1' placeholderTextColor="#8aa397" keyboardType='number-pad'
        />
    </View>


    {/* Categories */}
    <Text className='mt-4 text-sm font-semibold text-foreground dark:text-foreground-dark'>Category</Text>
    <View className='mt-2 flex-row flex-wrap gap-2'>
        {categories.map( (option) => {
            const active = option === category;
            return(
                <Pressable
                    className={`flex-row items-center rounded-full px-4 py-2
                         ${
                            active ? "bg-primary dark:bg-primary-dark" : "bg-secondary dark:bg-secondary-dark"
                         }`}
                    key={option}
                    onPress={() => setCategory(option)}
                >
                    <FontAwesome6 name={categoryItens[option]} size={12} color={active ? "#fff" : "#486856"} />
                    <Text className={`ml-2 text-sm font-semibold ${active ? "text-primary-foreground" : "text-secondary-foreground"}`}>
                        {option}
                    </Text>
                </Pressable>
            );
        })}

    </View>

    {/* Priority */}
    
    <Text className='mt-4 text-sm font-semibold text-foreground dark:text-foreground-dark'>Priority</Text>
    <View className='mt-2 flex-row flex-wrap gap-2'>
        {priorities.map( (option) => {
            const active = option === priority;
            const icon = option === "high" ? "bolt" : option === "medium" ? "compass" : "seedling"; 
            return(
                <Pressable
                    className={`flex-row items-center rounded-full px-4 py-2
                         ${
                            active ? "bg-primary dark:bg-primary-dark" : "bg-secondary dark:bg-secondary-dark"
                         }`}
                    key={option}
                    onPress={() => setPriority(option)}
                >
                    <FontAwesome6 name={icon} size={12} color={active ? "#fff" : "#486856"} />
                    <Text className={`ml-2 text-sm font-semibold ${active ? "text-primary-foreground" : "text-secondary-foreground"}`}>
                        {option}
                    </Text>
                </Pressable>
            );
        })}

    </View>
    <Pressable 
        className={`mt-5 flex-row items-center justify-center rounded-2xl py-3 
        ${
            canCreate ? "bg-primary dark:bg-primary-dark" : "bg-muted dark:bg-muted-dark"}
        `}
        onPress={createItem}
        disabled={!canCreate}
        >
            <FontAwesome6 name="plus" size={14} color={canCreate ? "#ffffff" : "#7a9386"}/>
            <Text 
            className={`ml-2 text-base *:font-semibold 
            ${
                canCreate ? "text-primary-foreground" : "text-muted-foreground"
            }`}>Add to Grocery List</Text>
    </Pressable>

    { error ? (
        <View 
        className='mt-3 rounded-2xl border border-destructive dark:border-destructive-dark bg-destructive dark:bg-destructive-dark px-3 py-2'>
            <Text className='text-sm text-white text-center uppercase'>{error}</Text>
        </View>
    ) : null
    }

    </View>
  );
};



export default PlannerFormCard