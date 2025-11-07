import React from 'react';

const BasicTest = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Basic Image Test</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 1: Basic img tag</h2>
          <img 
            src="/cheetah.jpg" 
            alt="Cheetah" 
            className="w-64 h-48 object-cover rounded"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 2: Another image</h2>
          <img 
            src="/black_logo.png" 
            alt="Logo" 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 3: GIF image</h2>
          <img 
            src="/home_background_74.gif" 
            alt="Background" 
            className="w-64 h-48 object-cover rounded"
          />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-2">Test 4: Gallery image</h2>
          <img 
            src="/GALLERY/bear.jpg" 
            alt="Bear" 
            className="w-64 h-48 object-cover rounded"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <p>Current URL: {window.location.href}</p>
        <p>Image paths should be relative to public folder</p>
        <p>Check browser console for any errors</p>
      </div>
    </div>
  );
};

export default BasicTest;
