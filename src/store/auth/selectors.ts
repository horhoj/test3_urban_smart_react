import { RootState } from '../types';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const getLogin = (state: RootState): string => state.auth.login;
