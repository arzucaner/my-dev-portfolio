import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SocialMedia from "./pages/SocialMedia";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/social/:platform" element={<SocialMedia/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
