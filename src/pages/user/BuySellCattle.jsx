
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search, X, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const sellFormSchema = z.object({
  breed: z.string().min(2, { message: "Breed is required" }),
  age: z.string().min(1, { message: "Age is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  price: z.string().min(1, { message: "Price is required" }),
  location: z.string().min(2, { message: "Location is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  contactName: z.string().min(3, { message: "Contact name is required" }),
  contactNumber: z.string().min(10, { message: "Valid contact number is required" })
});

const BuySellCattle = () => {
  const [cattleListings, setCattleListings] = useState([
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
  ]);
  
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const form = useForm({
    resolver: zodResolver(sellFormSchema),
    defaultValues: {
      breed: "",
      age: "",
      gender: "",
      price: "",
      location: "",
      description: "",
      contactName: "",
      contactNumber: ""
    },
  });

  const onSubmit = (data) => {
    const newListing = {
      id: cattleListings.length + 1,
      type: "sell",
      breed: data.breed,
      age: data.age,
      gender: data.gender,
      price: `₹${data.price}`,
      location: data.location,
      description: data.description,
      contact: `${data.contactName} - ${data.contactNumber}`,
      postedDate: "Just now"
    };

    setCattleListings([newListing, ...cattleListings]);
    setOpen(false);
    form.reset();
    toast({
      title: "Listing created",
      description: "Your cattle listing has been created successfully.",
    });
  };

  const buyListings = cattleListings.filter(listing => listing.type === "buy");
  const sellListings = cattleListings.filter(listing => listing.type === "sell");

  const filteredListings = cattleListings.filter(listing => {
    const matchesSearch = 
      listing.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const filteredBuyListings = buyListings.filter(listing => {
    const matchesSearch = 
      listing.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const filteredSellListings = sellListings.filter(listing => {
    const matchesSearch = 
      listing.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-700 hover:bg-green-800">
              <PlusCircle className="mr-2 h-4 w-4" />
              Post New Listing
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Sell Your Cattle</DialogTitle>
              <DialogDescription>
                Fill in the details about the cattle you want to sell. Be sure to provide accurate information.
              </DialogDescription>
            </DialogHeader>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="breed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Breed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select breed" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Holstein">Holstein</SelectItem>
                            <SelectItem value="Jersey">Jersey</SelectItem>
                            <SelectItem value="Gir">Gir</SelectItem>
                            <SelectItem value="Sahiwal">Sahiwal</SelectItem>
                            <SelectItem value="Murrah Buffalo">Murrah Buffalo</SelectItem>
                            <SelectItem value="Red Sindhi">Red Sindhi</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 3 years" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price (in ₹)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 75,000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Anand, Gujarat" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe your cattle, including health status, milk production, etc." 
                          className="min-h-[100px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex justify-end space-x-4 pt-4">
                  <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-green-700 hover:bg-green-800">
                    Submit Listing
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
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
            {filteredListings.length > 0 ? (
              filteredListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-gray-600">No listings match your search criteria.</p>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="sell" className="mt-0">
          <div className="space-y-6">
            {filteredSellListings.length > 0 ? (
              filteredSellListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-gray-600">No sale listings match your search criteria.</p>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="buy" className="mt-0">
          <div className="space-y-6">
            {filteredBuyListings.length > 0 ? (
              filteredBuyListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <Card className="p-8 text-center">
                <p className="text-gray-600">No buy listings match your search criteria.</p>
              </Card>
            )}
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
