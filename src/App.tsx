import { Route, Routes } from "react-router-dom";
import { AboutUsPage, AccommodationDetails, CategoryPage, ContactUsPage, Home, JoinMemberShip } from "./pages";
import { SnackbarProvider } from "notistack";
export default function App() {
  return (
    <SnackbarProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/join-us" element={<JoinMemberShip />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/accommodation/:id" element={<AccommodationDetails />} />
        <Route path="/accommodation/with-categories/:categoryId" element={<AccommodationDetails />} />
      </Routes>
    </SnackbarProvider>
  );
}
