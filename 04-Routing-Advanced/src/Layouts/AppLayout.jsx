import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
