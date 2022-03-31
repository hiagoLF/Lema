/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Alert, RefreshControl, ScrollView} from 'react-native';
import DinamicSearchBar from '../../../components/DinamicSearchBar';
import SimpleTable, {TableData} from '../../../components/SimpleTable';
import SingleInputModal from '../../../components/SingleInputModal';
import {useRealmContext} from '../../../context/RealmContext';
import {ObjectId} from 'bson';
import {paginate} from '../../../utils/arrays';
import {Customer} from '../../../../types/Models';

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
  const [customersList, setCustomersList] = useState<TableData[]>([]);
  const [refreshingPage, setRefresingPage] = useState(false);
  const [customersPaginationObject, setCustomersPaginationObject] =
    useState<PaginationObject>({
      currentPage: 0,
      totalPages: 0,
      currentPageItems: 0,
    });

  function handleCreateCustomerButtonPress() {
    setInsertingCustomer(true);

    try {
      realm?.write(() => {
        realm.create('Customer', {
          _id: new ObjectId().toString(),
          name: newCustomerName,
          status: '0',
        });
      });
    } catch (error) {
      Alert.alert('Não foi possível criar este cliente');
    }

    setInsertingCustomer(false);
    setnewCustomerName('');
    setCreateCustomerModalOpen(false);
    findCustomers();
  }

  function findCustomers(pageToGo?: number) {
    if (!realm) {
      return;
    }
    try {
      let customersResult = realm
        .objects<Customer>('Customer')
        .sorted('status');

      const totalCustomers = customersResult.length;
      const totalPages = Math.ceil(totalCustomers / 10);
      // @ts-ignore
      customersResult = paginate(
        // @ts-ignore
        customersResult,
        10,
        pageToGo !== undefined
          ? pageToGo + 1
          : customersPaginationObject.currentPage + 1,
      );
      const currentPageItems = customersResult.length;

      setCustomersPaginationObject(prev => ({
        ...prev,
        currentPageItems,
        totalPages,
      }));

      const formatedCustomers = customersResult.map(customer => ({
        key: customer.name,
        value: customer.status === '0' ? 'Pago' : 'Devendo',
        interesting: customer.status === '1',
        props: {
          customerId: customer._id,
        },
      }));
      setCustomersList(formatedCustomers);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCustomersTablePageChange(pageToGo: number) {
    setCustomersPaginationObject(prev => ({
      ...prev,
      currentPage: pageToGo,
    }));

    findCustomers(pageToGo);
  }

  function handleRefreshPage() {
    setRefresingPage(true);
    findCustomers();
    setRefresingPage(false);
  }

  useEffect(() => {
    findCustomers();
  }, []);

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
