import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "@/App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, About, Services, FAQ, Contact, Blogs, Blog, Projects, Project, Jobs, Job, NotFound } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact', element: <Contact /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/blogs/:slug', element: <Blog /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:slug', element: <Project /> },
      { path: '/jobs', element: <Jobs /> },
      { path: '/jobs/:slug', element: <Job /> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
