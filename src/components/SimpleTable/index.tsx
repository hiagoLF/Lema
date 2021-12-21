import React from 'react';
import {View} from 'react-native';
import {TableCell, TableContainer, TableLeftCell} from './styles';
import {DataTable} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

interface TableData {
  key: string;
  value: string;
  interesting: boolean;
}

interface SimpleTableProps {
  keysName: string;
  valuesName: string;
  data: TableData[];
  goToPage?: string;
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  keysName,
  valuesName,
  data,
  goToPage = '',
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
              interesting={event.interesting}
              onPress={() =>
                navigation.navigate(goToPage as never, {} as never)
              }>
              <DataTable.Row>
                <TableLeftCell>{event.key}</TableLeftCell>
                <DataTable.Cell numeric>{event.value}</DataTable.Cell>
              </DataTable.Row>
            </TableCell>
          ))}

          <DataTable.Pagination
            page={0}
            numberOfPages={10}
            //@ts-ignore
            onPageChange={() => alert('Mudando a página')}
            label={'1 de 10'}
            numberOfItemsPerPage={10}
          />
        </DataTable>
      </TableContainer>
    </View>
  );
};

export default SimpleTable;
