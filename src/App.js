import logo from './logo.svg';
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Video from './Video';
import DateComponent from './Date';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login"/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/video",
      element: <Video/>
    },
    {
      path: "/date",
      element: <DateComponent/>
    }
  ])

  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
