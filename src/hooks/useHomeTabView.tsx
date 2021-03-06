import React from 'react';
import {ReactNode, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SceneMap, TabBar} from 'react-native-tab-view';
import HomeCalendar from '../screens/Home/HomeCalendar';
import HomeCustomers from '../screens/Home/HomeCustomers';
import HomeDeliveries from '../screens/Home/HomeDeliveries';
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
  };
};

export default useHomeTabView;
