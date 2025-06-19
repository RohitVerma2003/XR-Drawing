import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { View } from 'react-native'

const Completed = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.goBack()
  }
  return (
    <View className='w-full h-full flex-1 items-center justify-evenly bg-custom-gray'>
      <View className='w-full flex items-center justify-center gap-5'>
        <Text className='text-4xl font-sketch-bold m-2'>Congratulations !!!</Text>
      </View>
      <View className='w-full flex items-center justify-center gap-2'>
        <Pressable
          className='w-4/5 p-8 rounded-md bg-custom-purple'
          onPress={handleBack}
        >
          <Text className='text-2xl font-sketch-bold text-white text-center'>
            Back
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Completed
