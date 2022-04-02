import {ObjectID} from 'bson';
import Realm from 'realm';
import {faker} from '@faker-js/faker';

export function seedCustomer(realm: Realm) {
  const customersLength = realm.objects('Customer').length;
  if (customersLength === 0) {
    realm.write(() => {
      for (let i = 0; i < 100; i++) {
        realm.create('Customer', {
          _id: new ObjectID().toString(),
          name: faker.name.findName(),
          status: faker.datatype.number(1),
        });
      }
    });
  }
}
