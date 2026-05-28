"use client";

import { useState } from "react";

export default function Home() {

  const [products, setProducts] = useState("");
  const [budget, setBudget] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  return (

    <main className="min-h-screen bg-gradient-to-br from-[#f7faf8] via-[#eefaf1] to-[#e6f7ec] overflow-hidden relative">
<div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-green-300 opacity-20 blur-3xl rounded-full"></div>

<div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-emerald-300 opacity-20 blur-3xl rounded-full"></div>
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[20%] w-[700px] h-[700px] bg-green-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[10%] w-[700px] h-[700px] bg-emerald-300 opacity-20 blur-3xl rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-6 z-50 mx-6 md:mx-20 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl px-8 py-5 flex items-center justify-between">

        <h1 className="text-5xl font-black text-green-600 tracking-tight">
          PALAK
        </h1>

        <div className="hidden md:flex gap-2 items-center bg-white/80 backdrop-blur-xl shadow-xl border border-white/50 px-3 py-2 rounded-2xl">

          <a
            href="#"
            className=" px-5 py-2 rounded-xl bg-green-500 text-white shadow-md font-medium transition hover:text-green-600 transition font-medium text-gray-700"
          >
            Home
          </a>

          <a
            href="#"
            className=" px-5 py-2 rounded-xl bg-green-500 text-white shadow-md font-medium transition hover:text-green-600 transition font-medium text-gray-700"
          >
            Compare
          </a>

          <a
            href="#"
            className="px-5 py-2 rounded-xl bg-green-500 text-white shadow-md font-medium transition hover:text-green-600 transition font-medium text-gray-700"
          >
            Deals
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}
     {/* HERO SECTION */}
<section className="grid lg:grid-cols-2 items-center px-8 md:px-20 py-20 gap-16">

        {/* LEFT SIDE */}
        <div className="max-w-xl">

          <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
            Smart Grocery Savings Platform
          </div>

          <h2 className="text-6xl md:text-8xl font-black leading-tight bg-gradient-to-r from-gray-900 via-green-700 to-emerald-500 bg-clip-text text-transparent mb-6">
            Compare Prices.
            <br />
            Save Smarter.
          </h2>

          <p className="text-gray-600 text-xl leading-relaxed mb-10">
            PALAK helps you compare grocery prices across Blinkit,
            Zepto, JioMart and more — all within your budget.
          </p>
<div className="absolute -left-10 top-10 w-72 h-72 bg-green-200 opacity-20 blur-3xl rounded-full"></div>

          {/* SEARCH BOX */}
          <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 border border-white/50">
           
           <input
              type="text"
              value={products}
              onChange={(e) => setProducts(e.target.value)}
              placeholder="Enter groceries like milk, rice, bread..."
             className="w-full bg-[#f8fafc] border border-gray-200 rounded-2xl px-5 py-4 text-lg mb-5 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition duration-300 placeholder:text-gray-400 shadow-sm"
            />

            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Enter your budget"
              className="w-full bg-[#f8fafc] border border-gray-200 rounded-2xl px-5 py-4 text-lg mb-5 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition duration-300 placeholder:text-gray-400 shadow-sm rounded-2xl px-5 py-4 text-lg mb-5 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <button
            disabled={loading}
              onClick={() => {
               if (products && budget) {

  setLoading(true);

  setTimeout(() => {

    setLoading(false);
    setShowResults(true);

  }, 2200);

}
              }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(16,185,129,0.35)] active:scale-[0.98] text-white text-xl font-bold px-8 py-4 rounded-2xl transition duration-300 hover:bg-green-600 text-white text-xl font-bold px-8 py-4 rounded-2xl transition active:scale-[0.97]hover:scale-105 active:scale-95 transition duration-300"
            >
{loading ? "Analyzing Prices..." : "Find Best Deals"}
            </button>
            
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 flex-wrap active:scale-[0.97]hover:scale-105 active:scale-95 transition duration-300">

  <div className="bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
    ⚡ Fast Comparison
  </div>

  <div className="bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
    💰 Smart Savings
  </div>

  <div className="bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
    🛒 Multi Platform
  </div>

</div>
            {!showResults && (

              <div className="mt-6 text-gray-400">

                Enter groceries and budget to unlock smart savings ✨

              </div>

            )}

          </div>

        </div>
       

  


        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end items-start w-full-translate-y-10">

          {/* FLOATING PLATFORM CARD */}
          <div className="absolute -top-10 -left-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl px-6 py-5 z-20">

            <p className="text-gray-500 text-sm mb-1">
              Cheapest Platform
            </p>

            <h3 className="text-3xl font-black text-green-600">
              Zepto
            </h3>

          </div>

          {/* BACKGROUND SHOPPING ICON */}
          <div className="absolute right-[-100px] top-[100px] text-[320px] opacity-[0.03] select-none pointer-events-none">
            🛒
          </div>

          {/* PHONE MOCKUP */}
          <div className="bg-[#0f172a] rounded-[45px] p-4 shadow-[0_30px_80px_rgba(16,185,129,0.35)] w-full w-full max-w-6xl animate-[float_6s_ease-in-out_infinite]">

            <div className="border border-white/10 rounded-[35px] p-6">

              {/* STATUS BAR */}
              <div className="flex justify-between items-center mb-8 text-white">

                <span className="font-semibold">
                  9:41
                </span>

                <span className="text-sm">
                  🔋 100%
                </span>

              </div>

              {/* HEADER */}
              <div className="flex justify-between items-start mb-8">

                <div>

                  <h3 className="text-5xl font-black text-white leading-none mb-2">
                    Your
                    <br />
                    Savings
                  </h3>

                  <p className="text-gray-400">
                    Today’s Best Deals
                  </p>

                </div>

                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-4">

                  <p className="text-gray-300 text-sm mb-2">
                    Saved Today
                  </p>

                  <h3 className="text-4xl font-black text-green-400">
                    ₹184
                  </h3>

                </div>

              </div>

              {/* DYNAMIC RESULTS */}
              {showResults && (
                

                 <>

    {/* SAVINGS ALERT */}
    <div className="mb-8 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl text-green-200 font-semibold">

      🎉 You can save ₹184 today using Zepto instead of Blinkit.

    </div>


    {/* COMPARISON CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

      {/* Blinkit */}
      <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

        <p className="text-gray-400 mb-2">
          Blinkit
        </p>

        <h3 className="text-4xl font-black text-white mb-2">
          ₹972
        </h3>

        <p className="text-red-400 font-semibold">
          +₹156 higher
        </p>

      </div>


      {/* Zepto */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-5 shadow-2xl">

        <p className="text-white/80 mb-2">
          Zepto
        </p>

        <h3 className="text-4xl font-black text-white mb-2">
          ₹816
        </h3>

        <p className="text-green-100 font-semibold">
          Best Deal 🎉
        </p>

      </div>


      {/* JioMart */}
      <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

        <p className="text-gray-400 mb-2">
          JioMart
        </p>

        <h3 className="text-4xl font-black text-white mb-2">
          ₹902
        </h3>

        <p className="text-yellow-300 font-semibold">
          +₹86 higher
        </p>

      </div>

    </div>

  </>

              )}
              {/* AI RECOMMENDATION */}
<div className="mt-8 bg-gradient-to-r from-[#081028] to-[#112240] rounded-[32px] p-6 md:p-8 border border-white/10 shadow-2xl">

  <div className="flex items-start gap-3 mb-5">

    <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-start justify-center text-2xl">
      🤖
    </div>

    <div>

      <h3 className="text-2xl font-black text-white">
        PALAK AI Recommendation
      </h3>

      <p className="text-gray-400">
        Smart grocery optimization
      </p>

    </div>

  </div>

  <div className="space-y-4 text-gray-300 leading-relaxed">

    <p>
      ✅ Buy milk from <span className="text-green-400 font-bold">Zepto</span> to save ₹18.
    </p>

    <p>
      ✅ Bread is cheapest on <span className="text-green-400 font-bold">Blinkit</span>.
    </p>

    <p>
      ✅ Your full grocery basket fits comfortably within your budget.
    </p>

    <p>
      🚀 Estimated monthly savings with PALAK:
      <span className="text-green-400 font-black"> ₹2,300+</span>
    </p>

  </div>

</div>
{/* LIVE ACTIVITY */}
<div className="mt-8 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8">

  <div className="flex items-center justify-between mb-8">

    <div>

      <h3 className="text-3xl font-black text-white mb-2">
        Live Savings Activity
      </h3>

      <p className="text-gray-400">
        Real-time PALAK user activity
      </p>

    </div>

    <div className="flex items-center gap-2 text-green-400 font-semibold">

      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

      LIVE

    </div>

  </div>

  <div className="space-y-5">

    {/* Activity 1 */}
    <div className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-white/5">

      <div>

        <p className="text-white font-semibold">
          User from Kolkata saved ₹142
        </p>

        <p className="text-gray-400 text-sm">
          Using Zepto + Blinkit combination
        </p>

      </div>

      <p className="text-green-400 font-black">
        2m ago
      </p>

    </div>

    {/* Activity 2 */}
    <div className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-white/5">

      <div>

        <p className="text-white font-semibold">
          User from Bengaluru saved ₹89
        </p>

        <p className="text-gray-400 text-sm">
          Optimized grocery basket
        </p>

      </div>

      <p className="text-green-400 font-black">
        5m ago
      </p>

    </div>

    {/* Activity 3 */}
    <div className="flex items-center justify-between bg-white/5 rounded-2xl p-5 border border-white/5">

      <div>

        <p className="text-white font-semibold">
          User from Mumbai saved ₹211
        </p>

        <p className="text-gray-400 text-sm">
          Multi-platform comparison
        </p>

      </div>

      <p className="text-green-400 font-black">
        9m ago
      </p>

    </div>

  </div>

</div>
{/* ANALYTICS DASHBOARD */}
<section className="mt-6">

  <div className="bg-gradient-to-br from-[#081028] to-[#112240] rounded-[40px] p-10 shadow-[0_25px_80px_rgba(0,0,0,0.35)] border border-white/10">

    {/* Heading */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">

      <div>

        <p className="text-green-400 font-semibold tracking-[0.3em] text-sm mb-3">
          SMART ANALYTICS
        </p>

        <h2 className="text-5xl font-black text-white mb-3">
          PALAK Insights
        </h2>

        <p className="text-gray-400 text-lg">
          AI-powered grocery spending intelligence
        </p>

      </div>

      <div className="mt-6 md:mt-0 bg-green-500/20 border border-green-400/20 rounded-3xl px-6 py-4">

        <p className="text-gray-300 text-sm mb-1">
          Estimated Monthly Savings
        </p>

        <h3 className="text-4xl font-black text-green-400">
          ₹2,340
        </h3>

      </div>

    </div>

    {/* Analytics Cards */}
    <div className="grid md:grid-cols-3 gap-6">

      {/* Card 1 */}
      <div className="bg-white/5 rounded-[30px] p-8 border border-white/10 backdrop-blur-xl hover:scale-105 transition duration-500">

        <div className="text-5xl mb-5">
          📈
        </div>

        <h3 className="text-3xl font-black text-white mb-3">
          73%
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Users save more after comparing across multiple platforms.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-[30px] p-8 shadow-2xl hover:scale-105 transition duration-500">

        <div className="text-5xl mb-5">
          ⚡
        </div>

        <h3 className="text-3xl font-black text-white mb-3">
          0.8s
        </h3>

        <p className="text-white/80 leading-relaxed">
          Average comparison processing time using PALAK AI.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-white/5 rounded-[30px] p-8 border border-white/10 backdrop-blur-xl hover:scale-105 transition duration-500">

        <div className="text-5xl mb-5">
          🛒
        </div>

        <h3 className="text-3xl font-black text-white mb-3">
          14+
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Grocery and delivery platforms supported by PALAK.
        </p>

      </div>

    </div>

  </div>

</section>

              {/* PRODUCT CARDS */}
              <div className="space-y-4">

                {/* PRODUCT 1 */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <img
                      src="https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=300"
                      alt="Milk"
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <div>

                      <h4 className="text-white text-2xl font-bold">
                        Milk 500ml
                      </h4>

                      <span className="inline-block mt-1 bg-green-500/20 text-green-300 text-xs px-3 py-1 rounded-full">
                        Best Value
                      </span>

                      <p className="text-gray-400 mt-2">
                        Zepto
                      </p>

                    </div>

                  </div>

                  <span className="text-5xl font-black text-green-400">
                    ₹58
                  </span>

                </div>

                {/* PRODUCT 2 */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300"
                      alt="Bread"
                      className="w-16 h-16 rounded-2xl object-cover"
                    />

                    <div>

                      <h4 className="text-white text-2xl font-bold">
                        Bread
                      </h4>

                      <p className="text-gray-400 mt-2">
                        Blinkit
                      </p>

                    </div>

                  </div>

                  <span className="text-5xl font-black text-green-400">
                    ₹42
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
{/* TRUSTED PLATFORMS */}
<section className="px-8 md:px-20 py-6">

  <div className="text-center mb-8">

    <p className="text-gray-500 tracking-[0.3em] text-sm font-semibold">
      COMPARE ACROSS TOP PLATFORMS
    </p>

  </div>

  <div className="flex flex-wrap justify-center gap-6">

    
    {/* Blinkit */}
<div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl px-8 py-5 hover:scale-105 transition duration-300 flex items-center justify-center">

  <img
    src="/logos/blinkit.png"
    alt="Blinkit"
    className="h-14 object-contain"
  />

</div>

    {/* Zepto */}
    <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl px-8 py-5 hover:scale-105 transition duration-300 flex items-center justify-center">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Zepto_Logo.svg/512px-Zepto_Logo.svg.png"
        alt="Zepto"
        className="h-12 object-contain"
      />

    </div>

    {/* Instamart */}
    <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl px-8 py-5 hover:scale-105 transition duration-300 flex items-center justify-center">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
        alt="Instamart"
        className="h-12 object-contain"
      />

    </div>

    {/* JioMart */}
    <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl px-8 py-5 hover:scale-105 transition duration-300 flex items-center justify-center">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/JioMart_logo.svg"
        alt="JioMart"
        className="h-12 object-contain"
      />

    </div>

  </div>

</section>
{/* PREMIUM FEATURES */}
<section className="px-8 md:px-20 py-16">

  <div className="text-center mb-16">

    <h2 className="text-5xl font-black text-gray-900 mb-4">
      Why PALAK?
    </h2>

    <p className="text-gray-500 text-lg">
      Smart grocery comparison powered by speed, savings & simplicity.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}
    <div className="bg-white/70 backdrop-blur-2xl rounded-[35px] p-10 shadow-xl hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(16,185,129,0.18)] transition duration-500 border border-white/50">

      <div className="text-5xl mb-6">⚡</div>

      <h3 className="text-3xl font-black mb-4 text-gray-900">
        Fast Comparison
      </h3>

      <p className="text-gray-500 leading-relaxed">
        Instantly compare prices across Blinkit, Zepto, JioMart and more in seconds.
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-[35px] p-10 shadow-2xl hover:-translate-y-3 transition duration-500">

      <div className="text-5xl mb-6">💸</div>

      <h3 className="text-3xl font-black mb-4">
        Save More
      </h3>

      <p className="leading-relaxed text-white/80">
        PALAK automatically finds the cheapest basket for your groceries.
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-[#081028] text-white rounded-[35px] p-10 shadow-2xl hover:-translate-y-3 transition duration-500">

      <div className="text-5xl mb-6">🛒</div>

      <h3 className="text-3xl font-black mb-4">
        Multi Platform
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Compare multiple delivery apps together in one beautiful interface.
      </p>

    </div>

  </div>

</section>
{/* LIVE STATS */}
<section className="px-8 md:px-20 py-10">

  <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-8">

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {/* Stat */}
      <div>

        <p className="text-gray-500 mb-2">
          Active Users
        </p>

        <h3 className="text-4xl font-black text-gray-900">
          12K+
        </h3>

      </div>

      {/* Stat */}
      <div>

        <p className="text-gray-500 mb-2">
          Total Savings
        </p>

        <h3 className="text-4xl font-black text-green-600">
          ₹8.4L
        </h3>

      </div>

      {/* Stat */}
      <div>

        <p className="text-gray-500 mb-2">
          Platforms
        </p>

        <h3 className="text-4xl font-black text-gray-900">
          14+
        </h3>

      </div>

      {/* Stat */}
      <div>

        <p className="text-gray-500 mb-2">
          Avg Delivery
        </p>

        <h3 className="text-4xl font-black text-gray-900">
          11 min
        </h3>

      </div>

    </div>

  </div>

</section>
      {/* DASHBOARD SECTION */}
      <section className="px-8 md:px-20 py-20">

        <div className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">

            <div>

              <p className="text-green-600 font-semibold mb-2">
                SAVINGS OVERVIEW
              </p>

              <h2 className="text-4xl font-black text-gray-900">
                Your Smart Shopping Dashboard
              </h2>

            </div>

            <div className="bg-green-100 text-green-700 px-6 py-4 rounded-2xl font-bold text-2xl">
              ₹184 Saved Today
            </div>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-[#f7faf8] rounded-3xl p-6 border border-gray-100">

              <p className="text-gray-500 mb-2">
                Cheapest Platform
              </p>

              <h3 className="text-3xl font-black text-green-600">
                Zepto
              </h3>

            </div>

            <div className="bg-[#f7faf8] rounded-3xl p-6 border border-gray-100">

              <p className="text-gray-500 mb-2">
                Budget Used
              </p>

              <h3 className="text-3xl font-black text-gray-900">
                ₹816
              </h3>

            </div>

            <div className="bg-[#f7faf8] rounded-3xl p-6 border border-gray-100">

              <p className="text-gray-500 mb-2">
                Products Compared
              </p>

              <h3 className="text-3xl font-black text-gray-900">
                24
              </h3>

            </div>

          </div>

          {/* TABLE */}
          <div className="overflow-hidden rounded-3xl border border-gray-100">

            <div className="grid grid-cols-4 bg-gray-50 p-5 font-semibold text-gray-700">

              <div>Platform</div>
              <div>Total Cost</div>
              <div>Delivery</div>
              <div>Savings</div>

            </div>

            <div className="grid grid-cols-4 p-5 border-t border-gray-100 items-center hover:bg-green-50 transition">

              <div className="font-semibold">
                Blinkit
              </div>

              <div>
                ₹972
              </div>

              <div>
                12 mins
              </div>

              <div className="text-red-500 font-semibold">
                +₹156
              </div>

            </div>

            <div className="grid grid-cols-4 p-5 border-t border-gray-100 items-center bg-green-50">

              <div className="font-semibold text-green-700">
                Zepto
              </div>

              <div className="font-bold">
                ₹816
              </div>

              <div>
                10 mins
              </div>

              <div className="text-green-600 font-bold">
                Best Deal 🎉
              </div>

            </div>

            <div className="grid grid-cols-4 p-5 border-t border-gray-100 items-center hover:bg-green-50 transition">

              <div className="font-semibold">
                JioMart
              </div>

              <div>
                ₹902
              </div>

              <div>
                25 mins
              </div>

              <div className="text-orange-500 font-semibold">
                +₹86
              </div>

            </div>

          </div>

        </div>

      </section>
<div className="h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-30 mx-8 md:mx-20"></div>
      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-10 px-8 md:px-20 pb-20">

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition duration-300">

          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Smart Comparison
          </h3>

          <p className="text-gray-600">
            Compare grocery prices instantly across multiple platforms.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Budget Optimization
          </h3>

          <p className="text-gray-600">
            Stay within your budget while maximizing savings.
          </p>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-300">

          <h3 className="text-2xl font-bold text-green-600 mb-4">
            Faster Decisions
          </h3>

          <p className="text-gray-600">
            No more switching between shopping apps manually.
          </p>

        </div>

      </section>

      {/* FLOAT ANIMATION */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }
      `}</style>
{/* TESTIMONIALS */}

<section className="px-8 md:px-20 py-24">

  <div className="text-center mb-16">

    <h2 className="text-5xl font-black text-gray-900 mb-4">
      Loved By Smart Shoppers
    </h2>

    <p className="text-gray-500 text-lg">
      Thousands already saving money daily with PALAK.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white/80 backdrop-blur-2xl rounded-[35px] p-8 shadow-xl hover:scale-105 transition duration-500">

      <div className="text-yellow-400 text-2xl mb-5">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">
        “PALAK reduced my monthly grocery spending massively.”
      </p>

      <h4 className="font-black text-lg">
        Arnab Manna
      </h4>

    </div>

    <div className="bg-[#081028] text-white rounded-[35px] p-8 shadow-2xl hover:scale-105 transition duration-500">

      <div className="text-yellow-400 text-2xl mb-5">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="text-gray-300 leading-relaxed mb-6">
        “Comparing prices manually was painful before PALAK.”
      </p>

      <h4 className="font-black text-lg">
        Rudranil Banerjee
      </h4>

    </div>

    <div className="bg-green-500 text-white rounded-[35px] p-8 shadow-2xl hover:scale-105 transition duration-500">

      <div className="text-yellow-300 text-2xl mb-5">
        ⭐⭐⭐⭐⭐
      </div>

      <p className="leading-relaxed mb-6">
        “The interface feels like a real funded startup.”
      </p>

      <h4 className="font-black text-lg">
        Saptarshi Hatua
      </h4>

    </div>

  </div>

</section>
<div className="h-[1px] bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-30 mx-8 md:mx-20"></div>
{/* CTA SECTION */}
<section className="px-8 md:px-20 py-24">

  <div className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 rounded-[45px] p-12 md:p-20 text-center shadow-[0_25px_80px_rgba(16,185,129,0.35)]">

    {/* Glow */}
    <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white opacity-10 blur-3xl rounded-full"></div>

    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-white opacity-10 blur-3xl rounded-full"></div>

    <div className="relative z-10">

      <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
        Start Saving
        <br />
        Smarter Today
      </h2>

      <p className="text-white/80 text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
        Join thousands of shoppers using PALAK to compare prices and optimize grocery spending.
      </p>

      <button className="bg-white text-green-600 hover:scale-105 active:scale-[0.97] transition duration-300 font-black text-xl px-10 py-5 rounded-2xl shadow-2xl">

        Get Started

      </button>

    </div>

  </div>

</section>
{/* FOOTER */}
<footer className="px-8 md:px-20 py-16 mt-20 bg-[#081028] text-white rounded-t-[50px]">

  <div className="grid md:grid-cols-4 gap-12">

    {/* Logo */}
    <div>

      <h2 className="text-4xl font-black text-green-400 mb-4">
        PALAK
      </h2>

      <p className="text-gray-400 leading-relaxed">
        Compare grocery prices smarter and save more every single day.
      </p>

    </div>

    {/* Quick Links */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        Quick Links
      </h3>

      <ul className="space-y-3 text-gray-400">

        <li className="hover:text-white transition">Home</li>
        <li className="hover:text-white transition">Compare</li>
        <li className="hover:text-white transition">Deals</li>
        <li className="hover:text-white transition">Features</li>

      </ul>

    </div>

    {/* Platforms */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        Platforms
      </h3>

      <ul className="space-y-3 text-gray-400">

        <li>Blinkit</li>
        <li>Zepto</li>
        <li>Instamart</li>
        <li>JioMart</li>

      </ul>

    </div>

    {/* Contact */}
    <div>

      <h3 className="text-xl font-bold mb-5">
        Contact
      </h3>

      <p className="text-gray-400 mb-3">
        support@palak.ai
      </p>

      <p className="text-gray-400">
        Kolkata, India 🇮🇳
      </p>

    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 mt-14 pt-8 text-center text-gray-500">

    © 2026 PALAK. All rights reserved.

  </div>

</footer>

    </main>
  );
}