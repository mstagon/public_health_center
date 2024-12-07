import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Floor() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const flutterFloorUrl = process.env.REACT_APP_FLUTTER_FLOOR_URL;

  console.log('Flutter URL:', flutterFloorUrl);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <p>Loading...</p>
        </div>
      )}

      <iframe
        src={flutterFloorUrl}
        title="Flutter Floor"
        className="w-full h-full border-none"
        style={{ 
          width: '100%', 
          height: '100vh',
          border: 'none' 
        }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export default Floor; 