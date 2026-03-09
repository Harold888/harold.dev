import { Routes, Route } from "react-router-dom";
import Error404Page from "../pages/errors/Error404Page";
import Error500Page from "../pages/errors/Error500Page";
import Header from "./../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "./../components/Hero";
import SobreMi from "../components/SobreMi";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Hero />
            <SobreMi />
            <Footer />
          </>
        }
      />
      <Route path="*" element={<Error404Page />} />
      <Route path="/error500" element={<Error500Page />} />
    </Routes>
  );
};

export default AppRouter;
