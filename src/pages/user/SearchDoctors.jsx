
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, MapPin, Phone, Calendar, Star, MessageSquare, ChevronDown, Filter, 
  CheckCircle, Clock, Users, Calendar as CalendarIcon
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SearchDoctors = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [filters, setFilters] = useState({
    showAvailableToday: false,
    showOnlineConsultation: false,
    showHomeVisit: false,
    ratingAtLeast: 0
  });
  const [showFilters, setShowFilters] = useState(false);
  
  // Mock doctor data
  const doctors = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop",
      specialty: "General Veterinary",
      location: "Delhi",
      distance: "3.2 km",
      availableToday: true,
      onlineConsultation: true,
      homeVisit: true,
      rating: 4.8,
      reviews: 124,
      experience: "12 years",
      about: "Dr. Sharma specializes in bovine healthcare with extensive experience in treating both cows and buffaloes. He provides comprehensive healthcare including preventive care, diagnostics, and treatment."
    },
    {
      id: 2,
      name: "Dr. Priya Patel",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop",
      specialty: "Livestock Specialist",
      location: "Mumbai",
      distance: "5.7 km",
      availableToday: false,
      onlineConsultation: true,
      homeVisit: false,
      rating: 4.5,
      reviews: 98,
      experience: "8 years",
      about: "Dr. Patel specializes in dairy cattle and has helped numerous farmers improve milk yield and overall cattle health. She focuses on nutrition and preventive healthcare."
    },
    {
      id: 3,
      name: "Dr. Amit Kumar",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&h=150&fit=crop",
      specialty: "Dairy Health Expert",
      location: "Pune",
      distance: "2.1 km",
      availableToday: true,
      onlineConsultation: false,
      homeVisit: true,
      rating: 4.9,
      reviews: 156,
      experience: "15 years",
      about: "With 15 years of experience in dairy health, Dr. Kumar provides comprehensive veterinary services including regular check-ups, emergency care, and vaccination programs for cattle."
    }
  ];
  
  const specialties = [
    "All Specialties",
    "General Veterinary",
    "Livestock Specialist",
    "Dairy Health Expert",
    "Reproductive Health",
    "Nutrition Specialist"
  ];
  
  const toggleFilter = (filterName) => {
    setFilters({
      ...filters,
      [filterName]: !filters[filterName]
    });
  };
  
  const filteredDoctors = doctors.filter((doctor) => {
    // Search by name or specialty
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by specialty
    const matchesSpecialty =
      selectedSpecialty === "" ||
      selectedSpecialty === "All Specialties" ||
      doctor.specialty === selectedSpecialty;
    
    // Apply other filters
    const matchesAvailability = !filters.showAvailableToday || doctor.availableToday;
    const matchesOnline = !filters.showOnlineConsultation || doctor.onlineConsultation;
    const matchesHomeVisit = !filters.showHomeVisit || doctor.homeVisit;
    const matchesRating = doctor.rating >= filters.ratingAtLeast;
    
    return (
      matchesSearch &&
      matchesSpecialty &&
      matchesAvailability &&
      matchesOnline &&
      matchesHomeVisit &&
      matchesRating
    );
  });
  
  const handleConsultNow = (doctor) => {
    toast({
      title: `Requesting consultation with ${doctor.name}`,
      description: "We're connecting you with the doctor. Please wait for confirmation.",
    });
  };
  
  const handleScheduleAppointment = (doctor) => {
    toast({
      title: `Schedule with ${doctor.name}`,
      description: "Opening scheduling calendar. Please select a date and time.",
    });
  };
  
  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Find a Veterinarian
        </h1>
        
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name or specialty"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              <option value="">All Specialties</option>
              {specialties.slice(1).map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </Button>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={filters.showAvailableToday}
                      onChange={() => toggleFilter("showAvailableToday")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Available Today</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Consultation Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={filters.showOnlineConsultation}
                      onChange={() => toggleFilter("showOnlineConsultation")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Online Consultation</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={filters.showHomeVisit}
                      onChange={() => toggleFilter("showHomeVisit")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Home Visit</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        className="h-4 w-4 text-forest-600 border-gray-300 focus:ring-forest-500"
                        checked={filters.ratingAtLeast === rating}
                        onChange={() => setFilters({ ...filters, ratingAtLeast: rating })}
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        {rating}+ <Star className="h-3 w-3 inline text-yellow-500" /> & above
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setFilters({
                    showAvailableToday: false,
                    showOnlineConsultation: false,
                    showHomeVisit: false,
                    ratingAtLeast: 0
                  });
                }}
              >
                Reset Filters
              </Button>
            </div>
          </div>
        )}
        
        {/* Results Count */}
        <div className="text-sm text-gray-500">
          {filteredDoctors.length} veterinarians found
        </div>
      </div>
      
      {/* Doctors List */}
      <div className="space-y-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 p-6 flex justify-center md:justify-start">
                  <img
                    className="h-32 w-32 rounded-full object-cover"
                    src={doctor.image}
                    alt={doctor.name}
                  />
                </div>
                <div className="p-6 md:p-6 md:flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{doctor.name}</h2>
                      <p className="text-forest-600">{doctor.specialty}</p>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">
                          {doctor.location} ({doctor.distance})
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-3 md:mt-0 flex items-center">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="ml-1 font-medium">{doctor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500 ml-1">
                        ({doctor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {doctor.availableToday && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Available Today
                      </span>
                    )}
                    {doctor.onlineConsultation && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Online Consultation
                      </span>
                    )}
                    {doctor.homeVisit && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <MapPin className="h-3 w-3 mr-1" />
                        Home Visit
                      </span>
                    )}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <Clock className="h-3 w-3 mr-1" />
                      Experience: {doctor.experience}
                    </span>
                  </div>
                  
                  <p className="mt-4 text-sm text-gray-600">{doctor.about}</p>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    {doctor.availableToday && (
                      <Button 
                        className="bg-forest-600 hover:bg-forest-700"
                        onClick={() => handleConsultNow(doctor)}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Consult Now
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      onClick={() => handleScheduleAppointment(doctor)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Appointment
                    </Button>
                    <Button variant="ghost">View Profile</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
            <Users className="h-12 w-12 mx-auto text-gray-400" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">No veterinarians found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      
      {/* Need Emergency Help */}
      <Card className="bg-amber-50 border-amber-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-amber-800">Need Emergency Help?</h3>
          <p className="text-amber-700 mt-1">
            If your animal needs immediate attention, call our 24/7 emergency helpline.
          </p>
          <Button 
            className="mt-4 bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => {
              toast({
                title: "Emergency Helpline",
                description: "Connecting you to our 24/7 emergency veterinary service at +91 1800-XXX-XXXX",
              });
            }}
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Emergency Helpline
          </Button>
        </div>
      </Card>
      
      {/* Upcoming Webinars */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold mb-4">Upcoming Webinars</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-md bg-forest-100 flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-forest-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium">Modern Approaches to Cattle Nutrition</h4>
              <p className="text-sm text-gray-500">June 20, 2023 • 3:00 PM</p>
              <div className="mt-2">
                <Button variant="link" className="p-0 h-auto text-forest-600">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-md bg-forest-100 flex items-center justify-center">
                <CalendarIcon className="h-6 w-6 text-forest-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium">Preventive Healthcare for Dairy Cattle</h4>
              <p className="text-sm text-gray-500">June 25, 2023 • 4:30 PM</p>
              <div className="mt-2">
                <Button variant="link" className="p-0 h-auto text-forest-600">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDoctors;
