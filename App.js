import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import News from './components/News';
import {roundToNearestPixel} from 'react-native/Libraries/Utilities/PixelRatio';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#524A4E',
          },
          headerTintColor: '#FDEFF4',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="News"
          component={News}
          options={({route}) => ({title: route.params.category})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
