
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const articles = [
    {
      title: "Understanding Rumen Health in Cattle",
      excerpt: "The rumen is the largest compartment of a cow's stomach and plays a crucial role in digestion. This article explains how to maintain optimal rumen health through proper feeding practices.",
      author: "Dr. Sarah Johnson",
      date: "May 15, 2023",
      readTime: "8 min read"
    },
    {
      title: "Managing Heat Stress in Dairy Cattle",
      excerpt: "Heat stress can significantly impact milk production and reproductive performance. Learn effective strategies to keep your dairy cattle cool during hot weather conditions.",
      author: "Dr. Michael Rodriguez",
      date: "June 3, 2023",
      readTime: "10 min read"
    },
    {
      title: "Preventing Calf Scours: A Comprehensive Guide",
      excerpt: "Calf scours (diarrhea) is one of the leading causes of calf mortality. This guide covers prevention strategies, early detection, and treatment options.",
      author: "Dr. Emily Chang",
      date: "April 22, 2023",
      readTime: "12 min read"
    },
    {
      title: "Improving Reproductive Efficiency in Your Herd",
      excerpt: "Reproductive efficiency is crucial for profitability in cattle operations. Discover practical tips to enhance breeding success and maintain a productive herd.",
      author: "Dr. Robert Williams",
      date: "July 8, 2023",
      readTime: "9 min read"
    },
    {
      title: "Essential Nutrients for Healthy Cattle",
      excerpt: "A balanced diet is fundamental to cattle health. This article breaks down the essential nutrients every cow needs and how to ensure they get them.",
      author: "Dr. Lisa Thompson",
      date: "March 14, 2023",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Educational Articles</h1>
      <p className="text-lg mb-6 text-gray-700">
        Informative articles written by veterinary experts to help you better understand cattle health and management.
      </p>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <Card key={index} className="border-green-100 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-green-800">{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="mr-4">By {article.author}</span>
                <span className="mr-4">{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-50">
                Read Full Article
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Articles;
