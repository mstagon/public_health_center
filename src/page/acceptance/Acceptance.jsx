import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Acceptance() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const flutterAcceptanceUrl = process.env.REACT_APP_FLUTTER_ACCEPTANCE_URL;

  console.log('Flutter URL:', flutterAcceptanceUrl);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <p>Loading...</p>
        </div>
      )}

      <iframe
        src={flutterAcceptanceUrl}
        title="Flutter Acceptance"
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

export default Acceptance; 