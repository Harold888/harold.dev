import { Routes, Route } from "react-router-dom";
import Error404Page from "../pages/errors/Error404Page";
import Error403Page from "../pages/errors/Error403Page";
import Error500Page from "../pages/errors/Error500Page";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <h1 className="text-4xl font-bold text-blue-500">HOLA MUNDOOO</h1>
        }
      />
      <Route path="*" element={<Error404Page />} />
      <Route path="/error500" element={<Error500Page />} />
    </Routes>
  );
};

export default AppRouter;
