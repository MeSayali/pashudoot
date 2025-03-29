
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, HelpCircle, ShieldCheck } from "lucide-react";

const Insurance = () => {
  const insuranceSchemes = [
    {
      id: 1,
      name: "Livestock Insurance Scheme",
      provider: "Government of India",
      coverage: "Death due to diseases, accidents, natural calamities",
      premium: "3-4% of the animal's market value",
      subsidy: "50% subsidy on premium for certain categories of farmers",
      eligibility: "All farmers owning indigenous/crossbred cattle and buffaloes",
      description: "A central government scheme to protect farmers against losses due to untimely death of animals."
    },
    {
      id: 2,
      name: "Comprehensive Cattle Care",
      provider: "Agricultural Insurance Company",
      coverage: "Death, permanent disability, emergency veterinary expenses",
      premium: "4-6% of sum insured",
      subsidy: "No direct subsidy",
      eligibility: "All cattle owners with animals aged 1-10 years",
      description: "A comprehensive plan covering various risks including certain treatment costs."
    },
    {
      id: 3,
      name: "Dairy Cattle Protection Plan",
      provider: "National Insurance",
      coverage: "Death due to disease, accident, surgery, calving risks",
      premium: "3.5-5% of sum insured",
      subsidy: "Available under certain state government programs",
      eligibility: "Dairy farmers with milch cattle in good health",
      description: "Specialized protection for dairy animals with additional coverage for production losses."
    }
  ];

  const faqs = [
    {
      question: "How do I choose the right insurance plan for my cattle?",
      answer: "Consider factors like the value of your animals, types of risks in your region, premium costs, and coverage options. Government schemes often offer subsidies but may have limited coverage. Private plans might be more comprehensive but could cost more."
    },
    {
      question: "What documents are needed to file a cattle insurance claim?",
      answer: "Typically, you'll need the insurance policy document, proof of ownership of the animal, ear tag/identification details, death certificate from a veterinarian, post-mortem report, and photographs of the deceased animal with identifiable markings."
    },
    {
      question: "How quickly are claims typically processed?",
      answer: "Claim processing time varies by provider. Government schemes may take 30-60 days, while private insurers might process claims within 15-30 days if all documentation is complete and in order."
    },
    {
      question: "Are pre-existing conditions covered under cattle insurance?",
      answer: "Most insurance policies do not cover pre-existing conditions. This highlights the importance of insuring animals when they are healthy and getting a proper health check-up before insurance enrollment."
    },
    {
      question: "Can I insure indigenous breeds under government schemes?",
      answer: "Yes, in fact, many government schemes provide special incentives for indigenous breeds, including higher subsidies on premiums to promote conservation of native cattle varieties."
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Cattle Insurance</h1>
      <p className="text-lg mb-8 text-gray-700">
        Protect your livestock investment with appropriate insurance coverage. Learn about available schemes, benefits, and how to make claims.
      </p>
      
      <Tabs defaultValue="schemes" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="schemes" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Insurance Schemes
          </TabsTrigger>
          <TabsTrigger value="benefits" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            Benefits & Process
          </TabsTrigger>
          <TabsTrigger value="faqs" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
            FAQs
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="schemes" className="mt-0">
          <div className="space-y-6">
            {insuranceSchemes.map((scheme) => (
              <Card key={scheme.id} className="border-green-100">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-xl text-green-800">{scheme.name}</CardTitle>
                      <CardDescription className="text-gray-600">Provider: {scheme.provider}</CardDescription>
                    </div>
                    <ShieldCheck className="h-10 w-10 text-green-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium text-green-700 mb-1">Coverage:</p>
                      <p className="text-gray-700 mb-3">{scheme.coverage}</p>
                      
                      <p className="font-medium text-green-700 mb-1">Premium:</p>
                      <p className="text-gray-700 mb-3">{scheme.premium}</p>
                    </div>
                    <div>
                      <p className="font-medium text-green-700 mb-1">Subsidy:</p>
                      <p className="text-gray-700 mb-3">{scheme.subsidy}</p>
                      
                      <p className="font-medium text-green-700 mb-1">Eligibility:</p>
                      <p className="text-gray-700">{scheme.eligibility}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{scheme.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-green-700 hover:bg-green-800">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="benefits" className="mt-0">
          <Card className="border-green-100">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">Benefits of Cattle Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4">Why Insure Your Cattle?</h3>
                  <ul className="space-y-3">
                    {[
                      "Financial protection against unexpected losses",
                      "Peace of mind for your livestock investment",
                      "Coverage for expensive treatments in some plans",
                      "Protection against natural disasters and epidemics",
                      "Subsidy benefits in government-backed schemes"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-4">Claim Process</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-green-100 text-green-800 font-bold h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                      <div>
                        <p className="font-medium text-gray-800">Report the Incident</p>
                        <p className="text-gray-600">Contact your insurance provider within 24-48 hours of the animal's death or illness.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-green-100 text-green-800 font-bold h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                      <div>
                        <p className="font-medium text-gray-800">Veterinary Examination</p>
                        <p className="text-gray-600">Get a certificate from a qualified veterinarian stating the cause of death.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-green-100 text-green-800 font-bold h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                      <div>
                        <p className="font-medium text-gray-800">Submit Documentation</p>
                        <p className="text-gray-600">Provide policy details, ownership proof, ID documents, and photographs.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-green-100 text-green-800 font-bold h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                      <div>
                        <p className="font-medium text-gray-800">Claim Processing</p>
                        <p className="text-gray-600">The insurer will verify documents and may send a representative for investigation.</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-green-100 text-green-800 font-bold h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                      <div>
                        <p className="font-medium text-gray-800">Settlement</p>
                        <p className="text-gray-600">Upon approval, the claim amount will be transferred to your bank account.</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faqs" className="mt-0">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-green-100">
                <CardHeader className="py-4">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-green-700 mt-1 flex-shrink-0" />
                    <CardTitle className="text-lg text-green-800">{faq.question}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 pl-8">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Insurance;
