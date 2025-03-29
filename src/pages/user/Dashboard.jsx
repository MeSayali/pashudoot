
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, Heart, Video, Book, AlertCircle, ShoppingCart, Briefcase, 
  ArrowRight, Bell, Calendar, ChevronRight, MessageSquare
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [cattle, setCattle] = useState([
    { id: 1, name: "Lakshmi", type: "Cow", breed: "Gir", age: "4 years", status: "Healthy" },
    { id: 2, name: "Kali", type: "Buffalo", breed: "Murrah", age: "3 years", status: "Check-up needed" }
  ]);
  
  const quickLinks = [
    { name: "Find Vets", path: "/user/search-doctors", icon: <Search className="h-5 w-5 text-forest-600" /> },
    { name: "Healthcare Tips", path: "/user/common-healthcare", icon: <Heart className="h-5 w-5 text-forest-600" /> },
    { name: "Video Tutorials", path: "/user/videos", icon: <Video className="h-5 w-5 text-forest-600" /> },
    { name: "Articles", path: "/user/articles", icon: <Book className="h-5 w-5 text-forest-600" /> },
    { name: "Symptoms", path: "/user/symptoms", icon: <AlertCircle className="h-5 w-5 text-forest-600" /> },
    { name: "Buy & Sell", path: "/user/buy-sell", icon: <ShoppingCart className="h-5 w-5 text-forest-600" /> },
    { name: "Insurance", path: "/user/insurance", icon: <Briefcase className="h-5 w-5 text-forest-600" /> }
  ];
  
  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Rahul Sharma",
      date: "June 15, 2023",
      time: "10:00 AM",
      type: "Vaccination",
      status: "Confirmed"
    }
  ];
  
  const recentHealthIssues = [
    {
      id: 1,
      cattleName: "Lakshmi",
      issue: "Reduced milk production",
      date: "June 2, 2023",
      resolved: true
    },
    {
      id: 2,
      cattleName: "Kali",
      issue: "Mild fever",
      date: "May 28, 2023",
      resolved: false
    }
  ];
  
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {currentUser?.name || "Farmer"}!
        </h1>
        <p className="text-gray-600 mt-1">
          Here's an overview of your livestock and resources to keep them healthy.
        </p>
      </div>
      
      {/* Quick Links */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-forest-300 hover:shadow transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center mb-3">
                {link.icon}
              </div>
              <span className="text-sm font-medium text-gray-700">{link.name}</span>
            </Link>
          ))}
        </div>
      </section>
      
      {/* My Cattle */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My Cattle</h2>
          <Button variant="outline" size="sm">
            Add New <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cattle.map((animal) => (
            <Card key={animal.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{animal.name}</h3>
                  <p className="text-sm text-gray-500">
                    {animal.type} | {animal.breed}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    animal.status === "Healthy"
                      ? "bg-green-100 text-green-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {animal.status}
                </span>
              </div>
              <div className="mt-4 text-sm text-gray-700">
                <p>Age: {animal.age}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
                <Button variant="ghost" size="sm">
                  Health Records
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Reminders and Notifications */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Appointments */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/user/search-doctors">
                Find Vet <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {upcomingAppointments.length > 0 ? (
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <Card key={appointment.id} className="p-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-forest-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-medium">{appointment.doctor}</p>
                      <p className="text-sm text-gray-500">
                        {appointment.date} at {appointment.time}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">{appointment.type}</span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            appointment.status === "Confirmed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-6 text-center">
              <Bell className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No upcoming appointments</h3>
              <p className="text-gray-500 mb-4">Schedule your next check-up or consultation.</p>
              <Button size="sm" asChild>
                <Link to="/user/search-doctors">Find a Veterinarian</Link>
              </Button>
            </Card>
          )}
        </section>
        
        {/* Recent Health Issues */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Health Issues</h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/user/common-healthcare">
                Healthcare Tips <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {recentHealthIssues.length > 0 ? (
            <div className="space-y-4">
              {recentHealthIssues.map((issue) => (
                <Card key={issue.id} className="p-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-forest-600" />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="font-medium">{issue.cattleName}</p>
                      <p className="text-sm text-gray-500">{issue.date}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">{issue.issue}</span>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            issue.resolved
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                          }`}
                        >
                          {issue.resolved ? "Resolved" : "Ongoing"}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-6 text-center">
              <Heart className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No recent health issues</h3>
              <p className="text-gray-500 mb-4">
                Your cattle have been healthy lately. Keep it up!
              </p>
              <Button size="sm" asChild>
                <Link to="/user/symptoms">Check Symptoms Guide</Link>
              </Button>
            </Card>
          )}
        </section>
      </div>
      
      {/* Recent Activity */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <Card className="p-0 divide-y divide-gray-100">
          <div className="p-4 flex items-start">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="h-5 w-5 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="font-medium">You left a review for Dr. Sharma</p>
              <p className="text-sm text-gray-500">2 days ago</p>
            </div>
          </div>
          <div className="p-4 flex items-start">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
              <Heart className="h-5 w-5 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="font-medium">Updated Lakshmi's health record</p>
              <p className="text-sm text-gray-500">1 week ago</p>
            </div>
          </div>
          <div className="p-4 flex items-start">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Video className="h-5 w-5 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="font-medium">Watched "Proper Feeding Techniques" video</p>
              <p className="text-sm text-gray-500">2 weeks ago</p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
