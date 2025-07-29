import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from './components/ui/provider.tsx'

import App from './App.tsx'

import './index.css'
import Home from './pages/Home/Home.tsx';
import Services from './pages/Services/Services.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: < />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Services",
        element: <Services />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
