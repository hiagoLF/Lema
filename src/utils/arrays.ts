import {Results} from 'realm';

export function paginate<Type>(
  array: Type[] | Results<Type>,
  page_size: number,
  page_number: number,
) {
  // console.log('Array in paginate >> ', array);
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}
