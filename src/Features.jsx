import React from "react";

export default function Features() {
  const features = [
    "Personalized job and internship matches",
    "Resume uploads and interview prep tools",
    "Notifications for new local opportunities",
    "Partner network with local businesses",
  ];

  return (
    <div className="pt-24 px-6 text-center max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">
        Platform Features
      </h2>
      <ul className="grid md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <li
            key={i}
            className="bg-white shadow p-6 rounded-2xl border border-gray-100"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
