import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics';
import AppliedJobs from './components/AppliedJobs';
import Blog from './components/Blog';
import JobDetails from './components/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Statistics/>,
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: '/job-details/:id',
        element: <JobDetails/>,
      },
      {
        path: '/blog',
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
