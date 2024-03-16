import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Layout from "./layout/Layout";
import PrivateRoutes from "./protectRoutes/PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<PrivateRoutes />}>
            <Route
              path="/product-list"
              element={
                <Layout>
                  <ProductListPage />
                </Layout>
              }
            />
            <Route
              path="/product-list/:id"
              element={
                <Layout>
                  <ProductDetailsPage />
                </Layout>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
