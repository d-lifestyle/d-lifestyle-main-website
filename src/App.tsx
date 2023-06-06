import { Route, Routes } from "react-router-dom";
import {
     About,
     Accommodation,
     AccommodationDetails,
     Contact,
     Cruise,
     Home,
     NotFound,
     ToursPackage,
     ToursTravelDetails,
} from "./pages";

export default function App() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/accommodation/:id" element={<Accommodation />} />
               <Route path="/tours-package/:id" element={<ToursPackage />} />
               <Route path="/cruise" element={<Cruise />} />
               <Route path="/accommodation-details/:id" element={<AccommodationDetails />} />
               <Route path="/tours-travel-details/:id" element={<ToursTravelDetails />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/about" element={<About />} />
               <Route path="*" element={<NotFound />} />
          </Routes>
     );
}
