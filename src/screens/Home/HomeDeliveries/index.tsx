import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Delivery} from '../../../../types/Models';
import DinamicSearchBar from '../../../components/DinamicSearchBar';
import SimpleTable from '../../../components/SimpleTable';
import {useRealmContext} from '../../../context/RealmContext';
import {useAppTable} from '../../../hooks/useAppTable';
import {formatDateToBr} from '../../../utils/date';

const HomeDeliveries: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchBarHidden, setSearchBarHidden] = useState(true);
  const {realm} = useRealmContext();

  const {
    tableData: tableDeliveries,
    paginationInfo: deliveriesPaginationInfo,
    onPageChange: onDeliveriesPageChange,
  } = useAppTable<Delivery>(
    realm,
    10,
    dbRealm => {
      const deliveriesResult = dbRealm.objects<Delivery>('Delivery');
      return deliveriesResult;
    },
    data => {
      const interesting = data.status === 0;

      return {
        key: data.name,
        value: formatDateToBr(data.date),
        interesting: interesting,
        props: {
          deliveryId: data._id,
          deliveryName: data.name,
          customerName: data.customer.name,
          deliveryStatus: data.status,
          deliveryDate: data.date,
        },
      };
    },
  );

  return (
    <ScrollView>
      <DinamicSearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        hidden={searchBarHidden}
        onBarChange={setSearchBarHidden}
        placeholder="Evento"
      />
      <SimpleTable
        keysName="Nome"
        valuesName="Entregue"
        data={tableDeliveries}
        goToPage="Delivery"
        paginationInfo={deliveriesPaginationInfo}
        onPageChange={onDeliveriesPageChange}
      />
    </ScrollView>
  );
};

export default HomeDeliveries;
