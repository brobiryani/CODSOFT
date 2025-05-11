import React from 'react';
import { ScanFace } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-facedetect-darkblue text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ScanFace size={28} className="text-facedetect-blue" />
          <h1 className="text-xl font-bold">FaceDetect AI</h1>
        </div>
        <div className="hidden md:block">
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-facedetect-blue transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-facedetect-blue transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-facedetect-blue transition-colors">Documentation</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
