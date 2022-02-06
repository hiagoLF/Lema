import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import SimpleTable from '../../components/SimpleTable';
import {
  Container,
  MarginButton,
  MarginCard,
  SizedCardTitle,
} from '../../components/Styled';

const events = new Array(5)
  .fill({
    key: 'Aniversário de Heloísa',
    value: '18/09/18',
    interesting: false,
  })
  .map(event => ({...event}));

events[0].interesting = true;

const finance = new Array(5)
  .fill({
    key: 'Vídeo Casamento Ailton',
    value: 'Quitado',
    interesting: false,
  })
  .map(event => ({...event}));

finance[0].interesting = true;
finance[0].value = 'Pagando';

const Customers: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Cliente" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <SizedCardTitle title="Adélio Santos Cunha" />
        </MarginCard>

        <MarginCard>
          <Card.Title title="Entregas" titleStyle={{fontSize: 15}} />
          <SimpleTable
            data={events}
            keysName="Entrega"
            valuesName="Data"
            goToPage="Delivery"
          />
          <MarginButton onPress={() => navigation.navigate('CreateDelivery')}>
            Nova Entrega
          </MarginButton>
        </MarginCard>

        <MarginCard>
          <Card.Title title="Eventos" titleStyle={{fontSize: 15}} />
          <SimpleTable
            data={events}
            keysName="Evento"
            valuesName="Data"
            goToPage="Events"
          />
          <MarginButton onPress={() => console.log('Criar Evento')}>
            Novo Evento
          </MarginButton>
        </MarginCard>

        <MarginCard>
          <Card.Title title="Financeiro" titleStyle={{fontSize: 15}} />
          <SimpleTable
            data={finance}
            keysName="Pagamento"
            valuesName="Situação"
            goToPage="CustomerFinance"
          />
          <MarginButton onPress={() => console.log('Criar nova entrega')}>
            Nova Finança
          </MarginButton>
        </MarginCard>
      </ScrollView>
    </Container>
  );
};

export default Customers;
