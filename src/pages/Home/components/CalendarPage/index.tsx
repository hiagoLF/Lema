import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Card, DataTable, Searchbar} from 'react-native-paper';
import styles from './styles';
import {events} from '../../../../fake/calendar.json';

const CalendarPage: React.FC = () => {
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
              placeholder="Evento"
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
              <DataTable.Title>Título</DataTable.Title>
              <DataTable.Title style={styles.contentToRight}>
                Data
              </DataTable.Title>
            </DataTable.Header>

            {events.map((event, index) => (
              <DataTable.Row
                key={index}
                style={event.done ? styles.lowOpacity : styles.lightRed}>
                <DataTable.Cell>{event.title}</DataTable.Cell>
                <DataTable.Cell style={styles.contentToRight}>
                  {event.date}
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

export default CalendarPage;
