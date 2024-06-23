import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './views/home/home';
import Display from './views/cardDisplay/display';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>
    },
    {
        path: "/display/:id",
        element:<Display/>   
    }
])

root.render( <RouterProvider router={router}/>);


