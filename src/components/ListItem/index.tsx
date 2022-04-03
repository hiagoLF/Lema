import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import {ListText, ListTitle} from './styles';

interface ListItemProps {
  itemTitle: string;
  value: string;
  ocultDivider?: boolean;
  color?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  itemTitle,
  value,
  ocultDivider,
  color,
}) => {
  return (
    <View>
      {!ocultDivider && <Divider />}
      <ListTitle>{itemTitle}</ListTitle>
      {/* @ts-ignore */}
      <ListText style={color ? {color, fontWeight: 'bold'} : {}}>
        {value}
      </ListText>
    </View>
  );
};

export default ListItem;
