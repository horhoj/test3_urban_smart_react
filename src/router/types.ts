export type RouterPathNames = 'profile' | 'signIn' | 'routeNotFound';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}

export interface RouteParams {
  [keys: string]: string | number;
}
