import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import Sleep from './pages/Sleep';
import Schedule from './pages/Schedule';
import Progress from './pages/Progress';

const router = createBrowserRouter([
  {
    path: '/LoginPage',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <Sleep />,
  },
  {
    path: '/Schedule',
    element: <Schedule />,
  },
  {
    path: '/Progress',
    element: <Progress />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
