import {View} from 'react-native';
import {Title, Text} from 'react-native-paper';
import styled from 'styled-components/native';

export const ListTitle = styled(Title)`
  font-size: 16px;
`;

export const ListText = styled(Text)`
  font-size: 13px;
  margin-bottom: 6px;
`;

export const ListContent = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ActionsContainer = styled(View)`
  width: 84px;
  align-items: center;
`;
