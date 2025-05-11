import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelected: (file: File) => void;
  isLoading: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected, isLoading }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  
  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }
    
    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Pass file to parent component
    onImageSelected(file);
  };
  
  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleClear = () => {
    setPreview(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };
  
  return (
    <Card className="w-full">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-2">Upload Image</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Upload an image to detect faces
        </p>
        
        {!preview ? (
          <div
            className={cn(
              "border-2 border-dashed rounded-lg p-8 text-center hover:bg-secondary/50 transition-colors cursor-pointer",
              dragActive && "border-primary bg-secondary/50",
              isLoading && "opacity-50 cursor-not-allowed"
            )}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={isLoading ? undefined : handleButtonClick}
          >
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              disabled={isLoading}
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <Upload className="w-10 h-10 text-muted-foreground mb-2" />
              <p className="font-medium">Drag and drop or click to upload</p>
              <p className="text-sm text-muted-foreground">
                Support for JPG, PNG, WebP images
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img 
              src={preview} 
              alt="Preview" 
              className="w-full h-auto rounded-lg max-h-96 object-contain mx-auto"
            />
            {!isLoading && (
              <button
                onClick={handleClear}
                className="absolute top-2 right-2 bg-background/80 p-1 rounded-full hover:bg-background"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        )}
        
        {preview && (
          <div className="mt-4 flex justify-end">
            <Button 
              onClick={handleClear} 
              variant="outline" 
              className="mr-2"
              disabled={isLoading}
            >
              Clear
            </Button>
            <Button 
              onClick={handleButtonClick} 
              disabled={isLoading}
            >
              Upload Another
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageUpload;
