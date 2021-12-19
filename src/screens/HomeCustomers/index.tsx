import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import DinamicSearchBar from '../../components/DinamicSearchBar';
import SimpleTable from '../../components/SimpleTable';

const customers = Array(10)
  .fill({
    key: 'Alessandro Coelho',
    value: 'Pago',
  })
  .map(customer => ({...customer}));

customers[0].interesting = true;
customers[0].value = 'Devendo';

const HomeCustomers: React.FC = () => {
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
        onAddButtonPress={() => {}}
      />
      <SimpleTable keysName="Client" valuesName="Situação" data={customers} />
    </ScrollView>
  );
};

export default HomeCustomers;
