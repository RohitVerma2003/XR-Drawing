import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  Image,
  StyleSheet,
  PanResponder,
  Dimensions,
  Pressable,
} from 'react-native'
import { Camera, useCameraDevices } from 'react-native-vision-camera'
import ImageUtils from '../components/ImageUtils'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CameraHeader from '../components/CameraHeader'

const LiveCamera = () => {
  const [hasPermission, setHasPermission] = useState(false)
  const devices = useCameraDevices()
  const device =
    devices.back || devices.find(d => d.position === 'back') || devices[0]

  const route = useRoute()
  const { imageUri } = route.params

  const [windowDimensions, setWindowDimensions] = useState(() => {
    const { width, height } = Dimensions.get('window')
    return { width, height }
  })

  const [imageSize, setImageSize] = useState(1)
  const [imageOpacity, setImageOpacity] = useState(1)
  const [enableUtils, setEnableUtils] = useState(true)
  const [lock , setLock] = useState(false);
  const [rotate , setRotate] = useState(0);
  const [flash , setFlash] = useState(false);

  const toggleFlash = () => {
    setFlash(!flash)
  }

  const toggleUtils = () => {
    setEnableUtils(!enableUtils)
  }

  const handleRotate = ()=>{
    setRotate((rotate + 90) % 360);
  }

  const [scale, setScale] = useState({
    width: 200,
    height: 200,
  })

  const [position, setPosition] = useState({
    x: windowDimensions.width / 2 - scale.width / 2,
    y: windowDimensions.height / 2 - scale.height / 2,
  })

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      if(lock) return;
      return true
    },
    onPanResponderMove: (evt, gestureState) => {
      if(lock) return;
      setPosition({
        ...position,
        x: gestureState.moveX - scale.width / 2,
        y: gestureState.moveY - scale.height / 2,
      })
    },
  })

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const cameraPermission = await Camera.requestCameraPermission()
        if (Platform.OS === 'android') {
          const androidPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.CAMERA,
          )
          if (!androidPermission) {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'We need access to your camera to show the live view.',
                buttonPositive: 'OK',
              },
            )
            setHasPermission(granted === PermissionsAndroid.RESULTS.GRANTED)
            return
          }
        }

        setHasPermission(cameraPermission === 'granted')
      } catch (error) {
        console.error('Permission error:', error)
        setHasPermission(false)
      }
    }

    requestPermission()
  }, [])

  if (!hasPermission) {
    return (
      <View className='flex-1 items-center justify-center bg-[#fee2e2]'>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Camera permission not granted
        </Text>
        <Text style={{ marginTop: 10 }}>
          Please enable camera permissions in app settings
        </Text>
      </View>
    )
  }

  if (device == null) {
    return (
      <View className='flex-1 items-center justify-center bg-[#fff3cd]'>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Loading camera...
        </Text>
      </View>
    )
  }

  return (
    <View className='flex-1 relative'>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={hasPermission}
        torch={flash ? 'on' : 'off'}
      />

      {enableUtils && <CameraHeader/>}

      {!enableUtils && (
        <View className='absolute bottom-5 right-5 z-[100]'>
          <Pressable onPress={toggleUtils}>
            <Icon name='open-in-full' size={20} />
          </Pressable>
        </View>
      )}

      {enableUtils && (
        <View className='absolute w-full h-20 bg-custom-gray bottom-0 z-[100]'>
          <ImageUtils
            setImageSize={setImageSize}
            setImageOpacity={setImageOpacity}
            imageSize={imageSize}
            imageOpacity={imageOpacity}
            toggleUtils={toggleUtils}
            lock={lock}
            setLock={setLock}
            handleRotate = {handleRotate}
            toggleFlash={toggleFlash}
          />
        </View>
      )}

      {imageUri && (
        <View
          {...panResponder.panHandlers}
          style={[
            {
              left: position.x,
              top: position.y,
              width: scale.width,
              height: scale.height,
            },
          ]}
          className='absolute'
        >
          <Image
            source={{ uri: imageUri }}
            className='w-full h-full'
            resizeMode='contain'
            style={{ transform: [{ scale: imageSize } , {rotate : `${rotate}deg`}], opacity: imageOpacity }}
          />
        </View>
      )}
    </View>
  )
}

export default LiveCamera
