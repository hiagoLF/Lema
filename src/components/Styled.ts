import {Button, Card} from 'react-native-paper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const MarginCard = styled(Card)`
  margin: 5px;
`;

export const MarginButton = styled(Button)`
  margin: 5px;
`;

export const SizedCardTitle = styled(Card.Title).attrs({
  titleStyle: {
    fontSize: 18,
  },
})``;
