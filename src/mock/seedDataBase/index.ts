import Realm from 'realm';
import {seedCustomer} from './seedCustomer';
import {seedDelivery} from './seedDelivery';

export function seedRealm(realm: Realm) {
  seedCustomer(realm);
  seedDelivery(realm);
}
