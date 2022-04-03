/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {Alert, RefreshControl, ScrollView} from 'react-native';
import DinamicSearchBar from '../../../components/DinamicSearchBar';
import SimpleTable from '../../../components/SimpleTable';
import SingleInputModal from '../../../components/SingleInputModal';
import {useRealmContext} from '../../../context/RealmContext';
import {ObjectId} from 'bson';
import {Customer} from '../../../../types/Models';
import {useAppTable} from '../../../hooks/useAppTable';

export type PaginationObject = {
  currentPage: number;
  totalPages: number;
  currentPageItems: number;
};

const HomeCustomers: React.FC = () => {
  const {realm} = useRealmContext();
  const [searchText, setSearchText] = useState('');
  const [searchBarHidden, setSearchBarHidden] = useState(true);
  const [createCustomerModalOpen, setCreateCustomerModalOpen] = useState(false);
  const [newCustomerName, setnewCustomerName] = useState('');
  const [insertingCustomer, setInsertingCustomer] = useState(false);
  const [refreshingPage, setRefreshingPage] = useState(false);
  const {
    tableData: customersList,
    paginationInfo: customersPaginationObject,
    onPageChange: handleCustomersTablePageChange,
  } = useAppTable<Customer>(
    realm,
    10,
    dbRealm => {
      const customersResult = dbRealm.objects<Customer>('Customer');
      return customersResult;
    },
    data => {
      const interesting = data.status === 1 ? true : false;

      return {
        key: data.name,
        value: interesting ? 'DEVENDO' : 'Pago',
        interesting: interesting,
        props: {
          customerId: data._id,
          customerName: data.name,
        },
      };
    },
  );

  function handleCreateCustomerButtonPress() {
    setInsertingCustomer(true);

    try {
      realm?.write(() => {
        realm.create('Customer', {
          _id: new ObjectId().toString(),
          name: newCustomerName,
          status: 0,
        });
      });
    } catch (error) {
      Alert.alert('Não foi possível criar este cliente');
    }

    setInsertingCustomer(false);
    setnewCustomerName('');
    setCreateCustomerModalOpen(false);
  }

  function handleRefreshPage() {
    setRefreshingPage(true);
    handleCustomersTablePageChange(0);
    setRefreshingPage(false);
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshingPage}
          onRefresh={handleRefreshPage}
        />
      }>
      <SingleInputModal
        modalOpen={createCustomerModalOpen}
        onRequestClose={() => setCreateCustomerModalOpen(false)}
        title="Novo Cliente"
        inputPlaceholder="Nome"
        onInputTextChange={setnewCustomerName}
        inputText={newCustomerName}
        buttonIcon="account-plus"
        onButtonPress={handleCreateCustomerButtonPress}
        buttonDisabled={newCustomerName.length < 4 || insertingCustomer}
        buttonText="Adicionar"
        loading={insertingCustomer}
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
        data={customersList}
        goToPage="Customers"
        paginationInfo={customersPaginationObject}
        onPageChange={handleCustomersTablePageChange}
      />
    </ScrollView>
  );
};

export default HomeCustomers;
