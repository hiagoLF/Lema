import React from 'react';
import {Appbar} from 'react-native-paper';
import {TabView} from 'react-native-tab-view';
import useHomeTabView from '../../hooks/useHomeTabView';
import {HeaderBar, HomeContainer} from './styles';

const Home: React.FC = () => {
  const {
    index,
    routes,
    renderScene,
    setIndex,
    layout,
    renderTabBar,
    handleLogOutButtonPress,
  } = useHomeTabView();

  return (
    <HomeContainer>
      <HeaderBar>
        <Appbar.Content title="Lema" />
        <Appbar.Action
          icon="logout-variant"
          onPress={handleLogOutButtonPress}
        />
      </HeaderBar>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </HomeContainer>
  );
};

export default Home;
