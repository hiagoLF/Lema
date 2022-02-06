import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Card, TouchableRipple} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import ListItemWithActions from '../../components/ListItemWithAction';
import {Container, MarginCard, SizedCardTitle} from '../../components/Styled';

const CustomerFinance: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Finança" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <SizedCardTitle title="Vídeo Casamento de Ailton" />
        </MarginCard>
        <MarginCard>
          <SizedCardTitle title="Informações" />
          <Card.Content>
            <ListItem itemTitle="Status" value="Quintado" />
            <TouchableRipple
              onPress={() => navigation.navigate('Customers' as never)}>
              <ListItem itemTitle="Cliente" value="Adélio Santos Cunha" />
            </TouchableRipple>
            <ListItem itemTitle="Entrada" value="R$ 300,00" />
            <ListItem itemTitle="Parcelas" value="10x de R$ 500,00" />
            <ListItem itemTitle="Valor Pago" value="R$ 20.000,00" />
            <ListItem itemTitle="Valor Total" value="R$ 50.300,00" />
          </Card.Content>
        </MarginCard>
        <MarginCard>
          <SizedCardTitle title="Parcelas" />
          <Card.Content>
            <ListItem itemTitle="Entrada" value="R$ 2.000,00" />
            <ListItemWithActions
              itemTitle="Mês: 1"
              value="R$ 500,00"
              checked={true}
            />
            <ListItemWithActions
              itemTitle="Mês: 2"
              value="R$ 500,00"
              checked={true}
            />
            <ListItemWithActions itemTitle="Mês: 3" value="R$ 500,00" />
            <ListItemWithActions itemTitle="Mês: 4" value="R$ 500,00" />
          </Card.Content>
        </MarginCard>
      </ScrollView>
    </Container>
  );
};

export default CustomerFinance;
