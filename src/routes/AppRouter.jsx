import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404Page from "../pages/errors/Error404Page";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-4xl font-bold text-blue-500">HOLA MUNDOOO</h1>
          }
        />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
