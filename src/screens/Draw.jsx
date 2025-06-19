import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, PermissionsAndroid, Pressable, Text, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

const Draw = () => {
  const [imageUri, setImageUri] = useState('')
  const navigation = useNavigation()

  const handleGallery = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
    )
    if (granted) {
      const image = await launchImageLibrary({ mediaType: 'photo' })
      if (image?.didCancel) return

      if (image.assets[0] !== null) {
        setImageUri(image.assets[0].uri)
        navigation.navigate('LiveCamera', { imageUri: image.assets[0].uri })
      }
    }
  }

  const handleCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    )
    if (granted) {
      const image = await launchCamera({ mediaType: 'photo' })
      if (image?.didCancel) return

      if (image.assets[0] !== null) {
        setImageUri(image.assets[0].uri)
        navigation.navigate('LiveCamera', { imageUri: image.assets[0].uri })
      }
    }
  }

  return (
    <View className='flex-1 justify-center bg-custom-gray'>
      <View className='w-full h-full flex-1 mt-20 items-center gap-5'>
        <Pressable
          className='w-4/5 p-8 rounded-md bg-custom-purple'
          onPress={handleGallery}
        >
          <Text className='text-2xl text-center text-white font-sketch-bold'>From Gallery</Text>
        </Pressable>
        <Pressable
          className='w-4/5 p-8 rounded-md bg-custom-purple'
          onPress={handleCamera}
        >
          <Text className='text-2xl text-center text-white font-sketch-bold'>From Camera</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Draw
