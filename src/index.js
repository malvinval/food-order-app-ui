import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import Bookmarks from './Pages/Bookmarks';
import History from './Pages/History';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
