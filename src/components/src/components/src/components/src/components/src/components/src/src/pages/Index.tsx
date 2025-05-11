
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaceDetector from '@/components/FaceDetector';
import { ScanFace, Shield, ZoomIn, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-facedetect-darkblue to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Face Detection & Recognition</h1>
              <p className="text-xl md:text-2xl mb-8">
                Harness the power of AI to detect and analyze faces in your images.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
                <ScanFace size={64} className="text-facedetect-blue mx-auto mb-4" />
                <p className="text-lg">Ready to begin!</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-facedetect-blue/10 rounded-full p-4 inline-block mb-4">
                  <ZoomIn size={32} className="text-facedetect-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Precise Detection</h3>
                <p className="text-gray-600">
                  Accurately detect faces in images with advanced AI algorithms
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-facedetect-blue/10 rounded-full p-4 inline-block mb-4">
                  <Shield size={32} className="text-facedetect-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Privacy First</h3>
                <p className="text-gray-600">
                  All processing happens in your browser - no data sent to servers
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-facedetect-blue/10 rounded-full p-4 inline-block mb-4">
                  <Users size={32} className="text-facedetect-blue" />
                </div>
                <h3 className="font-bold text-lg mb-2">Multiple Faces</h3>
                <p className="text-gray-600">
                  Detect and analyze multiple faces in a single image
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main tool section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-2">Try It Now</h2>
              <p className="text-center text-gray-600 mb-8">
                Upload an image to detect faces
              </p>
              
              <FaceDetector />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
