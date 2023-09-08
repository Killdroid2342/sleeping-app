import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import Sleep from './pages/Sleep';
import AlarmClock from './pages/AlarmClock';

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
    path: '/alarmclock',
    element: <AlarmClock />,
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
