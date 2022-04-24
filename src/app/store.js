import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer from '../app/authSlice';
import clientsReducer from '../app/clientsSlice';
import InboundReducer from '../app/InboundSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    clients: clientsReducer,
    inbound: InboundReducer,
  },
  middleware: [
            ...getDefaultMiddleware({
                serializableCheck: false
            })
          ]
});