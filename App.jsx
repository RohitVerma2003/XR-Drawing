/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'
import Home from './src/screens/Home'
import Draw from './src/screens/Draw'
import './global.css'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LiveCamera from './src/screens/LiveCamera'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Completed from './src/screens/Completed'
import Settings from './src/screens/Settings'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackVisible: true, // show back arrow
        headerTitle: '', // no title
        headerTransparent: true, // optional: transparent header
        headerShadowVisible: false, // optional: remove bottom border/shadow
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Draw' component={Draw} />
      <Stack.Screen name='LiveCamera' component={LiveCamera} options={{headerShown : false}}/>
      <Stack.Screen name='Completed' component={Completed} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  )
}

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <SafeAreaView className='w-full h-full'>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
