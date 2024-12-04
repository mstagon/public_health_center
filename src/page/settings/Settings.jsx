import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Settings() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const flutterWebUrl = process.env.REACT_APP_FLUTTER_SETTINGS_URL;

  useEffect(() => {
    const handlePopState = (event) => {
      // 브라우저 기본 뒤로가기 동작 막고 홈으로 이동
      event.preventDefault();
      window.history.pushState(null, '', '/');
      navigate('/', { replace: true });
    };

    // 뒤로가기 이벤트 리스너 추가
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  return (
    <div className="w-full h-screen relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <p>Loading...</p>
        </div>
      )}
      
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 z-10 p-2 bg-gray-100 rounded-full"
      >
      </button>

      <iframe
        src={flutterWebUrl}
        title="Flutter Settings"
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

export default Settings;