import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Trusted by Top Students & Professionals
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          NovaLink connects ambitious students with verified industry leaders,
          unlocking doors to exclusive networking events and career-accelerating
          opportunities.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold">
            Join for Free
          </button>
          <button className="border border-gray-400 px-6 py-3 rounded-xl text-white font-semibold">
            Explore Features
          </button>
        </div>
      </header>

      <section className="py-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-400">100+</h2>
            <p className="text-gray-300 mt-2">Verified Mentors</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-400">50+</h2>
            <p className="text-gray-300 mt-2">Partner Companies</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-400">1,000+</h2>
            <p className="text-gray-300 mt-2">Success Stories</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

<h1 className="text-4xl font-bold text-blue-500">Tailwind Works!</h1>

