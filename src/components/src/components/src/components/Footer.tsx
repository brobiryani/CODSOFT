import React from 'react';
import { ScanFace } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-facedetect-darkblue text-white p-6 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ScanFace size={24} className="text-facedetect-blue mr-2" />
            <span className="font-bold">FaceDetect AI</span>
          </div>
          
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-700 pt-6 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} FaceDetect AI. All rights reserved.</p>
          <p className="mt-2">This is a demonstration project only. Powered by Hugging Face Transformers.js.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
