import faker from '@faker-js/faker';
import {ObjectID} from 'bson';
import {Customer, Delivery} from '../../../types/Models';

export function seedDelivery(realm: Realm) {
  const deliveries = realm.objects<Delivery>('Delivery');

  if (deliveries.length > 0) {
    return;
  }

  const customers = realm.objects<Customer>('Customer');
  realm.write(() => {
    customers.forEach(customer => {
      for (let i = 0; i < 10; i++) {
        realm.create<Delivery>('Delivery', {
          _id: new ObjectID().toString(),
          name: faker.word.verb() + ' ' + faker.word.adjective(),
          date: faker.date.between('2021-01-01', '2023-01-01'),
          customer: customer,
        });
      }
    });
  });
}
