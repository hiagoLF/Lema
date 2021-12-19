import {Searchbar} from 'react-native-paper';
import styled from 'styled-components/native';

export const OpenSearchBarContainer = styled.View`
  align-items: flex-start;
  flex-direction: row;
  padding: 3px;
  padding-left: 12px;
`;

export const StyledSearchbar = styled(Searchbar).attrs({
  inputStyle: {
    fontSize: 14,
    padding: 0,
  },
})`
  margin: 5px;
  height: 35px;
`;

export const AddButtonContainer = styled.TouchableOpacity`
  margin-left: 7px;
`;
