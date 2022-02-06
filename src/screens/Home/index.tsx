import React from 'react';
import {TabView} from 'react-native-tab-view';
import HomeHeader from '../../components/HomeHeader';
import useHomeTabView from '../../hooks/useHomeTabView';
import {HomeContainer} from './styles';

const Home: React.FC = () => {
  const {index, routes, renderScene, setIndex, layout, renderTabBar} =
    useHomeTabView();

  return (
    <HomeContainer>
      <HomeHeader />

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
