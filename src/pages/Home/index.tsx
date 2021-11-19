import React from 'react';
import {Appbar} from 'react-native-paper';
import {TabView} from 'react-native-tab-view';
import {useHomeTabView} from '../../hooks/useHomeTabView';

export const HomePage: React.FC = () => {
  const {index, layout, renderScene, renderTabBar, routes, setIndex} =
    useHomeTabView();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Lema" />
        <Appbar.Action
          icon="exit-to-app"
          onPress={() => {
            // @ts-ignore
            alert('Sair do App');
          }}
        />
      </Appbar.Header>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </>
  );
};
