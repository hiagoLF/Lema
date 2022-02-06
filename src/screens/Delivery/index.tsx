import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Card, TouchableRipple} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {
  Container,
  MarginButton,
  MarginCard,
  SizedCardTitle,
} from '../../components/Styled';

const Delivery: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Entrega" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <SizedCardTitle title="Vídeo Aniversãrio Faustão" />
          <Card.Content>
            <View>
              <ListItem itemTitle="Status" value="Entregue" />
              <TouchableRipple
                onPress={() => navigation.navigate('Customers' as never)}>
                <ListItem itemTitle="Cliente" value="Adélio Santos Cunha" />
              </TouchableRipple>
              <ListItem itemTitle="Data de entrega" value="03/07/2021" />
              <ListItem itemTitle="Prazo" value="3 dias" />
            </View>
          </Card.Content>
        </MarginCard>
        <MarginButton onPress={() => console.log('Bora Editar essa bagunça')}>
          Editar Entrega
        </MarginButton>
        <MarginButton
          mode="contained"
          onPress={() => console.log('Bora Entregar essa bagunça')}>
          Entregar
        </MarginButton>
      </ScrollView>
    </Container>
  );
};

export default Delivery;
