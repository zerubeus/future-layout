import App from './app';
import ProfilePage from './pages/profile-page';
import MainPage from './pages/main-page';
import ViewsTemplate from './pages/views-template';

export const paths = {
  ROOT: '/',
  MAIN: '/main'
};

export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [{
        indexRoute: {
          component: ProfilePage,
        }
      },
      {
        path: paths.MAIN,
        component: MainPage,
        childRoutes: [{
          indexRoute: {
            component: ViewsTemplate,
          }
        }]
      }
    ]
  };
};