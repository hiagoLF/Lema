import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import DinamicSearchBar from '../../components/DinamicSearchBar';
import SimpleTable from '../../components/SimpleTable';
import SingleInputModal from '../../components/SingleInputModal';

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
  const [createCustomerModalOpen, setCreateCustomerModalOpen] = useState(false);
  const [newCustomerName, setnewCustomerName] = useState('');

  return (
    <ScrollView>
      <SingleInputModal
        modalOpen={createCustomerModalOpen}
        onRequestClose={() => setCreateCustomerModalOpen(false)}
        title="Novo Cliente"
        inputPlaceholder="None"
        onInputTextChange={setnewCustomerName}
        inputText={newCustomerName}
        buttonIcon="account-plus"
        onButtonPress={() => {}}
        buttonDisabled={newCustomerName === ''}
        buttonText="Adicionar"
      />

      <DinamicSearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        hidden={searchBarHidden}
        onBarChange={setSearchBarHidden}
        placeholder="Cliente"
        onAddButtonPress={() => setCreateCustomerModalOpen(true)}
      />
      <SimpleTable
        keysName="Cliente"
        valuesName="Situação"
        data={customers}
        goToPage="Customers"
      />
    </ScrollView>
  );
};

export default HomeCustomers;
