

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import emailjs from "@emailjs/browser";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

      setTimeout(() => {
        setSuccess(false);
      }, 4000);

      setEmail("");
    } catch (error) {
      console.log("EMAIL ERROR:", error);

      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        
        <img
          src="/waitlist.jpeg"
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
        
        <div className="w-full max-w-md bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl">
          
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

          <p className="text-center text-sm text-gray-300 mt-6">
          </p>
        </div>
      </section>

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