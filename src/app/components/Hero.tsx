import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-primary lg:text-5xl">
          Join our Exclusive Free Webinar: Mastering Modern Real Estate
        </h1>
        <p className="mt-4 text-lg text-white lg:text-xl">
          Skills, Strategies, and Technology for Realtors
        </p>
        <p className="mt-6 text-white text-md lg:text-lg max-w-2xl mx-auto">
          This is your chance to future-proof your real estate career. With
          expert advice, actionable strategies, and a focus on the latest
          technology, this webinar will give you the tools and knowledge to stay
          ahead in an ever-changing market.
        </p>

   <Link
          href="https://forms.gle/tgo6C4RB7SRqdib37"
          className="inline-block mt-8 bg-primary text-white font-semibold py-3 px-6 rounded-lg  transition duration-300 ease-in-out"
        >
          Reserve your spot Now!
        </Link>

        <p className="mt-10 text-md text-white lg:text-lg">
          Speaker: <span className="font-medium text-lg text-white font-bold">Funto Adewinbi</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
