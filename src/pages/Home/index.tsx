import React from 'react';
import {TabView} from 'react-native-tab-view';
import {useHomeTabView} from '../../hooks/useHomeTabView';

export const HomePage: React.FC = () => {
  const {index, layout, renderScene, renderTabBar, routes, setIndex} =
    useHomeTabView();

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
    />
  );
};
