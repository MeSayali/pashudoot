
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";

const DashboardLayout = ({ userType }) => {
  const { currentUser } = useAuth();

  // If not logged in, redirect to login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // If logged in as different user type, redirect to appropriate dashboard
  if (currentUser.userType !== userType) {
    return <Navigate to={`/${currentUser.userType}`} replace />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar userType={userType} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
