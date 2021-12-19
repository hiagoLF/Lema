import React from 'react';
import SimpleTable from '../../components/SimpleTable';
import {ScrollView} from 'react-native';

const events = Array(10).fill({
  key: 'Aniversário de Heloísa é muito legal',
  value: '18/09/18',
});
const HomeCalendar: React.FC = () => {
  return (
    <ScrollView>
      <SimpleTable keysName="Evento" valuesName="Data" data={events} />
    </ScrollView>
  );
};

export default HomeCalendar;
