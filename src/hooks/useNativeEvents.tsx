/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {NativeEventEmitter} from 'react-native';

type EventCallBack = () => void;

export function useNativeEvents(event: string, callBack?: EventCallBack) {
  useEffect(() => {
    if (callBack) {
      const eventEmitter = new NativeEventEmitter();
      const eventListener = eventEmitter.addListener(event, () => {
        callBack();
      });
      return () => eventListener.remove();
    }
  }, []);

  function emitEvent(eventProps: any) {
    const emmiter = new NativeEventEmitter();
    emmiter.emit(event, eventProps);
  }

  return {emitEvent};
}
