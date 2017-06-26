import App from './app';
import ProfilePage from './pages/profile-page';

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
    ]
  };
};
