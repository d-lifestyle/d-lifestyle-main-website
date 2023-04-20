import { Route, Routes } from "react-router-dom";
import { AboutUsPage, CategoryPage, ContactUsPage, Home, JoinMemberShip } from "./pages";
export default function App() {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about-us" element={<AboutUsPage />} />
               <Route path="/contact-us" element={<ContactUsPage />} />
               <Route path="/join-us" element={<JoinMemberShip />} />
               <Route path="/categories" element={<CategoryPage />} />
          </Routes>
     );
}
