import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./Landing/pages/home";
import MenteeOnboarding from "./pages/onboarding/MenteeOnboarding";
import MentorOnboarding from "./pages/onboarding/MentorOnboarding";
import HowItWorks from "./Landing/pages/howitworks";
import Jobs from "./Landing/pages/jobs";
import ExploreSkills from "./Landing/pages/exploreskills";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/onboarding/mentee" element={<MenteeOnboarding />} />
      <Route path="/onboarding/mentor" element={<MentorOnboarding />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="learning" element={<LearningDashboard />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/explore-skills" element={<ExploreSkills />} />
    </Routes>
  );
}

export default App;
