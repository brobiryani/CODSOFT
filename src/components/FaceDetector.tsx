import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, ScanFace } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { pipeline } from '@huggingface/transformers';
import ImageUpload from './ImageUpload';
import FaceResults, { FaceDetection } from './FaceResults';

const FaceDetector: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [faces, setFaces] = useState<FaceDetection[]>([]);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { toast } = useToast();

  const handleImageSelected = (file: File) => {
    setSelectedImage(file);
    setImageUrl(URL.createObjectURL(file));
    setFaces([]);
  };

  const detectFaces = async () => {
    if (!selectedImage) return;

    setIsProcessing(true);
    setFaces([]);

    try {
      toast({
        title: "Loading AI model...",
        description: "This may take a moment on first run"
      });

      console.log("Starting model loading...");
      
      // Initialize the object detection pipeline with a more suitable face detection model
      // Remove the quantized property since it's not supported in the current type definition
      const detector = await pipeline(
        'object-detection', 
        'Xenova/yolos-tiny'  // Using a smaller, more efficient model
      );
      
      console.log("Model loaded, processing image...");

      toast({
        title: "Processing image...",
        description: "Analyzing for faces"
      });

      // Process the image
      const result = await detector(imageUrl, {
        threshold: 0.3, // Lower threshold to catch more potential faces
      });

      console.log("Detection results:", result);
      
      // Filter for person detections
      const detectedFaces: FaceDetection[] = result
        .filter((detection: any) => detection.label === 'person')
        .map((detection: any, index: number) => ({
          id: index,
          box: {
            xmin: detection.box.xmin,
            ymin: detection.box.ymin,
            xmax: detection.box.xmax,
            ymax: detection.box.ymax
          },
          score: detection.score
        }));

      console.log("Filtered faces:", detectedFaces);

      setFaces(detectedFaces);
      
      if (detectedFaces.length === 0) {
        console.log("No faces detected");
        toast({
          title: "No faces detected",
          description: "Try uploading a different image with clearer faces",
          variant: "destructive"
        });
      } else {
        console.log(`${detectedFaces.length} faces detected`);
        toast({
          title: `${detectedFaces.length} ${detectedFaces.length === 1 ? 'face' : 'faces'} detected`,
          description: "View the results below"
        });
      }
    } catch (error) {
      console.error("Error detecting faces:", error);
      toast({
        title: "Error detecting faces",
        description: "Please try again with a different image",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="w-full overflow-hidden">
            <CardContent className="p-0 relative">
              {imageUrl ? (
                <div className="relative">
                  <img
                    ref={imageRef}
                    src={imageUrl}
                    alt="Selected"
                    className="w-full h-auto max-h-[600px] object-contain p-4"
                    crossOrigin="anonymous" // Add this to handle CORS issues with images
                  />
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-lg flex items-center shadow-lg">
                        <Loader2 className="h-5 w-5 mr-2 animate-spin text-primary" />
                        <p>Processing image...</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-12 text-center bg-muted/40">
                  <ScanFace className="h-16 w-16 mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-medium">No Image Selected</h3>
                  <p className="text-muted-foreground mt-2">
                    Upload an image to detect faces
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
          
          {imageUrl && (
            <div className="mt-4 flex justify-end">
              <Button
                onClick={detectFaces}
                disabled={isProcessing || !imageUrl}
                className="bg-facedetect-blue hover:bg-blue-600"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing
                  </>
                ) : (
                  "Detect Faces"
                )}
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <ImageUpload
            onImageSelected={handleImageSelected}
            isLoading={isProcessing}
          />
          
          {faces.length > 0 && (
            <FaceResults faces={faces} imageRef={imageRef} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FaceDetector;
