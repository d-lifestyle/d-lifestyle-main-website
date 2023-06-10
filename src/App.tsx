import { Route, Routes } from "react-router-dom";
import {
     About,
     Accommodation,
     AccommodationDetails,
     Contact,
     Cruise,
     Flight,
     Home,
     NotFound,
     Rental,
     ToursPackage,
     ToursTravelDetails,
} from "./pages";

export default function App() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/accommodations/:id" element={<Accommodation />} />
               <Route path="/tours-package/:id" element={<ToursPackage />} />
               <Route path="/cruise/:id" element={<Cruise />} />
               <Route path="/rental/:id" element={<Rental />} />
               <Route path="/flight" element={<Flight />} />

               <Route path="/accommodation-details/:id" element={<AccommodationDetails />} />
               <Route path="/tours-travel-details/:id" element={<ToursTravelDetails />} />
               <Route path="/cruise-details/:id" element={<Cruise />} />

               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />

               <Route path="*" element={<NotFound />} />
          </Routes>
     );
}
