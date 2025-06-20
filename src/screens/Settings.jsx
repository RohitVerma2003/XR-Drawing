import React from 'react'
import { Pressable, Text, View } from 'react-native'

const Settings = () => {
  return (
    <View className='flex-1 w-full h-full justify-start items-center bg-custom-gray py-16 gap-5'>
      <Pressable
        className='w-4/5 p-8 rounded-md bg-custom-purple'
      >
        <Text className='text-2xl text-center text-white font-sketch-bold'>
          Privacy Policy
        </Text>
      </Pressable>
      <Pressable
        className='w-4/5 p-8 rounded-md bg-custom-purple'
      >
        <Text className='text-2xl text-center text-white font-sketch-bold'>
          Terms and Conditions
        </Text>
      </Pressable>
    </View>
  )
}

export default Settings
