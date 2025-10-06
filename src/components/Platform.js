export default function Platform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-3xl  font-bold text-gray-900 leading-tight">
              The best sales platform in the world, at an (almost) unbelievable
              value
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl leading-relaxed">
              You don't have to spend a fortune to run a world-class
              revenue-generating machine. Replace ZoomInfo, Outreach, Salesloft,
              Gong, Chili Piper, and more with Apollo to cut costs and get
              better results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-black text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                See pricing
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-black text-black text-lg font-semibold rounded-lg hover:bg-black hover:text-white transition-all duration-200 shadow-md hover:shadow-lg">
                Get started for free
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main Box */}
              <div className="relative">
                {/* Box base */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden">
                  {/* Black cross/plus shape */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-8 bg-black"></div>
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-8 bg-black"></div>
                    </div>
                  </div>

                  {/* Yellow squares on cross */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-yellow-300 rounded-lg shadow-md"></div>
                  </div>

                  {/* Spheres */}
                  <div className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-200"></div>
                  <div className="absolute top-12 right-12 w-10 h-10 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-md"></div>
                  <div className="absolute bottom-10 left-10 w-14 h-14 bg-white rounded-full shadow-lg"></div>
                  <div className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100"></div>
                </div>

                {/* Floating box lid */}
                <div className="absolute -top-8 right-4 sm:right-8 transform rotate-12">
                  <div className="w-32 h-24 sm:w-40 sm:h-28 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-2xl shadow-2xl border-4 border-white"></div>
                </div>

                {/* Floating cubes */}
                <div className="absolute -top-4 left-8 sm:left-12 w-8 h-8 bg-white rounded-md shadow-lg transform rotate-12 border border-gray-200"></div>
                <div className="absolute -top-6 left-20 sm:left-28 w-10 h-10 bg-yellow-300 rounded-md shadow-lg transform -rotate-6"></div>
                <div className="absolute -top-2 left-32 sm:left-40 w-6 h-6 bg-yellow-200 rounded-sm shadow-md transform rotate-45"></div>

                {/* Bottom sphere with black */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-black rounded-t-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
