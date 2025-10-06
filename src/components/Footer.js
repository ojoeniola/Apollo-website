"use client";

import React from "react";

// Footer data
const footerSections = [
  {
    title: "Get started",
    links: ["Sign up for free", "Pricing", "Request a demo"],
  },
  {
    title: "Product",
    links: [
      "Pipeline Builder",
      "Call Assistant",
      "Data Enrichment",
      "Go-To-Market Platform",
    ],
  },
  {
    title: "Platform",
    links: [
      "Living Data Network",
      "Apollo AI",
      "Integrations",
      "Chrome Extension",
      "Workflow Automation",
      "Security",
    ],
  },
  {
    title: "Use Cases",
    links: [
      "B2B Database",
      "Lead Scoring",
      "Inbound Lead Router",
      "Sales Engagement",
      "Meetings Scheduler",
      "Deal Management",
    ],
  },
  {
    title: "Roles",
    links: [
      "Sales Leaders",
      "Account Executives",
      "Sales Development",
      "Founders",
      "Marketing",
      "Revenue Operations",
    ],
  },
  {
    title: "Resources",
    links: [
      "Apollo Academy",
      "Magazine",
      "Insights",
      "Partners",
      "Knowledge Base →",
      "Webinars",
      "Success Stories",
      "Privacy Center",
      "API Docs →",
      "Join Our Community",
    ],
  },
  {
    title: "Revenue Operations",
    links: [
      "Deal Management",
      "Conversation Intelligence",
      "Sales Analytics",
      "Sales Coaching",
    ],
  },
  {
    title: "Company",
    links: [
      "Careers",
      "Customer Reviews",
      "Contact Us & Sales",
      "Hey AI, learn about us",
    ],
  },
  {
    title: "Find us on social",
    links: ["YouTube", "Instagram", "TikTok", "X", "Facebook"],
  },
];

const bottomLinks = [
  "Privacy Policy",
  "Terms",
  "Don&apos;t Sell My Info",
  "About Apollo",
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.slice(0, 5).map((section, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Combined last sections */}
          <div>
            {footerSections.slice(5).map((section, idx) => (
              <div key={idx} className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pt-8 border-t border-gray-300">
          {/* Prospect CTA */}
          <div className="lg:pl-8">
            <h3 className="font-semibold text-gray-900 mb-4">
              Prospect anywhere
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get verified emails and phone numbers and instantly reach out
              while working in your favorite tools.
            </p>
            <button className="border border-gray-900 text-gray-900 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors">
              Apollo Chrome Extension
            </button>
          </div>

          {/* Company & Social */}
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            {footerSections.slice(-2).map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Logo & bottom links */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <g transform="translate(50,50)">
                      {[...Array(8)].map((_, i) => (
                        <rect
                          key={i}
                          x="-8"
                          y="-40"
                          width="16"
                          height="35"
                          fill="#1f2937"
                          transform={`rotate(${i * 45})`}
                        />
                      ))}
                    </g>
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Apollo © 2025</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              {bottomLinks.map((link, idx) => (
                <a key={idx} href="#" className="hover:text-gray-900">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
