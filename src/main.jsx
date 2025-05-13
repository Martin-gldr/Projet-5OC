
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import HomePage from './Composants/HomePage/HomePage.jsx';
import APropos from './Composants/APropos.jsx';
import FicheLogement from "./Composants/FicheLogement.jsx";
import {createBrowserRouter,RouterProvider} from "react-router";

let router = createBrowserRouter([
  {path: "/",element: <HomePage />, errorElement: <div>Erreur</div>},
  {path:"/APropos", element: <APropos />},
  {path:"/FicheLogement", element: <FicheLogement />}
]);


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
