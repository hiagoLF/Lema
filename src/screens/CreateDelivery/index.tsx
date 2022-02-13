import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {Container, MarginCard} from '../../components/Styled';
import DatePicker from 'react-native-date-picker';

const CreateDelivery: React.FC = () => {
  const navigation = useNavigation();

  const [date, setDate] = useState({
    date: new Date(),
    label: '',
  });
  const [open, setOpen] = useState(false);

  console.log(date);

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

            <TouchableOpacity onPress={() => setOpen(true)}>
              {/* @ts-ignore */}
              <TextInput
                style={{marginTop: 10}}
                label="Data de Entrega"
                right={<TextInput.Icon name="eye" />}
                mode="outlined"
                value={date.label}
                editable={false}
              />
            </TouchableOpacity>

            <DatePicker
              modal
              mode="date"
              title="Dia da entrega"
              cancelText="Cancelar"
              confirmText="Confirmar"
              locale="pt-BR"
              open={open}
              date={date.date}
              onConfirm={date => {
                setOpen(false);
                setDate({
                  date: date,
                  label: `${date.getDate()}/${(
                    '0' +
                    (date.getMonth() + 1)
                  ).slice(-2)}/${date.getFullYear()}`,
                });
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <Button style={{marginTop: 15}}>Criar</Button>
          </Card.Content>
        </MarginCard>
      </ScrollView>
    </Container>
  );
};

export default CreateDelivery;
