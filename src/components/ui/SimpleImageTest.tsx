import React from 'react';

const SimpleImageTest = () => {
  const testImages = [
    '/black_logo.png',
    '/cheetah.jpg',
    '/leopard.jpg',
    '/bear.jpg',
    '/cat.jpg',
    '/hyena.jpg',
    '/more_info.jpg',
    '/overlay1.jpg',
    '/overlay2.jpg',
    '/FAMILY.jpg',
    '/COUPLE.jpg',
    '/PHOTOGRAPHERS.jpg',
    '/GALLERY/bear.jpg',
    '/GALLERY/cheetah.jpg',
    '/GALLERY/cat.jpg',
    '/GALLERY/COUPLE.jpg',
    '/GALLERY/FAMILY.jpg',
    '/GALLERY/feature_1.jpg',
    '/home_background_74.gif',
    '/awareness_sessions.jpg',
    '/Educating_local.jpg',
    '/Wildlife Rescue & Rehabilitation.jpg',
    '/jungle_cat.jpg',
    '/wolf_puppies.jpg',
    '/rock_python.jpg'
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Simple Image Test (Regular img tags)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testImages.map((imagePath, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-mono mb-2 text-gray-600">{imagePath}</h3>
            <img
              src={imagePath}
              alt={`Test image ${index + 1}`}
              className="w-full h-48 object-cover rounded"
              onLoad={() => console.log(`✅ Image loaded: ${imagePath}`)}
              onError={(e) => console.error(`❌ Image failed: ${imagePath}`, e)}
            />
            <div className="mt-2 text-xs text-gray-500">
              Path: {imagePath}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleImageTest;
