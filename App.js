import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Forecasts from './src/pages/Forecasts';
import About from './src/pages/About';
import Menu from './src/pages/Menu';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#1c3c94',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >


        <Stack.Screen
          name="Menu"
          component={Menu}
          options={
            { title: "Menu" }
          } />

        <Stack.Screen
          name="Forecasts"
          component={Forecasts}
          options={
            { title: "Previsões" }
          } />
        <Stack.Screen
          name="About"
          component={About}
          options={
            { title: "Sobre" }
          } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;