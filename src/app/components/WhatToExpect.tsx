import React from "react";
import { FaChalkboardTeacher, FaRocket, FaComments, FaHandshake } from "react-icons/fa";
import Link from "next/link";

const WhatToExpect: React.FC = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white lg:text-4xl">
          What to Expect
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Expert-Led Presentations */}
          <div className="flex flex-col items-center text-center">
            <FaChalkboardTeacher className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Expert-Led Presentations on Modern Real Estate Strategies
            </h3>
            <p className="mt-2 text-white">
              Our experienced speakers will dive into the latest trends, strategies, and techniques that are shaping the real estate industry.
            </p>
          </div>

          {/* Cutting-Edge Techniques */}
          <div className="flex flex-col items-center text-center">
            <FaRocket className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Cutting-Edge Techniques to Boost Sales and Conversions
            </h3>

           { /* eslint-disable react/no-unescaped-entities  */}
<p className="mt-2 text-white">
  You'll uncover advanced strategies for closing deals more efficiently.
</p>
 {/*eslint-enable react/no-unescaped-entities */}

   
          </div>

          {/* Live Q&A */}
          <div className="flex flex-col items-center text-center">
            <FaComments className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Live Q&A with Industry Leaders
            </h3>
           { /* eslint-disable react/no-unescaped-entities  */}
            <p className="mt-2 text-white">
              At the end of the session, you'll have the opportunity to ask questions or get personalized tips to improve your real estate business.
            </p>
           { /* eslint-enable react/no-unescaped-entities */}
          </div>

          {/* Networking Opportunities */}
          <div className="flex flex-col items-center text-center">
            <FaHandshake className="text-primary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">
              Networking Opportunities
            </h3>
            <p className="mt-2 text-white">
              Connect with other real estate professionals from around the country. Share insights, exchange ideas, and expand your professional network.
            </p>
          </div>
        </div>

        {/* Centered Register Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="https://forms.gle/tgo6C4RB7SRqdib37"
            className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-center"
          >
            Reserve your spot Now!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
