
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search } from "lucide-react";

const BuySellCattle = () => {
  const cattleListings = [
    {
      id: 1,
      type: "sell",
      breed: "Holstein",
      age: "3 years",
      gender: "Female",
      price: "₹75,000",
      location: "Anand, Gujarat",
      description: "Healthy dairy cow currently producing 18 liters of milk per day. Vaccinated and dewormed regularly.",
      contact: "Rajesh Patel - 98765 43210",
      postedDate: "3 days ago"
    },
    {
      id: 2,
      type: "sell",
      breed: "Gir",
      age: "5 years",
      gender: "Female",
      price: "₹85,000",
      location: "Mehsana, Gujarat",
      description: "Pure Gir cow with excellent milk production. A2 milk quality. Good temperament and easy to handle.",
      contact: "Amit Singh - 90123 45678",
      postedDate: "1 week ago"
    },
    {
      id: 3,
      type: "buy",
      breed: "Sahiwal",
      age: "2-4 years",
      gender: "Female",
      price: "Up to ₹90,000",
      location: "Karnal, Haryana",
      description: "Looking for a healthy Sahiwal cow in good condition. Must be vaccinated and have documentation of lineage.",
      contact: "Suresh Kumar - 87654 32109",
      postedDate: "2 days ago"
    },
    {
      id: 4,
      type: "sell",
      breed: "Murrah Buffalo",
      age: "4 years",
      gender: "Female",
      price: "₹1,20,000",
      location: "Rohtak, Haryana",
      description: "High-yielding Murrah buffalo producing 12 liters of milk daily. Recently calved (2 months ago).",
      contact: "Mahesh Yadav - 76543 21098",
      postedDate: "5 days ago"
    },
    {
      id: 5,
      type: "buy",
      breed: "Jersey Cross",
      age: "2-3 years",
      gender: "Female",
      price: "Up to ₹65,000",
      location: "Pune, Maharashtra",
      description: "Seeking Jersey cross cow for small family farm. Must be in good health and producing at least 10 liters daily.",
      contact: "Prakash Jadhav - 98123 45678",
      postedDate: "1 day ago"
    }
  ];

  const buyListings = cattleListings.filter(listing => listing.type === "buy");
  const sellListings = cattleListings.filter(listing => listing.type === "sell");

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Cattle Marketplace</h1>
      <p className="text-lg mb-8 text-gray-700">
        Connect with other farmers to buy and sell cattle. Always verify health certificates and conduct proper inspections before finalizing any transaction.
      </p>
      
      <div className="flex justify-between items-center mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by breed, location..." 
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 w-full md:w-80"
          />
        </div>
        
        <Button className="bg-green-700 hover:bg-green-800">
          <PlusCircle className="mr-2 h-4 w-4" />
          Post New Listing
        </Button>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="all" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            All Listings
          </TabsTrigger>
          <TabsTrigger value="sell" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            For Sale
          </TabsTrigger>
          <TabsTrigger value="buy" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Wanted to Buy
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="space-y-6">
            {cattleListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="sell" className="mt-0">
          <div className="space-y-6">
            {sellListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="buy" className="mt-0">
          <div className="space-y-6">
            {buyListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ListingCard = ({ listing }) => {
  return (
    <Card className={`border-l-4 ${
      listing.type === "sell" ? "border-l-green-500" : "border-l-blue-500"
    }`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded mr-2 ${
              listing.type === "sell" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
            }`}>
              {listing.type === "sell" ? "For Sale" : "Wanted"}
            </span>
            <CardTitle className="text-xl mt-1">{listing.breed} - {listing.age} - {listing.gender}</CardTitle>
          </div>
          <div className="text-right">
            <p className="font-semibold text-lg">{listing.price}</p>
            <p className="text-sm text-gray-500">{listing.location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{listing.description}</p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="font-medium">Contact: {listing.contact}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <span className="text-sm text-gray-500">Posted: {listing.postedDate}</span>
        <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BuySellCattle;
