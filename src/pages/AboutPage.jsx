
import { Award, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Amit Sharma",
      role: "Veterinary Advisor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop",
      bio: "Dr. Amit has over 15 years of experience in bovine healthcare and has been instrumental in developing our veterinary resources."
    },
    {
      name: "Priya Patel",
      role: "Farmer Liaison",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
      bio: "With a background in agricultural extension, Priya ensures our platform meets the real needs of farmers across different regions."
    },
    {
      name: "Rahul Verma",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      bio: "Rahul leads our technical team, ensuring the platform is accessible and user-friendly for farmers in rural areas."
    }
  ];

  const values = [
    {
      icon: <Users className="h-12 w-12 text-forest-500" />,
      title: "Farmer-Centric",
      description: "We place farmers at the heart of everything we do, ensuring our solutions address their real challenges."
    },
    {
      icon: <Award className="h-12 w-12 text-forest-500" />,
      title: "Excellence",
      description: "We are committed to providing the highest quality information and connecting farmers with qualified professionals."
    },
    {
      icon: <Shield className="h-12 w-12 text-forest-500" />,
      title: "Prevention",
      description: "We emphasize preventive care to reduce disease outbreaks and improve overall cattle health and productivity."
    },
    {
      icon: <Globe className="h-12 w-12 text-forest-500" />,
      title: "Accessibility",
      description: "We strive to make veterinary care accessible to all farmers, regardless of their location or resources."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-earth-900 font-serif">About BovBridge</h1>
            <p className="mt-4 text-xl text-earth-700 max-w-3xl mx-auto">
              Our mission is to improve bovine healthcare by connecting farmers with veterinary resources, knowledge, and professionals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold text-earth-900 font-serif">Our Story</h2>
              <p className="mt-4 text-lg text-earth-700">
                BovBridge was founded in 2023 by a team of veterinarians, agricultural experts, and technology professionals who recognized the challenges faced by cattle farmers in accessing timely veterinary care.
              </p>
              <p className="mt-4 text-lg text-earth-700">
                After witnessing preventable losses of cattle due to delayed treatment and lack of information, we decided to create a platform that bridges the gap between farmers and veterinary professionals.
              </p>
              <p className="mt-4 text-lg text-earth-700">
                Today, BovBridge serves thousands of farmers across the country, providing them with the resources they need to keep their livestock healthy and productive.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=600&h=400" 
                alt="Healthy cattle" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth-900 font-serif">Our Values</h2>
            <p className="mt-4 text-xl text-earth-600 max-w-3xl mx-auto">
              The principles that guide our work and shape our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-md border border-gray-100">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-earth-800 mb-3">{value.title}</h3>
                <p className="text-earth-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth-900 font-serif">Our Team</h2>
            <p className="mt-4 text-xl text-earth-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind BovBridge
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-earth-50 rounded-lg p-8 text-center shadow-md border border-earth-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-earth-800">{member.name}</h3>
                <p className="text-forest-600 mb-4">{member.role}</p>
                <p className="text-earth-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-serif mb-6">Join us in our mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of our growing community working to improve bovine healthcare and the livelihoods of farmers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-white text-forest-600 hover:bg-gray-100 px-8 py-3 rounded-md shadow-md"
              onClick={() => window.location.href = "/register"}
            >
              Sign Up Now
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-forest-700 px-8 py-3 rounded-md"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
