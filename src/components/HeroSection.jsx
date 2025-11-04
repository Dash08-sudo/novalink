import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-28 pb-16 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Unlock Your Career with <span className="text-indigo-600">Elite Mentorship</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          NovaLink connects ambitious students with verified industry leaders, unlocking doors
          to exclusive networking events and career-accelerating opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700">
            Join for Free
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50">
            Explore Features
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white shadow rounded-2xl">
          <h3 className="text-3xl font-bold text-indigo-600">100+</h3>
          <p className="text-gray-600 mt-2">Verified Mentors</p>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl">
          <h3 className="text-3xl font-bold text-indigo-600">50+</h3>
          <p className="text-gray-600 mt-2">Partner Companies</p>
        </div>
        <div className="p-6 bg-white shadow rounded-2xl">
          <h3 className="text-3xl font-bold text-indigo-600">1,000+</h3>
          <p className="text-gray-600 mt-2">Success Stories</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
