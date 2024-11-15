import { Route, Routes as ReactRoutes, useLocation } from "react-router-dom";

import MainLayout from "../components/MainLayout/MainLayout";
import Features from "../components/pages/Features";
import Contact from "../components/pages/Contact";

const Routes = () => {
  const location = useLocation();
  return (
    <ReactRoutes location={location} key={location.key}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/*"
          element={
            <h3
              style={{ width: "100%", textAlign: "center", height: "100svh" }}
            >
              No page found
            </h3>
          }
        />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
