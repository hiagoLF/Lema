import React from 'react';
import {View} from 'react-native';
import {TableContainer, TableLeftCell} from './styles';
import {DataTable} from 'react-native-paper';

interface TableData {
  key: string;
  value: string;
}

interface SimpleTableProps {
  keysName: string;
  valuesName: string;
  data: TableData[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  keysName,
  valuesName,
  data,
}) => {
  return (
    <View>
      <TableContainer>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>{keysName}</DataTable.Title>
            <DataTable.Title numeric>{valuesName}</DataTable.Title>
          </DataTable.Header>

          {data.map((event, key) => (
            <View key={key}>
              <DataTable.Row>
                <TableLeftCell>{event.key}</TableLeftCell>
                <DataTable.Cell numeric>{event.value}</DataTable.Cell>
              </DataTable.Row>
            </View>
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