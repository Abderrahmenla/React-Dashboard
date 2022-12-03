import { lazy } from 'react';
import Dashboard from 'views/Dashboard.js';

const UserProfile = lazy(() => import('views/UserProfile.js'));

const dashboardRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'nc-icon nc-chart-pie-35',
    component: Dashboard,
    layout: '/admin',
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: 'nc-icon nc-circle-09',
    component: UserProfile,
    layout: '/admin',
  },
];

export default dashboardRoutes;
