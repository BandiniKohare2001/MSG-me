
import ReactDOM from 'react-dom/client';
// import ChatScreen from './components/ChatScreen/ChatScreen';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
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

    
