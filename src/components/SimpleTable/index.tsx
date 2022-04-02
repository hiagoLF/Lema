import React from 'react';
import {View} from 'react-native';
import {TableCell, TableContainer, TableLeftCell} from './styles';
import {DataTable} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {PaginationObject} from '../../screens/Home/HomeCustomers';

export interface TableData {
  key: string;
  value: string;
  interesting: boolean;
  props: any;
}

interface SimpleTableProps {
  keysName: string;
  valuesName: string;
  data: TableData[];
  goToPage?: string;
  paginationInfo: PaginationObject | null;
  onPageChange: (pageToGo: number) => void;
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  keysName,
  valuesName,
  data,
  goToPage = 'Home',
  paginationInfo,
  onPageChange,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <TableContainer>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>{keysName}</DataTable.Title>
            <DataTable.Title numeric>{valuesName}</DataTable.Title>
          </DataTable.Header>

          {data.map((event, key) => (
            <TableCell
              key={key}
              onPress={() =>
                navigation.navigate(goToPage as never, event.props as never)
              }>
              <DataTable.Row>
                <TableLeftCell style={{opacity: event.interesting ? 1 : 0.5}}>
                  {event.key}
                </TableLeftCell>
                <DataTable.Cell
                  style={{opacity: event.interesting ? 1 : 0.5}}
                  numeric>
                  {event.value}
                </DataTable.Cell>
              </DataTable.Row>
            </TableCell>
          ))}

          {paginationInfo && (
            <DataTable.Pagination
              page={paginationInfo.currentPage}
              numberOfPages={paginationInfo.totalPages}
              //@ts-ignore
              onPageChange={onPageChange}
              label={`${paginationInfo.currentPage + 1} de ${
                paginationInfo.totalPages
              }`}
              numberOfItemsPerPage={paginationInfo.currentPageItems}
            />
          )}
        </DataTable>
      </TableContainer>
    </View>
  );
};

export default SimpleTable;
