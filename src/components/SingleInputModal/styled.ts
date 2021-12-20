import {Card, Title, TextInput} from 'react-native-paper';
import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalBackground = styled.Pressable`
  flex: 1;
`;

export const ModalCard = styled(Card)`
  padding: 10px;
`;

export const ModalTitle = styled(Title)`
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalTextInput = styled(TextInput).attrs({
  textAlign: undefined,
  onPressIn: undefined,
  onPressOut: undefined,
  mode: 'flat',
})`
  margin-bottom: 10px;
`;
