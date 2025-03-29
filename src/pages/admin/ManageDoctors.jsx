
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Edit, Trash2, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ManageDoctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Large Animal Medicine",
      experience: "15 years",
      location: "Delhi NCR",
      contactNumber: "+91 98765 43210",
      email: "dr.rajesh@gmail.com",
      status: "Verified",
      joinDate: "12 Jan 2023"
    },
    {
      id: 2,
      name: "Dr. Priya Singh",
      specialization: "Bovine Reproduction",
      experience: "8 years",
      location: "Jaipur, Rajasthan",
      contactNumber: "+91 87654 32109",
      email: "drpriyasingh@gmail.com",
      status: "Verified",
      joinDate: "5 Mar 2023"
    },
    {
      id: 3,
      name: "Dr. Sunil Patel",
      specialization: "Veterinary Surgery",
      experience: "12 years",
      location: "Ahmedabad, Gujarat",
      contactNumber: "+91 76543 21098",
      email: "drsunil.vet@gmail.com",
      status: "Pending",
      joinDate: "18 Jul 2023"
    },
    {
      id: 4,
      name: "Dr. Meena Sharma",
      specialization: "Animal Nutrition",
      experience: "7 years",
      location: "Lucknow, UP",
      contactNumber: "+91 65432 10987",
      email: "dr.meena.nutrition@gmail.com",
      status: "Verified",
      joinDate: "23 Apr 2023"
    },
    {
      id: 5,
      name: "Dr. Amit Verma",
      specialization: "Bovine Medicine",
      experience: "10 years",
      location: "Chandigarh, Punjab",
      contactNumber: "+91 54321 09876",
      email: "dramit.vet@gmail.com",
      status: "Pending",
      joinDate: "8 Aug 2023"
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-green-800">Manage Veterinarians</h1>
          <p className="text-gray-600 mt-1">Add, edit, or remove veterinarians from the platform</p>
        </div>
        <Link to="/admin/add-doctor">
          <Button className="bg-green-700 hover:bg-green-800">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Doctor
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Doctor Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Filter by Status</option>
                <option value="verified">Verified</option>
                <option value="pending">Pending</option>
              </select>
              <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Filter by Specialization</option>
                <option value="medicine">Medicine</option>
                <option value="surgery">Surgery</option>
                <option value="reproduction">Reproduction</option>
                <option value="nutrition">Nutrition</option>
              </select>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors..."
                className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50 text-left">
                  <th className="px-4 py-3 text-green-800 font-semibold">Name</th>
                  <th className="px-4 py-3 text-green-800 font-semibold">Specialization</th>
                  <th className="px-4 py-3 text-green-800 font-semibold">Location</th>
                  <th className="px-4 py-3 text-green-800 font-semibold">Contact</th>
                  <th className="px-4 py-3 text-green-800 font-semibold">Status</th>
                  <th className="px-4 py-3 text-green-800 font-semibold">Joined</th>
                  <th className="px-4 py-3 text-green-800 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {doctors.map((doctor) => (
                  <tr key={doctor.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-800">{doctor.name}</div>
                      <div className="text-xs text-gray-500">{doctor.experience} experience</div>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{doctor.specialization}</td>
                    <td className="px-4 py-3 text-gray-700">{doctor.location}</td>
                    <td className="px-4 py-3">
                      <div className="text-gray-700">{doctor.contactNumber}</div>
                      <div className="text-xs text-gray-500">{doctor.email}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          doctor.status === "Verified"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {doctor.status === "Verified" ? (
                          <CheckCircle className="mr-1 h-3 w-3" />
                        ) : (
                          <XCircle className="mr-1 h-3 w-3" />
                        )}
                        {doctor.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{doctor.joinDate}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        {doctor.status === "Pending" && (
                          <Button
                            size="sm"
                            className="h-8 px-3 bg-green-700 hover:bg-green-800 text-xs"
                          >
                            Verify
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-500">Showing 1-5 of 5 doctors</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageDoctors;
