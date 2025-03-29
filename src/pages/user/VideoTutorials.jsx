
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoTutorials = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Video Tutorials</h1>
      <p className="text-lg mb-8 text-gray-700">
        This page is intentionally left empty for future content.
      </p>
      
      <Card>
        <CardHeader>
          <CardTitle>Video Tutorials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-12 text-center">
            <p className="text-gray-500">Content will be added here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoTutorials;
