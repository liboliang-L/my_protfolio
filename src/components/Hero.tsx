import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-xl md:text-2xl font-medium text-cyan-400">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            <span className="block">Creative</span>
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
              Developer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Passionate about building beautiful web experiences with modern technologies.
            Specializing in React, TypeScript, and creative UI design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-500/25"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            
            {/* Avatar container */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden relative">
                {/* Placeholder Avatar - Replace with actual image later */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-400/10"></div>
                <span className="text-8xl select-none filter drop-shadow-lg">👨‍💻</span>
              </div>
            </div>
            
            {/* Floating elements decoration */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-xl animate-bounce delay-100">
              <span className="text-xl">⚛️</span>
            </div>
            <div className="absolute bottom-8 -left-8 w-14 h-14 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-xl animate-bounce delay-300">
              <span className="text-2xl">TS</span>
            </div>
            <div className="absolute top-1/2 -right-12 w-10 h-10 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-xl animate-bounce delay-500">
              <span className="text-lg">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
