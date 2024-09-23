import Layout from './Components/Layout';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Body from './Components/Body';

import Cart from './Components/Cart';
import Error from './Components/Error';
import { ResContextProvider } from './Components/ResContext';
import DishList from './Components/DishList';
import { Provider } from 'react-redux';
import appStore from './Redux/appStore';

const Contact = lazy(()=>import("./Components/Contact"))
const About = lazy(()=>import("./Components/About"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/contact",
        element: <Suspense fallback={<div>Please Wait While the Content is being Loaded</div>}> <Contact/></Suspense>
      },
      {
        path: "/about",
        element: <Suspense fallback={<div>Please Wait While the Content is being Loaded</div>}> <About/></Suspense>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/dishlist/:resId",
        element: <DishList/>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
    <ResContextProvider>
    <div> 
      <RouterProvider router={appRouter}/>
    </div>
    </ResContextProvider>
    </Provider>
  );
}

export default App;
