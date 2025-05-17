import React, { useState } from 'react';

const YoutubeEmbed = ({ embedId, title, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto"> {/* Increased max-width and centered */}
      {!isExpanded ? (
        <div 
          className="cursor-pointer group relative"
          onClick={() => setIsExpanded(true)}
        >
          {/* Larger thumbnail container */}
          <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={`https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
              <div className="bg-red-600 text-white rounded-full p-4 hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Full-sized embedded player */
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
            frameBorder="0"
            allowFullScreen
            title={title}
          />
        </div>
      )}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-medium">{title}</h3>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          {isExpanded 
            ? (lang === 'en' ? 'Show thumbnail' : 'サムネイルを表示') 
            : (lang === 'en' ? 'Play video' : '動画を再生')}
        </button>
      </div>
    </div>
  );
};

export default YoutubeEmbed;