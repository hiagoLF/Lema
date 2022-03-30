/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {createContext, useContext} from 'react';
import Realm, {User} from 'realm';
import {appId, partitionValue} from '../../appConfig';
// import {ObjectId} from 'bson';

interface RealmContextProps {
  realm: Realm | null;
}

export class Customer {
  static schema = {
    name: 'Customer',
    properties: {
      _id: 'string',
      name: 'string',
      status: 'string',
    },
    primaryKey: '_id',
  };
}

const RealmContext = createContext<RealmContextProps>({} as RealmContextProps);

export const RealmProvider: React.FC = ({children}) => {
  const [realm, setRealm] = useState<Realm | null>(null);

  console.log(realm);

  async function stablishRealmApp() {
    // Abrir Aplicação Realm
    const appConfig = {
      id: appId,
      timeout: 1000,
    };
    const realmApp = new Realm.App(appConfig);

    if (!realmApp) {
      return;
    }

    // Estabelecer autenticação
    let user: User | undefined;
    try {
      const credentials = Realm.Credentials.anonymous();
      user = await realmApp.logIn(credentials);
    } catch (error) {
      throw `Error logging in anonymously: ${JSON.stringify(error, null, 2)}`;
    }

    // Abrir Realm
    if (!user || !realmApp) {
      return;
    }
    try {
      const config = {
        schema: [Customer.schema],
        sync: {
          user: user,
          partitionValue,
        },
      };
      const realmResult = await Realm.open(config);
      setRealm(realmResult);
    } catch (error) {
      throw `Error opening realm: ${JSON.stringify(error, null, 2)}`;
    }
  }

  useEffect(() => {
    stablishRealmApp();
  }, []);

  return (
    <RealmContext.Provider value={{realm}}>{children}</RealmContext.Provider>
  );
};

export const useRealmContext = () => useContext(RealmContext);