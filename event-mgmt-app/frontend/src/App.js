import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Events, { loader as eventsLoader } from './pages/Events';
import EventDetail, { loader as eventDetailLoader } from './pages/EventDetail';
import NewEvent, { action as NewEventAction } from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import Root from './pages/Root';
import EventsRoot from './pages/EventsRoot';
import Error from './pages/Error';

const router= createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <Events />,
            loader: eventsLoader
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index:true,
                element: <EventDetail />
              },
              {
                path: 'edit',
                element: <EditEvent />
              },
            ],
          },
          {
            path: 'new',
            element: <NewEvent />,
            action: NewEventAction
          },
        ]
      },
    ]
  } 
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;