
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-rgpv-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 ai-gradient-text">
              About RGPV PYQ Quest
            </h1>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <p className="text-lg text-gray-700 mb-6">
                RGPV PYQ Quest is a platform designed to help students of Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) access previous year question papers easily and efficiently.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to make exam preparation simpler and more effective for students by providing a comprehensive, searchable database of past exam papers, coupled with an AI assistant that can help students find exactly what they need.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                We understand that practicing with previous year questions is one of the most effective ways to prepare for exams, which is why we've created this platform to give RGPV students the best resources for their academic success.
              </p>
              
              <div className="border-l-4 border-rgpv-red pl-4 italic text-gray-600 my-6">
                "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
              </div>
              
              <h2 className="text-2xl font-semibold mb-4 text-rgpv-dark">Our Features</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Comprehensive collection of RGPV previous year question papers</li>
                <li>Advanced search functionality to find papers by subject, semester, or topic</li>
                <li>AI-powered chatbot for answering queries and finding relevant papers</li>
                <li>Free PDF downloads of all question papers</li>
                <li>User-friendly interface designed for students</li>
                <li>Regular updates with the latest question papers</li>
              </ul>
            </div>
            
            {/* Creators section */}
            <h2 className="text-2xl font-semibold mb-4 text-rgpv-dark">Meet the Creators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-rgpv-red/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-rgpv-red">AG</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Anadi Gupta</h3>
                <p className="text-gray-600 mb-3">Full Stack Developer</p>
                <p className="text-gray-700 mb-4">
                  Computer Science Engineering student passionate about creating educational tools for students.
                </p>
                <Button variant="outline" className="rounded-full border-rgpv-red text-rgpv-red">
                  <Mail className="w-4 h-4 mr-2" /> Contact
                </Button>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-rgpv-dark/20 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-rgpv-dark">DM</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Devansh Mishra</h3>
                <p className="text-gray-600 mb-3">AI Specialist</p>
                <p className="text-gray-700 mb-4">
                  Engineering student with expertise in AI and machine learning, focused on educational applications.
                </p>
                <Button variant="outline" className="rounded-full border-rgpv-red text-rgpv-red">
                  <Mail className="w-4 h-4 mr-2" /> Contact
                </Button>
              </div>
            </div>
            
            {/* Contact section */}
            <h2 className="text-2xl font-semibold mb-4 text-rgpv-dark">Contact Us</h2>
            <div className="bg-white rounded-xl shadow-md p-6 mb-10">
              <p className="text-gray-700 mb-4">
                Have questions, feedback, or want to contribute question papers? We'd love to hear from you!
              </p>
              
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@rgpvpyqquest.com</p>
                <p><strong>Phone:</strong> +91 1234567890</p>
                <p><strong>Address:</strong> RGPV Campus, Bhopal, Madhya Pradesh, India</p>
              </div>
              
              <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full mt-6">
                <Mail className="w-4 h-4 mr-2" /> Send us a message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
