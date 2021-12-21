import {Card, DataTable} from 'react-native-paper';
import styled from 'styled-components/native';

export const TableContainer = styled(Card)`
  margin: 5px;
  padding: 5px;
`;

export const TableLeftCell = styled(DataTable.Cell)`
  flex: 2.4;
`;

interface TableCellProps {
  interesting: boolean;
}

export const TableCell = styled.TouchableOpacity<TableCellProps>`
  opacity: ${({interesting}) => (interesting ? 1 : 0.3)};
`;
