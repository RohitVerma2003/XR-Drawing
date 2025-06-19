import Slider from '@react-native-community/slider'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const ImageUtils = ({setImageSize , setImageOpacity , imageOpacity , imageSize , toggleUtils , lock , setLock , handleRotate , toggleFlash}) => {
  const [selectedIcon, setSelectedIcon] = useState(null)

  const handlePress = value => {
    setSelectedIcon(value)
  }

  const handleBack = () => {
    setSelectedIcon(null)
  }

  const handleSize = (e)=>{
    setImageSize(1 + (e / 100));
  }

  const handleOpacity = (e)=>{
    setImageOpacity(e);
  }

  const handleLock = ()=>{
    setLock(!lock);
  }

  if (!selectedIcon) {
    return (
      <View className='flex-1 w-full justify-evenly items-center flex-row'>
        <View>
          <Pressable onPress={() => handlePress('opacity')}>
            <Icon name='opacity' size={25} />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => handlePress('size')}>
            <Icon name='photo-size-select-large' size={25} />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={handleLock}>
            <Icon name='lock' size={25} color={lock ? "red" : ''}/>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={handleRotate}>
            <Icon name='rotate-left' size={25}/>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={toggleFlash}>
            <Icon name='flash-on' size={25}/>
          </Pressable>
        </View>
        <View>
          <Pressable onPress={toggleUtils}>
            <Icon name='open-in-full' size={25} />
          </Pressable>
        </View>
      </View>
    )
  }

  if (selectedIcon === 'opacity') {
    return (
      <View className='w-full h-full flex-1 flex-row justify-evenly items-center'>
        <Pressable onPress={handleBack}>
          <Icon name='arrow-back' size={25} />
        </Pressable>
        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor='#424874'
            maximumTrackTintColor='#A6B1E1'
            thumbTintColor='#424874'
            onValueChange={handleOpacity}
            value={imageOpacity}
          />
        </View>
      </View>
    )
  }

  if (selectedIcon === 'size') {
    return (
      <View className='w-full h-full flex-1 flex-row justify-evenly items-center'>
        <Pressable onPress={handleBack}>
          <Icon name='arrow-back' size={25} />
        </Pressable>
        <View>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={250}
            minimumTrackTintColor='#424874'
            maximumTrackTintColor='#A6B1E1'
            thumbTintColor='#424874'
            onValueChange={handleSize}
            value={imageSize}
          />
        </View>
      </View>
    )
  }

  return <View className='w-full h-full'></View>
}

export default ImageUtils
