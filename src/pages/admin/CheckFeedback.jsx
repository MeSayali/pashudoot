
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CheckCircle, Flag, MessageSquare, Star, ThumbsUp, User } from "lucide-react";

const CheckFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      type: "doctor",
      from: "Ramesh Patel",
      about: "Dr. Sunil Verma",
      rating: 5,
      message: "Dr. Verma was very helpful and came to our village on short notice. He diagnosed our cow's mastitis quickly and suggested affordable treatment options.",
      date: "15 Aug 2023",
      status: "new",
      response: ""
    },
    {
      id: 2,
      type: "service",
      from: "Anita Singh",
      about: "Video Consultation Feature",
      rating: 4,
      message: "The video consultation feature is very useful, but sometimes the connection is not stable. Please improve this as it's difficult for farmers with low internet connectivity.",
      date: "10 Aug 2023",
      status: "resolved",
      response: "Thank you for your feedback. We're working on optimizing our video calling to work better on slower connections."
    },
    {
      id: 3,
      type: "doctor",
      from: "Suresh Kumar",
      about: "Dr. Priya Sharma",
      rating: 2,
      message: "Dr. Sharma didn't respond for two days after I requested urgent help for my buffalo. By the time she replied, I had to find another doctor.",
      date: "5 Aug 2023",
      status: "flagged",
      response: ""
    },
    {
      id: 4,
      type: "service",
      from: "Mohan Yadav",
      about: "Home Remedies Section",
      rating: 5,
      message: "The home remedies section is excellent! I used the suggested treatment for my cow's mild bloating and it worked wonderfully. Please add more remedies.",
      date: "1 Aug 2023",
      status: "new",
      response: ""
    },
    {
      id: 5,
      type: "doctor",
      from: "Kavita Sharma",
      about: "Dr. Rajesh Kumar",
      rating: 4,
      message: "Dr. Kumar provided great advice for my cattle's hoof problem. The only issue was that the prescribed medicine was slightly expensive.",
      date: "28 Jul 2023",
      status: "resolved",
      response: "We've noted your concern about medicine costs. Dr. Kumar will be informed to consider cost-effective alternatives when possible."
    }
  ];

  const newFeedbacks = feedbacks.filter(f => f.status === "new");
  const resolvedFeedbacks = feedbacks.filter(f => f.status === "resolved");
  const flaggedFeedbacks = feedbacks.filter(f => f.status === "flagged");

  const doctorFeedbacks = feedbacks.filter(f => f.type === "doctor");
  const serviceFeedbacks = feedbacks.filter(f => f.type === "service");

  return (
    <div className="container mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-green-800">User Feedback</h1>
        <p className="text-gray-600 mt-1">Review and respond to feedback from farmers and platform users</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList className="grid w-1/2 grid-cols-4">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">All</TabsTrigger>
            <TabsTrigger value="new" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
              New 
              <Badge className="ml-2 bg-green-600">{newFeedbacks.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="resolved" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">Resolved</TabsTrigger>
            <TabsTrigger value="flagged" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
              Flagged
              <Badge className="ml-2 bg-red-600">{flaggedFeedbacks.length}</Badge>
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="all">All Types</option>
              <option value="doctor">Doctor Feedback</option>
              <option value="service">Service Feedback</option>
            </select>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <FeedbackList feedbacks={feedbacks} />
        </TabsContent>
        
        <TabsContent value="new" className="mt-0">
          <FeedbackList feedbacks={newFeedbacks} />
        </TabsContent>
        
        <TabsContent value="resolved" className="mt-0">
          <FeedbackList feedbacks={resolvedFeedbacks} />
        </TabsContent>
        
        <TabsContent value="flagged" className="mt-0">
          <FeedbackList feedbacks={flaggedFeedbacks} />
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-xl text-green-800">Feedback Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Doctor Ratings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-green-800">4.2</div>
                  <div className="ml-2 flex items-center">
                    {[1, 2, 3, 4].map(i => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 fill-opacity-50" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Average from {doctorFeedbacks.length} reviews</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Service Satisfaction</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-green-800">92%</div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Based on {serviceFeedbacks.length} service reviews</p>
              </CardContent>
            </Card>
            
            <Card className="border-green-100">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Response Rate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-green-800">85%</div>
                </div>
                <p className="text-sm text-gray-500 mt-1">Feedback responded to within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const FeedbackList = ({ feedbacks }) => {
  return feedbacks.length > 0 ? (
    <div className="space-y-4">
      {feedbacks.map((feedback) => (
        <Card key={feedback.id} className="border-l-4 border-l-green-500">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge className={`${feedback.type === "doctor" ? "bg-blue-500" : "bg-purple-500"}`}>
                    {feedback.type === "doctor" ? "Doctor Feedback" : "Service Feedback"}
                  </Badge>
                  <Badge className={`${
                    feedback.status === "new" ? "bg-green-500" : 
                    feedback.status === "resolved" ? "bg-gray-500" : 
                    "bg-red-500"
                  }`}>
                    {feedback.status === "new" ? "New" : 
                     feedback.status === "resolved" ? "Resolved" : 
                     "Flagged"}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold">
                  {feedback.type === "doctor" ? (
                    <span>Feedback for {feedback.about}</span>
                  ) : (
                    <span>Feedback about {feedback.about}</span>
                  )}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${
                        i < feedback.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`} 
                    />
                  ))}
                  <span className="text-gray-500 text-sm ml-1">{feedback.rating}/5</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">From: {feedback.from}</div>
                <div className="text-xs text-gray-400">Submitted: {feedback.date}</div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-md mb-4">
              <p className="text-gray-700">{feedback.message}</p>
            </div>
            
            {feedback.response && (
              <div className="p-3 bg-green-50 rounded-md mb-4 border-l-2 border-green-500">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Admin Response:</span>
                </div>
                <p className="text-gray-700">{feedback.response}</p>
              </div>
            )}
            
            <div className="flex justify-end gap-2 mt-2">
              {feedback.status === "new" && (
                <>
                  <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                    <Flag className="h-4 w-4 mr-1" />
                    Flag Issue
                  </Button>
                  <Button className="bg-green-700 hover:bg-green-800">
                    Respond
                  </Button>
                </>
              )}
              {feedback.status === "flagged" && (
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Mark Resolved
                </Button>
              )}
              {feedback.status === "resolved" && (
                <Button variant="outline" disabled>
                  Already Resolved
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ) : (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <div className="text-gray-500">No feedbacks found in this category</div>
    </div>
  );
};

export default CheckFeedback;
