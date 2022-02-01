import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import SimpleTable from '../../components/SimpleTable';
import {CustomersContainer, MarginCard} from './styles';

const events = new Array(5)
  .fill({
    key: 'Cachadada dos Caipiras',
    value: '18/09/18',
    interesting: false,
  })
  .map(event => ({...event}));

events[0].interesting = true;

const finance = new Array(5)
  .fill({
    key: 'Vídeo Casamento Ailton',
    value: 'Pago',
    interesting: false,
  })
  .map(event => ({...event}));

finance[0].interesting = true;
finance[0].value = 'Devendo';

const Customers: React.FC = () => {
  const navigation = useNavigation();

  return (
    <CustomersContainer>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Cliente" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <Card.Title title="João Nunes Plínio" />
        </MarginCard>

        <MarginCard>
          <Card.Title title="Entregas" titleStyle={{fontSize: 15}} />
          <SimpleTable
            data={events}
            keysName="Evento"
            valuesName="Data"
            goToPage="Delivery"
          />
        </MarginCard>

        <MarginCard>
          <Card.Title title="Eventos" titleStyle={{fontSize: 15}} />
          <SimpleTable data={events} keysName="Evento" valuesName="Data" />
        </MarginCard>

        <MarginCard>
          <Card.Title title="Financeiro" titleStyle={{fontSize: 15}} />
          <SimpleTable data={finance} keysName="Evento" valuesName="Data" />
        </MarginCard>
      </ScrollView>
    </CustomersContainer>
  );
};

export default Customers;
