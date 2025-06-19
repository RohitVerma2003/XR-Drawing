import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const CameraHeader = () => {
  const navigation = useNavigation()

  const handleBack = () => {
    navigation.goBack()
  }

const handleComplete = ()=>{
    navigation.goBack();
    navigation.navigate('Completed')
}

  return (
    <View className='w-full absolute top-0 left-0 flex items-center'>
      <View className='w-5/6 h-20 flex-1 justify-between items-center flex-row'>
        <View>
          <Pressable onPress={() => handleBack()}>
            <Icon name='arrow-back' size={30} />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => handleComplete()} className='p-2 rounded-md bg-custom-purple'>
            <Text className='font-sketch-bold text-white'>Completed</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default CameraHeader
