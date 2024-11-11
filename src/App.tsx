import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ProtectedRoute } from '@/components/auth/protected-route';

// Auth Routes
import Login from '@/pages/auth/login';
import Register from '@/pages/auth/register';

// Farmer Routes
import FarmerHome from '@/pages/farmer/home';
import FarmerInventory from '@/pages/farmer/inventory';
import FarmerOrders from '@/pages/farmer/orders';
import FarmerMessages from '@/pages/farmer/messages';
import FarmerProfile from '@/pages/farmer/profile';

// Buyer Routes
import BuyerHome from '@/pages/buyer/home';
import BuyerCatalog from '@/pages/buyer/catalog';
import BuyerCart from '@/pages/buyer/cart';
import BuyerOrders from '@/pages/buyer/orders';
import BuyerProfile from '@/pages/buyer/profile';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Farmer Routes */}
          <Route
            path="/farmer"
            element={
              <ProtectedRoute allowedRole="farmer">
                <FarmerHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmer/inventory"
            element={
              <ProtectedRoute allowedRole="farmer">
                <FarmerInventory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmer/orders"
            element={
              <ProtectedRoute allowedRole="farmer">
                <FarmerOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmer/messages"
            element={
              <ProtectedRoute allowedRole="farmer">
                <FarmerMessages />
              </ProtectedRoute>
            }
          />
          <Route
            path="/farmer/profile"
            element={
              <ProtectedRoute allowedRole="farmer">
                <FarmerProfile />
              </ProtectedRoute>
            }
          />

          {/* Buyer Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute allowedRole="buyer">
                <BuyerHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/catalog"
            element={
              <ProtectedRoute allowedRole="buyer">
                <BuyerCatalog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute allowedRole="buyer">
                <BuyerCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute allowedRole="buyer">
                <BuyerOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRole="buyer">
                <BuyerProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;