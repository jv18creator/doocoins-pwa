import React from "react";
import LoggedOut from "./screens/LoggedOut";
import { AuthProvider } from "./use-auth-client";
import "./assets/css/main.css";
import ChildList from "./screens/ChildList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Rewards from "./screens/Rewards";
import Tasks from "./screens/Tasks";
import Wallet from "./screens/Wallet";
import NoMatch from "./screens/NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./screens/About";
import Help from "./screens/Help";

function App() {
  return (
    <main id="pageContent">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ChildList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rewards"
            element={
              <ProtectedRoute>
                <Rewards />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoggedOut />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </main>
  );
}

export default () => (
  <AuthProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AuthProvider>
);
