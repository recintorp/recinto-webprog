import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Layout from './layouts/Layout';
import ArticlePage from './pages/LandingPages/ArticlePage';
import HomePage from './pages/LandingPages/HomePage';
import AboutPage from './pages/LandingPages/AboutPage';
import ArticleListPage from './pages/LandingPages/ArticleListPage';
import AuthLayout from './layouts/AuthLayout';  
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import DashLayout from './layouts/DashLayout';
import DashboardPage from './pages/DashboardPages/DashboardPage';
import ReportsPage from './pages/DashboardPages/ReportsPage';
import UsersPage from './pages/DashboardPages/UsersPage';
import DashArticleListPage from './pages/DashboardPages/DashArticleListPage';
import DashArticlePage from './pages/DashboardPages/DashArticlePage';

const GlobalWrapper = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const type = localStorage.getItem('type');
  
  if (!token || type === 'viewer') {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
};

const AdminRoute = ({ children }) => {
  const type = localStorage.getItem('type');
  
  if (type !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const routes = [
  {
    element: <GlobalWrapper />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <HomePage />,
          },
          {
            path: 'about',
            element: <AboutPage />,
          },
          {
            path: 'articles',
            element: <ArticleListPage />,
          },
          {
            path: 'articles/:name',
            element: <ArticlePage />,
          },
        ],
      },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <SignInPage />,
          },
          {
            path: 'signup',
            element: <SignUpPage />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <DashLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <DashboardPage />,
          },
          {
            path: 'reports',
            element: <ReportsPage />,
          },
          {
            path: 'articles',
            element: <DashArticleListPage />,
          },
          {
            path: 'articles/create',
            element: <DashArticlePage />,
          },
          {
            path: 'articles/edit/:id',
            element: <DashArticlePage />,
          },
          {
            path: 'users',
            element: (
              <AdminRoute>
                <UsersPage />
              </AdminRoute>
            ),
          }
        ]
      }
    ]
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;