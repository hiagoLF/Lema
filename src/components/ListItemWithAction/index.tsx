import React from 'react';
import {View} from 'react-native';
import {Avatar, Button, Divider} from 'react-native-paper';
import {ActionsContainer, ListContent, ListText, ListTitle} from './styles';

interface ListItemProps {
  itemTitle: string;
  value: string;
  checked?: boolean;
}

const ListItemWithActions: React.FC<ListItemProps> = ({
  itemTitle,
  value,
  checked,
}) => {
  return (
    <View>
      <Divider />
      <ListContent>
        <View>
          <ListTitle>{itemTitle}</ListTitle>
          {/* @ts-ignore */}
          <ListText>{value}</ListText>
        </View>
        <ActionsContainer>
          {checked ? (
            <Avatar.Icon size={24} icon="check-bold" />
          ) : (
            <Button onPress={() => {}}>Pagar</Button>
          )}
        </ActionsContainer>
      </ListContent>
    </View>
  );
};

export default ListItemWithActions;
