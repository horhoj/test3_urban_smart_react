import { RootState } from '../types';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;
