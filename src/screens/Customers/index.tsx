/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import {Delivery} from '../../../types/Models';
import SimpleTable from '../../components/SimpleTable';
import {
  Container,
  MarginButton,
  MarginCard,
  SizedCardTitle,
} from '../../components/Styled';
import {useRealmContext} from '../../context/RealmContext';
import {useAppTable} from '../../hooks/useAppTable';
import {formatDateToBr} from '../../utils/date';

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

type RootStackParamList = {
  Customer: {customerId?: string; customerName?: string};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Customer'>;

const Customers: React.FC = () => {
  const navigation = useNavigation();
  const {
    params: {customerName, customerId},
  } = useRoute<ProfileScreenRouteProp>();
  const {realm} = useRealmContext();

  const {
    tableData: tableDeliveries,
    paginationInfo: deliveriesPaginationInfo,
    onPageChange: onDeliveriesPageChange,
  } = useAppTable<Delivery>(
    realm,
    5,
    dbRealm => {
      const deliveriesResult = dbRealm
        .objects<Delivery>('Delivery')
        .filtered(`customer._id == "${customerId}"`);
      return deliveriesResult;
    },
    data => {
      const interesting = data.date > new Date();

      return {
        key: data.name,
        value: formatDateToBr(data.date),
        interesting: interesting,
        props: {
          ...data,
        },
      };
    },
  );

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Cliente" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <SizedCardTitle title={customerName || '...'} />
        </MarginCard>

        <MarginCard>
          <Card.Title title="Entregas" titleStyle={{fontSize: 15}} />
          <SimpleTable
            data={tableDeliveries}
            keysName="Entrega"
            valuesName="Data"
            goToPage="Delivery"
            paginationInfo={deliveriesPaginationInfo}
            onPageChange={onDeliveriesPageChange}
          />
          <MarginButton
            onPress={() => navigation.navigate('CreateDelivery' as never)}>
            Nova Entrega
          </MarginButton>
        </MarginCard>

        <MarginCard>
          <Card.Title title="Eventos" titleStyle={{fontSize: 15}} />
          {/* TODO */}
          {/* @ts-ignore */}
          <SimpleTable
            data={events}
            keysName="Evento"
            valuesName="Data"
            goToPage="Events"
          />
          <MarginButton
            onPress={() => navigation.navigate('CreateEvent' as never)}>
            Novo Evento
          </MarginButton>
        </MarginCard>

        <MarginCard>
          <Card.Title title="Financeiro" titleStyle={{fontSize: 15}} />
          {/* TODO */}
          {/* @ts-ignore */}
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
