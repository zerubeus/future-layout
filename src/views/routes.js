import App from './app';
import ProfilePage from './pages/profile-page';
import MainPage from './pages/main-page';
import { createRoutesFromProfile } from '../core/profile';

export const paths = {
  ROOT: '/',
};

export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: ProfilePage,
        }
      },
      {
        path: '/main',
        component: MainPage,
        childRoutes: createRoutesFromProfile(getState)
      }
    ]
  };
};
