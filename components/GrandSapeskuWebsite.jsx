import React from 'react';

export default function GrandSapeskuWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow relative">
        <div className="absolute inset-0">
          <img src="/images/rezidencni-komplex.jpg" alt="Rezidenční domy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Profesionální úklid garáží<br/>Praha a okolí
          </h1>
          <p className="text-xl text-gray-200">GrandSapesku s.r.o.</p>
          <a href="tel:777911611" className="mt-6 bg-red-600 text-white px-10 py-4 rounded-full w-fit">
            Zavolat 777 911 611
          </a>
        </div>
      </header>
    </div>
  );
}
