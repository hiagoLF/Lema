import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import DinamicSearchBar from '../../../components/DinamicSearchBar';
import SimpleTable from '../../../components/SimpleTable';

const deliveries = Array(10)
  .fill({
    key: 'Fotos casamento Ivan',
    value: 'Sim',
  })
  .map(deliveries => ({...deliveries}));

deliveries[0].value = 'Não';
deliveries[0].interesting = true;
deliveries[1].value = 'Não';
deliveries[1].interesting = true;

const HomeDeliveries: React.FC = () => {
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
      <SimpleTable
        keysName="Nome"
        valuesName="Entregue"
        data={deliveries}
        goToPage="Delivery"
      />
    </ScrollView>
  );
};

export default HomeDeliveries;
