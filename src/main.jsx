import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog';
import JobsDetails from './components/JobsDetails';
import Featurejobs from './components/Featurejobs';
import Home from './components/Home';
import Statistics from './components/Statistics';
import ErrorPage from './components/ErrorPage';
import AppliedJobs from './components/AppliedJobs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/',
        element: <Featurejobs></Featurejobs>,
      },
      {
        path: 'job-details/:id',
        element: <JobsDetails></JobsDetails>,
      },

      {
        path: 'applied-jobs',
        element: <AppliedJobs/>
      },
      {
        path: 'blog',
        element: <Blog/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
