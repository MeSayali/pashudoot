
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PopularQuestions = () => {
  const questions = [
    {
      question: "How can I tell if my cow has mastitis?",
      answer: "Look for signs like swelling, redness, hardness or heat in the udder, abnormal milk (watery, clotted, or bloody), reduced milk production, and the cow showing discomfort during milking. Early detection is crucial for treatment."
    },
    {
      question: "What's the best way to prevent hoof problems in cattle?",
      answer: "Regular hoof trimming (1-2 times per year), providing dry walking areas, maintaining clean environments, proper nutrition (including adequate minerals), and treating any issues promptly are key preventive measures."
    },
    {
      question: "How often should I deworm my cattle?",
      answer: "For adult cattle, deworming 2-4 times per year is generally recommended, depending on your local climate and parasite pressure. Consult with your local veterinarian for a program specific to your area and herd."
    },
    {
      question: "What vaccinations are essential for cattle?",
      answer: "Core vaccinations often include those for Blackleg, BVD (Bovine Viral Diarrhea), IBR (Infectious Bovine Rhinotracheitis), PI3 (Parainfluenza), BRSV (Bovine Respiratory Syncytial Virus), and Leptospirosis. Your local veterinarian can advise on a protocol for your region."
    },
    {
      question: "How can I improve fertility in my dairy cows?",
      answer: "Ensure proper nutrition with balanced energy and protein, maintain adequate body condition score, implement heat detection methods, provide good transition cow management, control diseases that affect reproduction, and keep detailed breeding records."
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Most Popular Questions</h1>
      <p className="text-lg mb-6 text-gray-700">
        Find answers to the most common questions asked by farmers about cattle health and management.
      </p>
      
      <div className="space-y-6">
        {questions.map((item, index) => (
          <Card key={index} className="border-green-100">
            <CardHeader className="bg-green-50 rounded-t-lg">
              <CardTitle className="text-green-800 text-xl">{item.question}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <CardDescription className="text-gray-700 text-base">{item.answer}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PopularQuestions;
