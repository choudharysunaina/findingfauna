import React from 'react';

const SingleImageTest = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Single Image Test</h1>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Testing: /cheetah.jpg</h2>
        
        {/* Test 1: Regular img tag */}
        <div className="mb-6">
          <h3 className="text-sm font-mono mb-2 text-gray-600">Regular img tag:</h3>
          <img
            src="/cheetah.jpg"
            alt="Cheetah Test"
            className="w-full h-48 object-cover rounded"
            onLoad={() => console.log('✅ Regular img loaded successfully')}
            onError={(e) => console.error('❌ Regular img failed:', e)}
          />
        </div>
        
        {/* Test 2: ResponsiveImage component */}
        <div className="mb-6">
          <h3 className="text-sm font-mono mb-2 text-gray-600">ResponsiveImage component:</h3>
          <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center">
            <span className="text-gray-500">ResponsiveImage will go here</span>
          </div>
        </div>
        
        {/* Test 3: Direct file access */}
        <div className="mb-6">
          <h3 className="text-sm font-mono mb-2 text-gray-600">File path verification:</h3>
          <p className="text-sm text-gray-600">Path: /cheetah.jpg</p>
          <p className="text-sm text-gray-600">Should exist in: public/cheetah.jpg</p>
        </div>
        
        {/* Test 4: Network test */}
        <div>
          <h3 className="text-sm font-mono mb-2 text-gray-600">Network test:</h3>
          <button 
            onClick={() => {
              fetch('/cheetah.jpg')
                .then(response => {
                  if (response.ok) {
                    console.log('✅ Image accessible via fetch:', response.status);
                  } else {
                    console.error('❌ Image fetch failed:', response.status);
                  }
                })
                .catch(error => console.error('❌ Fetch error:', error));
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Test Image Fetch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleImageTest;
