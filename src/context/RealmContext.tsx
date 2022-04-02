/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {createContext, useContext} from 'react';
import {Text, View} from 'react-native';
import Realm, {User} from 'realm';
import {appId, devMode, partitionValue} from '../../appConfig';
import {Customer} from '../database/models/Customer';
import {Delivery} from '../database/models/Delivery';
import {seedRealm} from '../mock/seedDataBase';
// import {ObjectId} from 'bson';

interface RealmContextProps {
  realm: Realm | null;
}

const RealmContext = createContext<RealmContextProps>({} as RealmContextProps);

export const RealmProvider: React.FC = ({children}) => {
  const [realm, setRealm] = useState<Realm | null>(null);
  const [canDisplayInDevMode, setCanDisplayInDevMode] = useState(false);

  useEffect(() => {
    if (realm === null) {
      return;
    }
    if (devMode) {
      seedRealm(realm);
    }
    setCanDisplayInDevMode(true);
  }, [realm]);

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
        schema: [Customer.schema, Delivery.schema],
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
    <RealmContext.Provider value={{realm}}>
      {devMode ? (
        canDisplayInDevMode ? (
          children
        ) : (
          <View
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Modo de Desenvolvimento</Text>
            <Text>Carregando...</Text>
          </View>
        )
      ) : (
        children
      )}
    </RealmContext.Provider>
  );
};

export const useRealmContext = () => useContext(RealmContext);
