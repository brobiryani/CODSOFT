import React from 'react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from '@/lib/utils';

export interface FaceDetection {
  id: number;
  box: {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
  };
  score: number;
}

interface FaceResultsProps {
  faces: FaceDetection[];
  imageRef: React.RefObject<HTMLImageElement>;
}

const FaceResults: React.FC<FaceResultsProps> = ({ faces, imageRef }) => {
  if (!faces || faces.length === 0) {
    return null;
  }

  const renderFaceBoxes = () => {
    if (!imageRef.current) return null;
    
    const imgRect = imageRef.current.getBoundingClientRect();
    const imgNaturalWidth = imageRef.current.naturalWidth;
    const imgNaturalHeight = imageRef.current.naturalHeight;
    
    const scaleX = imgRect.width / imgNaturalWidth;
    const scaleY = imgRect.height / imgNaturalHeight;
    
    return faces.map(face => {
      const { xmin, ymin, xmax, ymax } = face.box;
      
      const boxStyle = {
        left: xmin * scaleX + imgRect.left,
        top: ymin * scaleY + imgRect.top,
        width: (xmax - xmin) * scaleX,
        height: (ymax - ymin) * scaleY
      };
      
      return (
        <div
          key={face.id}
          className="face-box"
          style={boxStyle}
          data-face-id={face.id + 1}
        />
      );
    });
  };

  return (
    <>
      <Card className="w-full">
        <div className="p-6">
          <h3 className="text-lg font-medium mb-2">Detection Results</h3>
          <p className="text-sm text-muted-foreground mb-4">
            {faces.length} {faces.length === 1 ? 'face' : 'faces'} detected
          </p>
          
          <div className="space-y-4">
            {faces.map((face, index) => (
              <div key={face.id} className="space-y-2">
                <div className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-white font-medium",
                    "bg-facedetect-blue"
                  )}>
                    {index + 1}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">Face {index + 1}</p>
                    <p className="text-sm text-muted-foreground">
                      Confidence: {(face.score * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
                
                {index < faces.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {renderFaceBoxes()}
    </>
  );
};

export default FaceResults;
