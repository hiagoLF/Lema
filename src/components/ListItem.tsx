import React from 'react';
import {View} from 'react-native';
import {Title, Text} from 'react-native-paper';

interface ListItemProps {
  itemTitle: string;
  value: string;
}

const ListItem: React.FC<ListItemProps> = ({itemTitle, value}) => {
  return (
    <View>
      <Title>{itemTitle}</Title>
      {/* @ts-ignore */}
      <Text>{value}</Text>
    </View>
  );
};

export default ListItem;
