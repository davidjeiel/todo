import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import { GlobalStyle } from "./styles";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;