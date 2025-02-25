import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import { RouteIndex, RouteLogIn, RouteSignUp } from "./helpers/RouteName";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteIndex} element={<Layout />}>
          <Route index element={<Index />} />
        </Route>

        <Route path={RouteSignUp} element={<SignUp />} />
        <Route path={RouteLogIn} element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
