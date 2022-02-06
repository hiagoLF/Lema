import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {Appbar, Card} from 'react-native-paper';
import ListItem from '../../components/ListItem';
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
          <SizedCardTitle title="Vídeo Aniversãrio Faustão" />
        </MarginCard>
        <MarginCard>
          <SizedCardTitle title="Informações" />
          <Card.Content>
            <View>
              <ListItem itemTitle="Status" value="Quintado" />
              <ListItem itemTitle="Cliente" value="Adélio Santos Cunha" />
              <ListItem itemTitle="Entrada" value="R$ 300" />
              <ListItem itemTitle="Parcelas" value="10x de R$ 500" />
              <ListItem itemTitle="Valor Total" value="R$ 50.300" />
            </View>
          </Card.Content>
        </MarginCard>
        <MarginCard>
          <SizedCardTitle title="Parcelas" />
        </MarginCard>
      </ScrollView>
    </Container>
  );
};

export default CustomerFinance;
