/* eslint-disable react-hooks/exhaustive-deps */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {Appbar, Card, TouchableRipple} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {
  Container,
  MarginButton,
  MarginCard,
  SizedCardTitle,
} from '../../components/Styled';
import {formatDateToBr, getDateDiferenceInDays} from '../../utils/date';
import {useTheme} from 'react-native-paper';
import {useRealmContext} from '../../context/RealmContext';
import {Delivery as DeliveryType} from '../../../types/Models';
import {useNativeEvents} from '../../hooks/useNativeEvents';

type RootStackParamList = {
  Delivery: {
    deliveryId?: string;
    deliveryName?: string;
    customerName?: string;
    deliveryStatus?: number;
    deliveryDate?: Date;
  };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Delivery'>;

const Delivery: React.FC = () => {
  const navigation = useNavigation();
  const {emitEvent: emitDeliveryUpdatedEvent} =
    useNativeEvents('update:delivery');
  const [deliveringLoading, setDeliveringLoading] = useState(false);
  const {
    params: {
      deliveryId,
      deliveryDate,
      deliveryStatus,
      deliveryName,
      customerName,
    },
  } = useRoute<ProfileScreenRouteProp>();
  const [deliveryObjects, setDeliveryObjects] = useState({
    deliveryName: '...',
    deliveryStatus: '...',
    deliveryCodeStatus: 1,
    customerName: '...',
    deliveryDate: '../../....',
    deliveryDeadline: '.. dias',
  });
  const {colors} = useTheme();
  const {realm} = useRealmContext();

  function findInitialData() {
    const formatedDate = formatDateToBr(deliveryDate);
    const formatedStatus = deliveryStatus === 0 ? 'Não Entregue' : 'Entregue';

    const daysDiference = getDateDiferenceInDays(
      new Date(),
      deliveryDate || new Date(),
    );

    setDeliveryObjects({
      deliveryName: deliveryName || '',
      deliveryStatus: formatedStatus,
      deliveryCodeStatus: deliveryStatus || 0,
      customerName: customerName || '',
      deliveryDate: formatedDate,
      deliveryDeadline: `${daysDiference} dias`,
    });
  }

  useEffect(() => {
    findInitialData();
  }, []);

  function handleDeliveryButtonPress() {
    Alert.alert(
      'Entregar ítem',
      'Este ítem será marcado como entregue. Deseja Continuar?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {text: 'Confirmar', onPress: handleConfirmDeliveryButtonPress},
      ],
    );
  }

  function handleConfirmDeliveryButtonPress() {
    setDeliveringLoading(true);

    if (realm) {
      realm.write(() => {
        const deliveryResult = realm.objectForPrimaryKey<DeliveryType>(
          'Delivery',
          deliveryId || '',
        );
        if (!deliveryResult) {
          return;
        }
        deliveryResult.status = 1;
      });
    }

    // Emitir um evento que a delivery foi alterada
    emitDeliveryUpdatedEvent({});

    updateData();

    setDeliveringLoading(false);
  }

  function updateData() {
    if (!realm) {
      return;
    }
    const newData = realm.objectForPrimaryKey<DeliveryType>(
      'Delivery',
      deliveryId || '',
    );

    if (!newData) {
      return;
    }

    const formatedDate = formatDateToBr(newData.date);
    const formatedStatus = newData.status === 0 ? 'Não Entregue' : 'Entregue';

    const daysDiference = getDateDiferenceInDays(
      new Date(),
      newData.date || new Date(),
    );

    setDeliveryObjects({
      deliveryName: newData.name,
      deliveryStatus: formatedStatus,
      deliveryCodeStatus: newData.status,
      customerName: newData.customer.name,
      deliveryDate: formatedDate,
      deliveryDeadline: `${daysDiference} dias`,
    });
  }

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Entrega" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <SizedCardTitle title={deliveryObjects.deliveryName} />
          <Card.Content>
            <View>
              <ListItem
                itemTitle="Status"
                value={deliveryObjects.deliveryStatus}
                color={
                  deliveryObjects.deliveryCodeStatus === 0
                    ? colors.error
                    : undefined
                }
              />
              <TouchableRipple
                onPress={() => navigation.navigate('Customers' as never)}>
                <ListItem
                  itemTitle="Cliente"
                  value={deliveryObjects.customerName}
                />
              </TouchableRipple>
              <ListItem
                itemTitle="Data de entrega"
                value={deliveryObjects.deliveryDate}
              />
              <ListItem
                itemTitle="Prazo"
                value={deliveryObjects.deliveryDeadline}
              />
            </View>
          </Card.Content>
        </MarginCard>
        <MarginButton onPress={() => console.log('Bora Editar essa bagunça')}>
          Editar Entrega
        </MarginButton>
        {deliveryObjects.deliveryCodeStatus === 0 && (
          <MarginButton
            disabled={deliveringLoading}
            loading={deliveringLoading}
            mode="contained"
            onPress={handleDeliveryButtonPress}>
            Entregar
          </MarginButton>
        )}
      </ScrollView>
    </Container>
  );
};

export default Delivery;
