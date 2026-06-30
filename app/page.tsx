import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black overflow-hidden">
      
      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 min-h-screen overflow-hidden">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          
          <img
            src="/Land-waitlist.jpeg"
            alt="Premier League Winner"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">
          
        <p className="uppercase tracking-[0.4em] text-white text-sm mb-4"> Goalix Is Coming </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Predict Football.
            <br />
            Win Smarter.
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            The next generation football prediction platform built
            for passionate fans and smart analysts.
          </p>

          <Countdown />

          <Link href="/waitlist">
          <button className="mt-10 bg-black hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-full transition text-lg"> Join The Waitlist </button>
          </Link>
        </div>
      </section>
    </main>
  );
}