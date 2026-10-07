import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import MyHabits from "./pages/myhabits/MyHabits";
import Progress from "./pages/Progress";
import Settings from "./pages/settings/Settings";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/MyHabits" element={<MyHabits />} />
        <Route path="/Progress" element={<Progress />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
