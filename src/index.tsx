import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import Customers from './screens/Customers';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Customers"
            component={Customers}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
