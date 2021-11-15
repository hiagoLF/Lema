import React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Card, DataTable, Searchbar} from 'react-native-paper';
import {customersDebt} from '../../../../fake/customers.json';
import styles from './styles';

const CustomersPage: React.FC = () => {
  const [page, setPage] = React.useState<number>(0);
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.cardContainer}>
          <View style={styles.searchOrCreateCustomer}>
            {/* @ts-ignore */}
            <Searchbar
              style={styles.searchBar}
              placeholder="Cliente"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <Button
              mode="contained"
              onPress={() => console.log('Pressed')}
              style={styles.newCustomerButton}
              contentStyle={styles.newCustomerButtonContent}>
              Novo
            </Button>
          </View>

          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Nome</DataTable.Title>
              <DataTable.Title style={styles.contentToLeft}>
                Situação
              </DataTable.Title>
            </DataTable.Header>

            {customersDebt.map((customer, index) => (
              <DataTable.Row
                key={index}
                style={!customer.debtor && styles.lowOpacity}>
                <DataTable.Cell>{customer.name}</DataTable.Cell>
                <DataTable.Cell style={styles.contentToLeft}>
                  {customer.debtor ? 'Débito' : 'Quite'}
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={1}
              onPageChange={setPage}
              label="1 of 1"
              // optionsPerPage={optionsPerPage}
              // itemsPerPage={itemsPerPage}
              // setItemsPerPage={setItemsPerPage}
              // showFastPagination
              // optionsLabel={'Rows per page'}
            />
          </DataTable>
        </Card>
      </View>
    </ScrollView>
  );
};

export default CustomersPage;
