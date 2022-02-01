import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import Customers from './screens/Customers';
import Delivery from './screens/Delivery';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Customers" component={Customers} />
          <Stack.Screen name="Delivery" component={Delivery} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
