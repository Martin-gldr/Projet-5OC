
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import HomePage from './Composants/pages/HomePage/HomePage.jsx';
import APropos from './Composants/pages/APropos/APropos.jsx';
import FicheLogement from "./Composants/pages/FicheLogement/FicheLogement.jsx";
import {createBrowserRouter,RouterProvider} from "react-router";
import Erreur404 from './Composants/pages/Erreur404/Erreur404.jsx';

let router = createBrowserRouter([
  {path: "/",element: <HomePage />, errorElement: <Erreur404 />},
  {path:"/APropos", element: <APropos />, errorElement: <Erreur404 />},
  {path:"/FicheLogement/:datasId", element: <FicheLogement />, errorElement: <Erreur404 />}
]);


createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
