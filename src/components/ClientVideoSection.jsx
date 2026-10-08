import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Shield, Radio, CheckCircle2, Film, Upload } from 'lucide-react';

export default function ClientVideoSection({ onOpenQuote }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If video file is not yet uploaded, keep status clean
          setIsPlaying(true);
        });
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="video-showcase" className="py-16 sm:py-20 bg-[#080c14] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header - Clean, Refined Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <Film className="w-3.5 h-3.5 mr-1" />
            CORPORATE VIDEO SHOWCASE
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight uppercase text-white">
            OPERATIONS IN <span className="text-blue-500">ACTION</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Watch Tough Task Security Solutions in the field — military-grade guard turnouts, mobile patrol responses, and integrated CCTV control room telemetry across Zambia.
          </p>
        </div>

        {/* Video Player Container */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0d1322] border border-slate-750 shadow-2xl group">
          
          {/* Main Video Element with Poster Fallback */}
          <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              poster="/assets/security-leadership.jpg"
              loop
              playsInline
              muted={isMuted}
              className="w-full h-full object-cover filter brightness-[0.9]"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              {/* Client video source */}
              <source src="/assets/client-video.mp4" type="video/mp4" />
              <source src="/assets/toughtask-operations.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Subtle Gradient Overlay */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-80' : 'opacity-70'}`} />

            {/* Center Big Play / Pause Button */}
            <button
              onClick={togglePlay}
              className={`absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-7 h-7 sm:w-8 sm:h-8" /> : <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1" />}
            </button>

            {/* Top HUD Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-[#090d16]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-slate-200 font-semibold">TOUGH TASK • OFFICIAL VIDEO REEL</span>
            </div>

            {/* Bottom Controls Bar */}
            <div className={`absolute bottom-0 inset-x-0 z-20 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex justify-between items-center text-xs transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}>
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-blue-400 font-semibold flex items-center"
                >
                  {isPlaying ? <Pause className="w-4 h-4 mr-1.5" /> : <Play className="w-4 h-4 mr-1.5" />}
                  <span>{isPlaying ? 'Pause' : 'Play Operations Reel'}</span>
                </button>

                <button
                  onClick={toggleMute}
                  className="text-slate-300 hover:text-white"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">1080P HD • 24/7 COMMAND</span>
                <button
                  onClick={toggleFullScreen}
                  className="text-slate-300 hover:text-white"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Video Information & Client Replacement Helper Bar */}
          <div className="p-4 sm:p-5 bg-[#0e1422] border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-slate-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                <strong>Client Video Section:</strong> Ready to play client video file (<code className="text-blue-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono">/assets/client-video.mp4</code>).
              </span>
            </div>

            <button
              onClick={onOpenQuote}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all shrink-0"
            >
              REQUEST SERVICES IN VIDEO
            </button>
          </div>

        </div>

        {/* 3 Clean Features Beneath Video */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-[#0e1422] border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white uppercase flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
              Vetted Guarding Details
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Drill-trained officers on post across residential, commercial and heavy industrial facilities.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1422] border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white uppercase flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5" />
              Rapid Alarm Reaction
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Mobile patrol vehicles stationed in key economic nodes ready for sub-minute emergency response.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e1422] border border-slate-800 space-y-1.5">
            <div className="text-xs font-bold text-white uppercase flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mr-1.5" />
              GPS & CCTV Command
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Live electronic tour checkpoints and AI camera surveillance integrated into our central desk.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
