import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {
  AddButtonContainer,
  OpenSearchBarContainer,
  StyledSearchbar,
} from './styles';

interface DinamicSearchBar {
  searchText: string;
  onSearchTextChange: (text: string) => void;
  hidden: boolean;
  onBarChange: (value: boolean) => void;
  placeholder: string;
  onAddButtonPress?: () => void;
}

const DinamicSearchBar: React.FC<DinamicSearchBar> = ({
  onSearchTextChange,
  searchText,
  hidden,
  onBarChange,
  placeholder,
  onAddButtonPress,
}) => {
  return (
    <View>
      {hidden ? (
        <OpenSearchBarContainer>
          <TouchableOpacity onPress={() => onBarChange(false)}>
            <Avatar.Icon size={20} icon="magnify" />
          </TouchableOpacity>
          {onAddButtonPress && (
            <AddButtonContainer onPress={onAddButtonPress}>
              <Avatar.Icon size={20} icon="plus" />
            </AddButtonContainer>
          )}
        </OpenSearchBarContainer>
      ) : (
        <StyledSearchbar
          placeholder={placeholder}
          onChangeText={onSearchTextChange}
          value={searchText}
          onPressIn={undefined}
          onPressOut={undefined}
          textAlign={undefined}
          onIconPress={() => onBarChange(true)}
        />
      )}
    </View>
  );
};

export default DinamicSearchBar;
