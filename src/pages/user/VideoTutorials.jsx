
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, Video, Filter, ChevronDown, Play, Clock, Eye, ThumbsUp, 
  BookOpen, ArrowUpRight
} from "lucide-react";

const VideoTutorials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [videoFilters, setVideoFilters] = useState({
    showBeginner: false,
    showIntermediate: false,
    showAdvanced: false,
    durationUnder10: false,
    durationUnder30: false
  });
  
  // Mock video data
  const videos = [
    {
      id: 1,
      title: "Essential Care for Newborn Calves",
      thumbnail: "https://images.unsplash.com/photo-1504974126890-c8c3f1856d56?fit=crop&w=600&h=338",
      category: "Basic Care",
      views: 24500,
      likes: 1850,
      duration: "12:45",
      level: "Beginner",
      description: "Learn the essential care practices for newborn calves to ensure their health and growth in the first weeks of life.",
      date: "May 15, 2023",
      featured: true
    },
    {
      id: 2,
      title: "Recognizing and Treating Common Cattle Diseases",
      thumbnail: "https://images.unsplash.com/photo-1514824511687-bec41a514c6f?fit=crop&w=600&h=338",
      category: "Disease Management",
      views: 18700,
      likes: 1530,
      duration: "24:10",
      level: "Intermediate",
      description: "A comprehensive guide to identifying and treating the most common diseases affecting cattle.",
      date: "April 28, 2023"
    },
    {
      id: 3,
      title: "Proper Feeding Techniques for Maximum Milk Production",
      thumbnail: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?fit=crop&w=600&h=338",
      category: "Nutrition",
      views: 32100,
      likes: 2430,
      duration: "18:20",
      level: "Intermediate",
      description: "Expert guidance on optimizing feed formulation and feeding practices to improve milk production in dairy cattle.",
      date: "June 10, 2023"
    },
    {
      id: 4,
      title: "Setting Up a Clean and Comfortable Cattle Shed",
      thumbnail: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?fit=crop&w=600&h=338",
      category: "Housing",
      views: 15300,
      likes: 1210,
      duration: "15:45",
      level: "Beginner",
      description: "Learn how to create and maintain a clean, comfortable, and healthy environment for your cattle.",
      date: "March 12, 2023"
    },
    {
      id: 5,
      title: "Advanced Reproductive Management in Dairy Cattle",
      thumbnail: "https://images.unsplash.com/photo-1451417379553-15d8e8f49cde?fit=crop&w=600&h=338",
      category: "Reproduction",
      views: 12800,
      likes: 980,
      duration: "32:15",
      level: "Advanced",
      description: "Detailed instructions on reproductive management techniques to improve breeding efficiency and herd genetics.",
      date: "May 30, 2023"
    },
    {
      id: 6,
      title: "Preventing and Managing Heat Stress in Cattle",
      thumbnail: "https://images.unsplash.com/photo-1545486332-9e0999ec8636?fit=crop&w=600&h=338",
      category: "Health Management",
      views: 19600,
      likes: 1680,
      duration: "14:30",
      level: "Intermediate",
      description: "Strategies to recognize, prevent, and manage heat stress in cattle, especially during summer months.",
      date: "June 5, 2023"
    }
  ];
  
  const categories = [
    "All Categories",
    "Basic Care",
    "Nutrition",
    "Disease Management",
    "Health Management",
    "Reproduction",
    "Housing"
  ];
  
  const toggleFilter = (filterName) => {
    setVideoFilters({
      ...videoFilters,
      [filterName]: !videoFilters[filterName]
    });
  };
  
  const filteredVideos = videos.filter((video) => {
    // Search by title or description
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory =
      selectedCategory === "" ||
      selectedCategory === "All Categories" ||
      video.category === selectedCategory;
    
    // Apply level filters
    const levelFiltersActive = videoFilters.showBeginner || videoFilters.showIntermediate || videoFilters.showAdvanced;
    const matchesLevel =
      !levelFiltersActive ||
      (videoFilters.showBeginner && video.level === "Beginner") ||
      (videoFilters.showIntermediate && video.level === "Intermediate") ||
      (videoFilters.showAdvanced && video.level === "Advanced");
    
    // Apply duration filters
    const durationInMinutes = parseInt(video.duration.split(":")[0]);
    const durationFiltersActive = videoFilters.durationUnder10 || videoFilters.durationUnder30;
    const matchesDuration =
      !durationFiltersActive ||
      (videoFilters.durationUnder10 && durationInMinutes < 10) ||
      (videoFilters.durationUnder30 && durationInMinutes < 30);
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });
  
  // Get featured videos
  const featuredVideos = videos.filter((video) => video.featured);
  
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Video Tutorials
        </h1>
        <p className="text-gray-600">
          Learn essential cattle care techniques from expert veterinarians through our video tutorials
        </p>
      </div>
      
      {/* Featured Videos Carousel */}
      {featuredVideos.length > 0 && (
        <section className="bg-forest-50 p-6 rounded-lg border border-forest-100">
          <h2 className="text-xl font-semibold mb-4">Featured Tutorials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredVideos.map((video) => (
              <div key={video.id} className="relative group">
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full object-cover h-60 transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-lg font-bold">{video.title}</h3>
                      <p className="text-sm text-gray-200 mt-1">{video.description}</p>
                      <div className="flex items-center mt-2">
                        <span className="flex items-center text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {video.duration}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center text-xs">
                          <Eye className="h-3 w-3 mr-1" />
                          {video.views.toLocaleString()}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center text-xs">
                          <ThumbsUp className="h-3 w-3 mr-1" />
                          {video.likes.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="rounded-full w-16 h-16 bg-forest-600/90 hover:bg-forest-600 text-white">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for tutorials"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <select
              className="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.slice(1).map((category, index) => (
                <option key={index} value={category}>
                  {category}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Experience Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={videoFilters.showBeginner}
                      onChange={() => toggleFilter("showBeginner")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Beginner</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={videoFilters.showIntermediate}
                      onChange={() => toggleFilter("showIntermediate")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Intermediate</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={videoFilters.showAdvanced}
                      onChange={() => toggleFilter("showAdvanced")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Advanced</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Duration</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={videoFilters.durationUnder10}
                      onChange={() => toggleFilter("durationUnder10")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Under 10 minutes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-forest-600 rounded border-gray-300 focus:ring-forest-500"
                      checked={videoFilters.durationUnder30}
                      onChange={() => toggleFilter("durationUnder30")}
                    />
                    <span className="ml-2 text-sm text-gray-600">Under 30 minutes</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setVideoFilters({
                    showBeginner: false,
                    showIntermediate: false,
                    showAdvanced: false,
                    durationUnder10: false,
                    durationUnder30: false
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
          {filteredVideos.length} videos found
        </div>
      </div>
      
      {/* Videos Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden group">
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full object-cover h-48"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button className="rounded-full w-12 h-12 bg-forest-600/90 hover:bg-forest-600 text-white">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {video.duration}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-forest-600">
                    {video.title}
                  </h3>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-forest-100 text-forest-800 rounded-full mb-2">
                    {video.category}
                  </span>
                </div>
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                  {video.level}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {video.description}
              </p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {video.views.toLocaleString()} views
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <ThumbsUp className="h-3 w-3 mr-1" />
                  {video.likes.toLocaleString()} likes
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {/* Related Resources */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-md bg-forest-100 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-forest-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium">Complete Guide to Cattle Health Management</h4>
              <p className="text-sm text-gray-500 mb-1">Comprehensive ebook with practical health management techniques</p>
              <Button variant="link" className="p-0 h-auto text-forest-600 flex items-center">
                Download PDF
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-md bg-forest-100 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-forest-600" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium">Nutrition Charts for Dairy Cattle</h4>
              <p className="text-sm text-gray-500 mb-1">Printable reference charts for optimal feeding of dairy cattle</p>
              <Button variant="link" className="p-0 h-auto text-forest-600 flex items-center">
                Download PDF
                <ArrowUpRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default VideoTutorials;
