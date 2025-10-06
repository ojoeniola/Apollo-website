"use client";

import React from "react";

export default function Features() {
  const features = [
    { name: "Pipeline Builder", icon: "→", href: "/features/pipeline-builder" },
    { name: "Call Assistant", icon: "→", href: "/features/call-assistant" },
    { name: "Data Enrichment", icon: "→", href: "/features/data-enrichment" },
    {
      name: "Go-To-Market Platform",
      icon: "→",
      href: "/features/go-to-market-platform",
    },
  ];

  const metrics = [
    { value: "5x", label: "Meetings booked", company: "Leadium." },
    { value: "2x", label: "Email open rate", company: "PR", border: true },
    {
      value: "400%",
      label: "More phone numbers",
      company: "Census",
      logo: true,
    },
  ];

  const benefits = [
    { icon: "👥", text: "Access the world's best B2B data" },
    { icon: "✨", text: "Multiple data sources in one place" },
    { icon: "🤖", text: "AI assistant for smarter outreach" },
    { icon: "💡", text: "Personalization across every channel" },
  ];

  const handleFeatureClick = (href) => {
    window.location.href = href;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs sm:text-sm text-gray-600 font-medium">
          JOIN OVER 500,000 BUSINESSES USING APOLLO
        </div>
      </header>

      {/* Metrics Section */}
      <section className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start justify-between">
                  <p className="text-xs sm:text-sm text-gray-600">
                    {metric.label}
                  </p>
                  {metric.border && (
                    <div className="border border-gray-300 px-2 py-0.5 rounded text-xs font-medium">
                      {metric.company}
                    </div>
                  )}
                  {metric.logo && (
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-4 bg-gray-900 rounded-sm"></div>
                      <span className="text-sm font-bold">
                        {metric.company}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-5xl sm:text-6xl font-light text-gray-900">
                  {metric.value}
                </div>
                {!metric.border && !metric.logo && (
                  <div className="text-base sm:text-lg font-medium text-gray-900">
                    {metric.company}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-8 lg:space-y-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-gray-900">
              Apollo,
              <br />
              The AI Sales
              <br />
              Platform
            </h1>
            <p className="text-base sm:text-lg text-gray-700 max-w-md">
              Apollo is an end-to-end AI sales platform with all the features,
              integrations, and training you need to grow your business.
            </p>
            <div className="space-y-0 border-t border-gray-200">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between py-4 sm:py-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6"
                  onClick={() => handleFeatureClick(feature.href)}
                >
                  <span className="text-sm sm:text-base text-gray-700 group-hover:text-gray-900 transition-colors">
                    {feature.name}
                  </span>
                  <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-200 text-lg">
                    {feature.icon}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-gray-800 transition-colors shadow-sm">
                Get started for free
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 font-bold text-xl">
                Illustration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-gray-900">
              Everything you need
              <br />
              to sell, scale, and succeed
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full text-3xl mb-6">
                  {b.icon}
                </div>
                <p className="text-gray-900 font-medium text-base">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------
          Last Section: SalesEngage Features
      -------------------------- */}
      <section className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
            Find the right people and book quality meetings
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-yellow-300 text-slate-800 px-4 md:px-6 py-2 rounded font-medium hover:bg-yellow-400 transition">
              PIPELINE BUILDER
            </button>
            <button className="bg-blue-200 text-slate-700 px-4 md:px-6 py-2 rounded font-medium hover:bg-blue-300 transition">
              CALL ASSISTANT
            </button>
            <button className="bg-purple-200 text-slate-700 px-4 md:px-6 py-2 rounded font-medium hover:bg-purple-300 transition">
              DATA ENRICHMENT
            </button>
            <button className="bg-slate-200 text-slate-700 px-4 md:px-6 py-2 rounded font-medium hover:bg-slate-300 transition">
              GO-TO-MARKET PLATFORM
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <button className="bg-slate-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition">
              Get started for free
            </button>
            <button className="bg-white text-slate-800 px-6 py-3 rounded-lg font-medium border-2 border-slate-800 hover:bg-slate-50 transition">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
