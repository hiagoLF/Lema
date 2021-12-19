/* eslint-disable no-alert */
import React from 'react';
import {ReactNode, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SceneMap, TabBar} from 'react-native-tab-view';
import HomeCalendar from '../screens/HomeCalendar';
import HomeCustomers from '../screens/HomeCustomers';
import HomeDeliveries from '../screens/HomeDeliveries';

const renderScene = SceneMap({
  calendar: HomeCalendar,
  customers: HomeCustomers,
  deliveries: HomeDeliveries,
});

const routes = [
  {
    key: 'calendar',
    title: 'Agenda',
  },
  {
    key: 'customers',
    title: 'Clientes',
  },
  {
    key: 'deliveries',
    title: 'Entregas',
  },
];

const useHomeTabView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const {colors} = useTheme();

  const handleLogOutButtonPress = () => {
    //@ts-ignore
    alert('Sair');
  };

  const renderTabBar = (props: any): ReactNode => {
    return <TabBar {...props} style={{backgroundColor: colors.primary}} />;
  };

  return {
    index,
    routes,
    renderScene,
    setIndex,
    layout,
    renderTabBar,
    handleLogOutButtonPress,
  };
};

export default useHomeTabView;
