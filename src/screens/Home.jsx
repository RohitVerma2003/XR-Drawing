import { useNavigation } from '@react-navigation/native'
import { View, Text, Pressable } from 'react-native'
import Header from '../components/Header'

const Home = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('Draw')
  }

  return (
    <>
      <View className='flex-1 items-center justify-start bg-custom-gray gap-10'>
        <Header />
        <View className='flex w-full items-center justify-center gap-5'>
          <Pressable
            className='w-4/5 p-8 rounded-md bg-custom-purple'
            onPress={handlePress}
          >
            <Text className='text-2xl text-center text-white font-sketch-bold'>
              Draw Now!!!
            </Text>
          </Pressable>
          <Pressable
            className='w-4/5 p-8 rounded-md bg-custom-purple'
            onPress={() => navigation.navigate('Settings')}
          >
            <Text className='text-2xl text-center text-white font-sketch-bold'>
              Settings
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}

export default Home
