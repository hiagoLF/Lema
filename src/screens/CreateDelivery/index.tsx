import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {Container, MarginCard} from '../../components/Styled';

const CreateDelivery: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Criar Entrega" />
      </Appbar.Header>

      <ScrollView>
        <MarginCard>
          <Card.Content>
            <ListItem
              itemTitle="Cliente"
              value="Adélio Santos Cunha"
              ocultDivider
            />
            {/* @ts-ignore */}
            <TextInput
              style={{marginTop: 10}}
              label="Título"
              right={<TextInput.Icon name="alpha-t-box-outline" />}
              mode="outlined"
            />
            {/* @ts-ignore */}
            <TextInput
              style={{marginTop: 10}}
              label="Data de Entrega"
              right={<TextInput.Icon name="eye" />}
              mode="outlined"
            />
            <Button style={{marginTop: 15}}>Criar</Button>
          </Card.Content>
        </MarginCard>
      </ScrollView>
    </Container>
  );
};

export default CreateDelivery;
