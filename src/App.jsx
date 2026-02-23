import { Routes, Route } from "react-router-dom";

// Page Imports
import AuthPage from "./pages/AuthPage";
import Home from "./Landing/pages/home";
import MenteeOnboarding from "./pages/onboarding/MenteeOnboarding";
import MentorOnboarding from "./pages/onboarding/MentorOnboarding";
import HowItWorks from "./Landing/pages/howitworks";
import Jobs from "./Landing/pages/jobs";
import ExploreSkills from "./Landing/pages/exploreskills";

// Make sure to import these components (Update paths if necessary)
import DashboardLayout from "./components/dashboard/layout/DashboardLayout"; 
import LearningDashboard from "./pages/dashboard/LearningDashboard"; 

function App() {
  return (
    <Routes>
      {/* Public / Landing Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/explore-skills" element={<ExploreSkills />} />

      {/* Onboarding Routes */}
      <Route path="/onboarding/mentee" element={<MenteeOnboarding />} />
      <Route path="/onboarding/mentor" element={<MentorOnboarding />} />

      {/* Protected Nested Dashboard Routes */}
      {/* This renders DashboardLayout, and "learning" renders inside the <Outlet /> of that layout */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="learning" element={<LearningDashboard />} />
      </Route>

    </Routes>
  );
}

export default App;
