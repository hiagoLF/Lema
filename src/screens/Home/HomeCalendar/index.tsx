import React, {useState} from 'react';
import SimpleTable from '../../../components/SimpleTable';
import {ScrollView} from 'react-native';
import DinamicSearchBar from '../../../components/DinamicSearchBar';

const events = Array(10)
  .fill({
    key: 'Aniversário de Heloísa',
    value: '18/09/18',
    interesting: false,
  })
  .map(event => ({...event}));

events[0].interesting = true;
events[1].interesting = true;

const HomeCalendar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchBarHidden, setSearchBarHidden] = useState(true);

  return (
    <ScrollView>
      <DinamicSearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        hidden={searchBarHidden}
        onBarChange={setSearchBarHidden}
        placeholder="Evento"
      />
      <SimpleTable
        keysName="Evento"
        valuesName="Data"
        data={events}
        goToPage="Events"
      />
    </ScrollView>
  );
};

export default HomeCalendar;
