import React, { useEffect, useState, useContext } from 'react';
import { ShareContextInstance } from './shareContext';
import { StateUpdateType } from '../global';

const Batcher = (props: { setNotifyBatcherOfChange: any }) => {
  const [state, dispatch] = React.useReducer(s => ({}) , {} );
  const storeRef = useContext(ShareContextInstance);
  props.setNotifyBatcherOfChange(() => dispatch());
  useEffect(() => {
    if (storeRef.uiQueue.size > 0) {
      Array.from(storeRef.uiQueue).forEach((id) => {
        storeRef.eventEmitter.emit(id + '----' + StateUpdateType.State);
      });
      storeRef.uiQueue.clear();
    }
    
  });
  return null;
};

export default Batcher;
