/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Results} from 'realm';
import {TableData} from '../components/SimpleTable';
import {PaginationObject} from '../screens/Home/HomeCustomers';
import {paginate} from '../utils/arrays';

type GetObjects<Type> = (realm: Realm) => Results<Type>;
type FormatData<Type> = (data: Type) => TableData;

export function useAppTable<Type>(
  realm: Realm | null,
  itemsPerPage: number,
  getObjects: GetObjects<Type>,
  formatData: FormatData<Type>,
) {
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<PaginationObject | null>(
    null,
  );

  function findDataForTable(page: number) {
    if (!realm) {
      return;
    }
    const objects = getObjects(realm);
    const paginatedObjects = paginate<Type>(objects, itemsPerPage, page + 1);
    const data = paginatedObjects.map(formatData);
    setTableData(data);
    setPaginationInfo({
      currentPage: page,
      currentPageItems: paginatedObjects.length,
      totalPages: Math.ceil(objects.length / itemsPerPage),
    });
  }

  useEffect(() => {
    if (!realm) {
      return;
    }

    findDataForTable(0);
  }, []);

  function onPageChange(page?: number) {
    const pageParameter =
      page !== undefined
        ? page
        : paginationInfo?.currentPage !== undefined
        ? paginationInfo?.currentPage
        : 0;

    findDataForTable(pageParameter);
  }

  return {tableData, paginationInfo, onPageChange};
}
