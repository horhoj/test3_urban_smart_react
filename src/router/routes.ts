import { SignInPage } from '../pages/SignInPage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { Profile } from '../pages/Profile';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    name: 'signIn',
    path: '/sign-in',
    exact: true,
    private: false,
    always: false,
    component: SignInPage,
  },
  {
    name: 'profile',
    path: '/profile',
    exact: true,
    private: true,
    always: false,
    component: Profile,
  },

  {
    name: 'routeNotFound',
    path: '*',
    exact: false,
    private: false,
    always: true,
    component: RouteNotFoundPage,
  },
];
