"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="w-full max-w-7xl mx-auto bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 flex flex-col lg:flex-row gap-10">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Headline */}
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Meet your AI <br /> outbound engine
            </h1>
            <p className="text-lg text-gray-700">
              Find and research leads, personalize messaging, <br /> and launch
              campaigns in minutes — not hours. <br /> All in Apollo.
            </p>
          </div>

          {/* Email Signup Form */}
          <form className="flex flex-col sm:flex-row gap-4 justify-start max-w-md w-full">
            <input
              type="email"
              placeholder="Enter email"
              required
              className="px-6 py-3 border rounded-xl flex-1"
            />
            <button
              type="submit"
              className="px-6 py-3 border text-sm text-gray-700 font-semibold rounded-xl bg-[rgb(235,242,18)] hover:bg-yellow-100 transition"
            >
              Sign up for free
            </button>
          </form>

          {/* Social Signup Buttons */}
          <div className="flex flex-col gap-4 max-w-md w-full">
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-black bg-white text-gray-800 font-medium shadow-sm hover:shadow-md transition">
              <Image
                src="/Images/google.png"
                alt="Google Icon"
                width={17}
                height={28}
              />
              <span> Sign up with Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-black bg-white text-gray-800 font-medium shadow-sm hover:shadow-md transition">
              <Image
                src="/Images/microsoft.png"
                alt="Microsoft Icon"
                width={17}
                height={28}
              />
              <span> Sign up with Microsoft</span>
            </button>
          </div>

          {/* Terms & Policy */}
          <p className="text-sm text-gray-600 max-w-md whitespace-nowrap">
            By signing up, I agree to Apollo&apos;s{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy.
            </Link>
          </p>
        </div>

        {/* Right Column (Image) */}
        <div>
          <Image
            src="/Images/heroImage.jpg"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
