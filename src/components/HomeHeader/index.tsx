import React, {useState} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {HeaderBar} from './style';

// import { Container } from './styles';

const HomeHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderBar>
      <Appbar.Content title="Lema" />
      <Menu
        onDismiss={() => setMenuOpen(false)}
        visible={menuOpen}
        anchor={
          <Appbar.Action
            color="white"
            icon="dots-horizontal"
            onPress={() => setMenuOpen(true)}
          />
        }>
        <Menu.Item
          icon="logout-variant"
          title="Sair"
          onPress={() => console.log('saindo aqui...')}
        />
      </Menu>
    </HeaderBar>
  );
};

export default HomeHeader;
