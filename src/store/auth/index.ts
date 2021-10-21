import * as selectors from './selectors';
import { authSlice } from './slice';

export const authSelectors = selectors;

export const { actions: authActions, reducer: authReducer } = authSlice;
