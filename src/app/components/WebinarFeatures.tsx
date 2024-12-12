import React from "react";
import { FaLightbulb, FaUserTie, FaUsers, FaQuestionCircle } from "react-icons/fa";

const WebinarFeatures: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 lg:text-4xl">
          Why You Should Attend
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Actionable Insights */}
          <div className="flex flex-col items-center text-center">
            <FaLightbulb className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Actionable Insights</h3>
            <p className="mt-2 text-gray-600">
              Walk away with real-world strategies you can implement right away.
            </p>
          </div>

          {/* Expert Speakers */}
          <div className="flex flex-col items-center text-center">
            <FaUserTie className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Expert Speakers</h3>
            <p className="mt-2 text-gray-600">
              Learn from industry leaders who have successfully navigated the market and are eager to share their insights.
            </p>
          </div>

          {/* Networking Opportunities */}
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Networking Opportunities</h3>
            <p className="mt-2 text-gray-600">
              Connect with fellow agents and professionals to exchange ideas and grow your network.
            </p>
          </div>

          {/* Live Q&A */}
          <div className="flex flex-col items-center text-center">
            <FaQuestionCircle className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Live Q&A</h3>
            <p className="mt-2 text-gray-600">
              Have your most pressing questions answered by experts during the interactive Q&A session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarFeatures;
