import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import {Provider as PaperProvider} from 'react-native-paper';
import Customers from './screens/Customers';
import Delivery from './screens/Delivery';
import Events from './screens/Events';
import CustomerFinance from './screens/CustomerFinance';
import CreateDelivery from './screens/CreateDelivery';
import CreateEvent from './screens/CreateEvent';
import {RealmProvider} from './context/RealmContext';
import 'react-native-get-random-values';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <PaperProvider>
      <RealmProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Customers" component={Customers} />
            <Stack.Screen name="Delivery" component={Delivery} />
            <Stack.Screen name="Events" component={Events} />
            <Stack.Screen name="CustomerFinance" component={CustomerFinance} />
            <Stack.Screen name="CreateDelivery" component={CreateDelivery} />
            <Stack.Screen name="CreateEvent" component={CreateEvent} />
          </Stack.Navigator>
        </NavigationContainer>
      </RealmProvider>
    </PaperProvider>
  );
};

export default App;
