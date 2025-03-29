
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const HomeRemedies = () => {
  const remedies = [
    {
      condition: "Mild Diarrhea",
      ingredients: ["2 liters of clean water", "2 tablespoons of salt", "2 tablespoons of sugar or molasses", "½ cup of activated charcoal (optional)"],
      preparation: "Mix all ingredients thoroughly until dissolved. Administer 2-4 liters per day for adult cattle, divided into multiple doses.",
      notes: "This oral rehydration solution helps prevent dehydration. Seek veterinary care if diarrhea persists more than 24 hours or is severe."
    },
    {
      condition: "Minor Wounds and Cuts",
      ingredients: ["Clean water", "Mild antiseptic soap", "Turmeric powder", "Neem oil or Aloe vera gel"],
      preparation: "Clean the wound thoroughly with soap and water. Apply a paste of turmeric powder or apply neem oil/aloe vera to the cleaned wound.",
      notes: "These natural antimicrobials help prevent infection. Cover large wounds with clean cloth if possible. Deep or heavily bleeding wounds require veterinary attention."
    },
    {
      condition: "Bloat (Mild Cases)",
      ingredients: ["200-300ml vegetable oil or mineral oil", "2-3 liters of water", "Walking space"],
      preparation: "Administer oil as a drench (carefully, to avoid aspiration). Encourage the animal to walk around gently for 15-20 minutes.",
      notes: "The oil helps break down gas bubbles. Never use this for frothy bloat or severe cases - seek immediate veterinary care."
    },
    {
      condition: "Mastitis (Early Signs)",
      ingredients: ["Warm water", "Epsom salt (2 tablespoons per liter)", "Clean cloth"],
      preparation: "Dissolve Epsom salt in warm water. Apply warm compresses to the affected udder quarter for 15-20 minutes, 3-4 times daily. Milk out affected quarter frequently.",
      notes: "This increases blood circulation and helps reduce inflammation. Continue normal milking routine. Seek veterinary care if condition worsens."
    },
    {
      condition: "Constipation",
      ingredients: ["2-4 liters of warm water", "300-500ml of mineral oil or vegetable oil", "Fresh green fodder"],
      preparation: "Administer warm water with mineral oil as a drench. Provide plenty of fresh green fodder and ensure constant access to clean water.",
      notes: "This helps lubricate the digestive tract. Reduce grain intake temporarily. Veterinary attention needed if no improvement within 24 hours."
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Home Remedies for Common Conditions</h1>
      <Alert className="mb-6 bg-amber-50 border-amber-200">
        <AlertTriangle className="h-5 w-5 text-amber-600" />
        <AlertTitle className="text-amber-800">Important Disclaimer</AlertTitle>
        <AlertDescription className="text-amber-700">
          These remedies are for minor conditions only and should not replace professional veterinary care. 
          Always consult a veterinarian for serious health issues or if symptoms don't improve quickly.
        </AlertDescription>
      </Alert>
      
      <div className="space-y-6">
        {remedies.map((remedy, index) => (
          <Card key={index} className="border-green-100">
            <CardHeader className="bg-green-50 pb-3">
              <CardTitle className="text-xl text-green-800">{remedy.condition}</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="mb-3">
                <h3 className="font-semibold text-green-700 mb-2">Ingredients:</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {remedy.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-3">
                <h3 className="font-semibold text-green-700 mb-2">Preparation & Use:</h3>
                <p className="text-gray-700">{remedy.preparation}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-gray-600 italic">{remedy.notes}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeRemedies;
