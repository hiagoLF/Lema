import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {
  NavigationState,
  Route,
  SceneMap,
  SceneRendererProps,
  TabBar,
} from 'react-native-tab-view';
import CalendarPage from '../pages/Home/components/CalendarPage';
import CustomersPage from '../pages/Home/components/CustomersPage';
import DeliveriesPage from '../pages/Home/components/DeliveriesPage';

const routes = [
  {key: 'customers', title: 'Clientes'},
  {key: 'calendar', title: 'Calendário'},
  {key: 'deliveries', title: 'Entregas'},
];

const renderScene = SceneMap({
  customers: CustomersPage,
  calendar: CalendarPage,
  deliveries: DeliveriesPage,
});

function renderTabBar(
  props: SceneRendererProps & {
    navigationState: NavigationState<Route>;
  },
) {
  return <TabBar {...props} tabStyle={style.tabBar} />;
}

const style = StyleSheet.create({
  tabBar: {
    width: 'auto',
  },
});

export function useHomeTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  return {index, routes, renderScene, setIndex, layout, renderTabBar};
}
