import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Button, Card, TouchableRipple} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {Container, MarginCard, SizedCardTitle} from '../../components/Styled';

const Events: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Eventos" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <SizedCardTitle title="Aniversário de Heloísa" />
          <Card.Content>
            <View>
              <ListItem itemTitle="Status" value="Ocorrido" />
              <TouchableRipple
                onPress={() => navigation.navigate('Customers' as never)}>
                <ListItem itemTitle="Cliente" value="Adélio Santos Cunha" />
              </TouchableRipple>
              <ListItem itemTitle="Data" value="03/07/2021" />
              <ListItem itemTitle="Horário" value="18:30" />
            </View>
          </Card.Content>
        </MarginCard>
        <Button onPress={() => console.log('Bora Editar essa bagunça')}>
          Editar Evento
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Events;
