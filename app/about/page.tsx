
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        
        <img
          src="/Delp.jpeg"
          alt="Football Stadium"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6">
        
        <div className="max-w-4xl text-center">
          
          <p className="uppercase tracking-[0.4em] text-sm mb-4 text-gray-300">
            About Goalix
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Football Prediction,
            <br />
            Reimagined.
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            Goalix is building a smarter football prediction experience
            for fans who want more than luck.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            From match insights to prediction analytics,
            Goalix combines football passion with intelligent data-driven experiences.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            Launching July 30th, 2026.
          </p>

          {/* Waitlist Button */}
          <Link href="/waitlist">
            <button className="mt-10 bg-black hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-full transition text-lg">
              Join The Waitlist
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}