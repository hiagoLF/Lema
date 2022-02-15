import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import ListItem from '../../components/ListItem';
import {Container, MarginCard} from '../../components/Styled';

interface PickDateParams {
  open: boolean;
  mode: 'date' | 'time';
  label: string;
}

const CreateEvent: React.FC = () => {
  const navigation = useNavigation();

  const [pickDateParams, setPickDateParams] = useState<PickDateParams>({
    open: false,
    mode: 'date',
    label: 'Dia do Evento',
  });

  const [date, setDate] = useState({
    date: new Date(),
    label: '',
  });

  const [time, setTime] = useState({
    time: new Date(),
    label: '',
  });

  function handlePickDateOpen() {
    setPickDateParams({
      open: true,
      mode: 'date',
      label: 'Dia do Evento',
    });
  }

  function handlePickTimeOpen() {
    setPickDateParams({
      open: true,
      mode: 'time',
      label: 'Horário do Evento',
    });
  }

  function handlePickDateConfirm(date: Date) {
    setPickDateParams(prev => ({...prev, open: false}));

    if (pickDateParams.mode === 'date') {
      setDate({
        date: date,
        label: `${date.getDate()}/${('0' + (date.getMonth() + 1)).slice(
          -2,
        )}/${date.getFullYear()}`,
      });
    } else {
      setTime({
        time: date,
        label: `${('0' + date.getHours()).slice(-2)}:${(
          '0' + date.getMinutes()
        ).slice(-2)}`,
      });
    }
  }

  return (
    <Container>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Criar Evento" />
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

            <TouchableOpacity onPress={handlePickDateOpen}>
              {/* @ts-ignore */}
              <TextInput
                style={{marginTop: 10}}
                label="Data do Evento"
                right={
                  <TextInput.Icon name="eye" onPress={handlePickDateOpen} />
                }
                mode="outlined"
                value={date.label}
                editable={false}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePickTimeOpen}>
              {/* @ts-ignore */}
              <TextInput
                style={{marginTop: 10}}
                label="Horário do Evento"
                right={
                  <TextInput.Icon name="clock" onPress={handlePickTimeOpen} />
                }
                mode="outlined"
                value={time.label}
                editable={false}
              />
            </TouchableOpacity>

            <DatePicker
              modal
              is24hourSource="locale"
              mode={pickDateParams.mode}
              title={pickDateParams.label}
              cancelText="Cancelar"
              confirmText="Confirmar"
              locale="pt-BR"
              open={pickDateParams.open}
              date={pickDateParams.mode === 'date' ? date.date : time.time}
              onConfirm={handlePickDateConfirm}
              onCancel={() => {
                setPickDateParams(prev => ({...prev, open: false}));
              }}
            />

            <Button
              style={{marginTop: 15}}
              onPress={() => console.log('Criando Evento')}>
              Criar
            </Button>
          </Card.Content>
        </MarginCard>
      </ScrollView>
    </Container>
  );
};

export default CreateEvent;
