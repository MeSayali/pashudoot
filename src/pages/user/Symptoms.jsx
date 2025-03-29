
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Symptoms = () => {
  const symptomsBySystem = {
    digestive: [
      {
        name: "Diarrhea",
        description: "Loose, watery stools that may contain blood or mucus. Can be caused by infections, parasites, or dietary issues.",
        urgency: "Medium to High"
      },
      {
        name: "Bloating",
        description: "Swelling of the left flank due to gas accumulation in the rumen. Can be life-threatening if severe.",
        urgency: "High"
      },
      {
        name: "Reduced Appetite",
        description: "Animal shows little or no interest in feed. Often an early sign of illness.",
        urgency: "Medium"
      },
      {
        name: "Excessive Salivation",
        description: "Drooling more than usual, which can indicate oral lesions or certain diseases.",
        urgency: "Medium"
      }
    ],
    respiratory: [
      {
        name: "Coughing",
        description: "Persistent coughing, especially when at rest. May indicate respiratory infection or pneumonia.",
        urgency: "Medium"
      },
      {
        name: "Labored Breathing",
        description: "Difficulty breathing, increased respiratory rate, or noticeable effort to breathe.",
        urgency: "High"
      },
      {
        name: "Nasal Discharge",
        description: "Clear, cloudy, or discolored discharge from the nostrils. Can indicate various respiratory conditions.",
        urgency: "Medium"
      }
    ],
    reproductive: [
      {
        name: "Vaginal Discharge",
        description: "Abnormal discharge that may be foul-smelling or contain pus. Can indicate reproductive tract infection.",
        urgency: "Medium to High"
      },
      {
        name: "Retained Placenta",
        description: "Failure to expel the placenta within 24 hours of calving.",
        urgency: "Medium"
      },
      {
        name: "Swollen Testicles",
        description: "Enlargement or asymmetry of the testicles in bulls. May indicate injury or infection.",
        urgency: "Medium"
      }
    ],
    general: [
      {
        name: "Fever",
        description: "Body temperature above 103°F (39.4°C) in adult cattle. Often indicates infection or inflammation.",
        urgency: "Medium to High"
      },
      {
        name: "Lethargy",
        description: "Unusual tiredness, lack of movement, or depression. A non-specific sign of many illnesses.",
        urgency: "Medium"
      },
      {
        name: "Weight Loss",
        description: "Gradual or sudden loss of body condition despite normal feeding.",
        urgency: "Medium"
      },
      {
        name: "Abnormal Posture",
        description: "Unusual standing position, arched back, or reluctance to stand. May indicate pain or neurological issues.",
        urgency: "Medium to High"
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Common Symptoms & Warning Signs</h1>
      <p className="text-lg mb-6 text-gray-700">
        Learn to recognize symptoms of common cattle diseases. Early detection is key to successful treatment.
      </p>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="general" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">General</TabsTrigger>
          <TabsTrigger value="digestive" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">Digestive</TabsTrigger>
          <TabsTrigger value="respiratory" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">Respiratory</TabsTrigger>
          <TabsTrigger value="reproductive" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">Reproductive</TabsTrigger>
        </TabsList>
        
        {Object.keys(symptomsBySystem).map((system) => (
          <TabsContent key={system} value={system} className="mt-0">
            <div className="grid md:grid-cols-2 gap-6">
              {symptomsBySystem[system].map((symptom, index) => (
                <Card key={index} className="border-green-100">
                  <CardHeader className="bg-green-50 pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg text-green-800">{symptom.name}</CardTitle>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        symptom.urgency.includes("High") ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {symptom.urgency} Urgency
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-700">{symptom.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Symptoms;
