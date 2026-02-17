import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./Landing/pages/home";
import MenteeOnboarding from "./pages/onboarding/MenteeOnboarding";
import MentorOnboarding from "./pages/onboarding/MentorOnboarding";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/onboarding/mentee" element={<MenteeOnboarding />} />
      <Route path="/onboarding/mentor" element={<MentorOnboarding />} />
    </Routes>
  );
}

export default App;
