import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import {CustomersContainer, MarginCard} from './styles';

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
          <Card.Title title="Hiago Leão do PC" />
        </MarginCard>
      </ScrollView>
    </CustomersContainer>
  );
};

export default Customers;
