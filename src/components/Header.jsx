import React from 'react'
import { Image, Text, View } from 'react-native'

const Header = () => {
  return (
    <View className='w-full h-1/5 rounded-b-2xl bg-custom-white flex flex-row items-center justify-center gap-5'>
        <Image source={require('../../assets/images/logo5.png')} width={100} height={100} className='w-20 h-20'/>
        <Text className='font-sketch-bold text-5xl'>XR Drawing</Text>
    </View>
  )
}

export default Header
