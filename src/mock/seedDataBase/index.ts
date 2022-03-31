import Realm from 'realm';
import {seedCustomer} from './seedCustomer';

export function seedRealm(realm: Realm) {
  seedCustomer(realm);
}
