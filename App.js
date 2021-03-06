import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './components/home/home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
        name='Carousel App'
        component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
