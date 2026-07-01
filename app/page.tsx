"use client";

import { useState } from "react";
import Countdown from "@/components/Countdown";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        "service_bwrfnys",
        "template_d8e367t",
        {
          user_email: email,
        },
        "F6LHIJPJ0YyzFTAvE"
      );

      setSuccess(true);

      // Close modal after successful submit
      setShowWaitlist(false);

      setEmail("");

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

    } catch (error) {
      console.log(error);

      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        
        <img
          src="/Land-waitlist.jpeg"
          alt="Premier League Winner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Landing Page Content */}
      <section
        className={`relative z-10 flex flex-col items-center justify-center text-center px-6 min-h-screen transition-all duration-300 ${
          showWaitlist ? "blur-md scale-[0.98]" : ""
        }`}
      >
        
        <p className="uppercase tracking-[0.4em] text-white text-sm mb-4">
          Goalix Is Coming
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Predict Football.
          <br />
          Win Smarter.
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-2xl">
          The next generation football prediction platform built
          for passionate fans and smart analysts.
        </p>

        <Countdown />

        <button
          onClick={() => setShowWaitlist(true)}
          className="mt-10 bg-black hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-full transition text-lg"
        >
          Join The Waitlist
        </button>

        
{/* About Cards */}
<div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
  
  {/* Privacy Card */}
  <div className="group bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 text-left transition-all duration-500 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
    
    <div className="flex items-center gap-4 mb-6">
      
      <img
        src="/Cybaa.jpeg"
        alt="Cybersecurity"
        className="w-14 h-14 object-contain transition-transform duration-500 group-hover:rotate-6"
      />

      <h2 className="text-3xl font-black">
        Privacy
      </h2>
    </div>

    <p className="text-gray-200 leading-relaxed">
      Your data and predictions are protected with secure systems
      designed to keep your information private and safe at all times.
    </p>
  </div>

  {/* Overview Card */}
  <div className="group bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 text-left transition-all duration-500 hover:scale-[1.03] hover:bg-white/15 hover:shadow-2xl">
    
    <div className="flex items-center gap-4 mb-6">
      
      <img
        src="/User.png"
        alt="Overview"
        className="w-14 h-14 object-contain transition-transform duration-500 group-hover:-rotate-6"
      />

      <h2 className="text-3xl font-black">
        Overview
      </h2>
    </div>

    <p className="text-gray-200 leading-relaxed">
      We predict the outcome of matches when the leagues starts.
      We predict, you stake, you win.
    </p>

    <p className="text-sm text-gray-400 mt-6">
      T&amp;C apply.
    </p>
  </div>
</div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
          
          {/* Modal Background */}
          <div
            onClick={() => setShowWaitlist(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Waitlist Card */}
          <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
            
            {/* Card Background Image */}
            <div className="absolute inset-0">
              
              <img
                src="/Waitlist.jpeg"
                alt="Football Stadium"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 backdrop-blur-md">
              
              {/* Close Button */}
              <button
                onClick={() => setShowWaitlist(false)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ×
              </button>

              <h1 className="text-4xl font-black mb-3 text-center">
                Join The Waitlist
              </h1>

              <p className="text-gray-200 mb-8 text-center">
                Be the first to know when Goalix launches.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 outline-none placeholder:text-gray-300 focus:border-green-400"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-neutral-800 text-white font-bold py-4 rounded-xl transition"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {success && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          <div className="bg-black/90 border border-white/10 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-2xl">
            
            <div className="flex items-start gap-4">
              
              <div className="w-3 h-3 rounded-full bg-green-400 mt-2" />

              <div>
                <h2 className="font-semibold text-lg">
                  Welcome to Goalix ⚽
                </h2>

                <p className="text-sm text-gray-300 mt-1">
                  You’ve successfully joined the waitlist.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
