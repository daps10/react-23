import { 
  Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';

// create browser router
const router= createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> }
    ],
  },
]);

// alternate ways to display router
// const routeDefinitions= createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />}  />
//     <Route path='/products' element={<Products />}  />
//   </Route>
// )
// const router= createBrowserRouter(routeDefinitions);


function App() {
  return <RouterProvider router={ router }/>;
}

export default App;