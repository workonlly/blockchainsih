'use client'
import { useState } from "react"

interface VideoData {
  id: string;
  url: string;
  title: string;
}

const videoData: VideoData[] = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/9IjGl49b4vI",
    title: "Agricultural Innovation Video 1"
  },
  {
    id: "2", 
    url: "https://www.youtube.com/embed/B_uuyb4uoh0",
    title: "Sustainable Farming Video 2"
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/zi8UxFNDYAQ", 
    title: "Blockchain Agriculture Video 3"
  }
]

export default function Swiper() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoData.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoData.length) % videoData.length);
  };

  const goToVideo = (index: number) => {
    setCurrentVideo(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Video Container */}
        <div className="relative">
          <div className="aspect-video">
            <iframe 
              src={videoData[currentVideo].url}
              title={videoData[currentVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-t-2xl"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Previous video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Next video"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Video Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {videoData[currentVideo].title}
          </h3>
          <p className="text-gray-600 mb-4">
            Video {currentVideo + 1} of {videoData.length}
          </p>
          
          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2">
            {videoData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToVideo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentVideo 
                    ? 'bg-green-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-3 gap-4">
            {videoData.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToVideo(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentVideo 
                    ? 'border-green-600 scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                {index === currentVideo && (
                  <div className="absolute inset-0 bg-green-600/20 flex items-center justify-center">
                    <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Playing
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
