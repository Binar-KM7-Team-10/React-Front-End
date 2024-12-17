import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routesConfig from "./util/routeConfig";
import ProtectedRoute from "./util/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {routesConfig.map(({ path, element: Component, type }) => (
          <Route
            key={path}
            path={path}
            element={
              type ? (
                <ProtectedRoute type={type}>
                  <Component />
                </ProtectedRoute>
              ) : (
                <Component />
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
