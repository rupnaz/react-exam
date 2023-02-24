import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {loader as cardLoader} from './routes/root'
import AddNewCard from './routes/addNewCard'
import {action as newCardAction} from './components/cardform/Cardform'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: cardLoader,
    
  },
  {
    path: "addNewCard",
    element: <AddNewCard/>,
    action: newCardAction,
    loader: cardLoader
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);