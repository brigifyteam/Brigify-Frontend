import { Routes, Route } from "react-router-dom";

// Page Imports
import AuthPage from "./pages/AuthPage";
import Home from "./pages/landingpage/home";
import MenteeOnboarding from "./pages/onboarding/MenteeOnboarding";
import MentorOnboarding from "./pages/onboarding/MentorOnboarding";
import HowItWorks from "./pages/landingpage/howitworks";
import Jobs from "./pages/landingpage/jobs";
import JobDetailsPage from "./pages/landingpage/jobdetails";
import ExploreSkills from "./pages/landingpage/exploreskills";

// Make sure to import these components (Update paths if necessary)
import DashboardLayout from "./components/dashboard/layout/DashboardLayout";
import UserDashboard from "./pages/dashboard/UserDashboard";
import LearningDashboard from "./pages/dashboard/LearningDashboard";
import MentorDirectory from "./pages/dashboard/MentorDirectory";
import MentorProfile from "./pages/dashboard/MentorProfile";

function App() {
  return (
    <Routes>
      {/* Public / Landing Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetailsPage />} />
      <Route path="/explore-skills" element={<ExploreSkills />} />

      {/* Onboarding Routes */}
      <Route path="/onboarding/mentee" element={<MenteeOnboarding />} />
      <Route path="/onboarding/mentor" element={<MentorOnboarding />} />

      {/* Protected Nested Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* The index route renders when we hit exactly /dashboard */}
        <Route index element={<UserDashboard />} />
        {/* Preserving other routes underneath dashboard */}
        <Route path="learn" element={<LearningDashboard />} />
      </Route>

      {/* Pages without the main dashboard sidebar */}
      <Route path="/mentorship" element={<MentorDirectory />} />
      <Route path="/mentorship/profile/:id" element={<MentorProfile />} />

    </Routes>
  );
}

export default App;
