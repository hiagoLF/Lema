import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Button, Card} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {CustomersContainer, MarginCard} from '../Customers/styles';

const Delivery: React.FC = () => {
  const navigation = useNavigation();

  return (
    <CustomersContainer>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Entrega" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <Card.Title title="Vídeo Aniversãrio Faustão" />
          <Card.Content>
            <View>
              <ListItem itemTitle="Status" value="Entregue" />
              <ListItem itemTitle="Cliente" value="Adélio Santos Cunha" />
              <ListItem itemTitle="Data de entrega" value="03/07/2021" />
            </View>
          </Card.Content>
        </MarginCard>
        <Button onPress={() => alert('Bora Editar essa bagunça')}>
          Editar Evento
        </Button>
      </ScrollView>
    </CustomersContainer>
  );
};

export default Delivery;
