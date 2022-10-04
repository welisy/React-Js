
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Cart } from "./components/Pages/expl/Cart";
import { Catalog } from "./components/Pages/expl/Catalog";
import { EventList } from "./components/Pages/Event/EventList";

export function AppRoutes() {
  return (
    <div id="main">
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/eventList" element={<EventList />} />
      </Routes>  
    </Router> 
    </div>
  )
}