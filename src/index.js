
import ReactDOM from 'react-dom/client';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatScreen from './components/ChatScreen/ChatScreen';


const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/chatscreen",
        element: <ChatScreen />,
      },
  ]);
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <ChatScreen /> */}

{/* <Login/> */}

{/* <Register/> */}

<RouterProvider router={router} />
</>


);

    
