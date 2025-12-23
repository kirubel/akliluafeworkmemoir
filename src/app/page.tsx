'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player'
import MemoirTimeline from '@/components/MemoirTimeline'
import ChapterViewer from '@/components/ChapterViewer'

// Dynamic import for map to avoid SSR issues
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className="h-96 bg-earth-100 rounded-lg animate-pulse flex items-center justify-center">Loading map...</div>
})

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen bg-gradient-to-b from-earth-50 to-amber-50">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop&crop=center')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Moments Unfolded
          </h1>
          <h2 className="text-2xl md:text-3xl text-amber-200 mb-8 font-light">
            The Memoir of Aklilu Afework
          </h2>
          
          <blockquote className="text-xl md:text-2xl text-white/90 italic mb-12 max-w-3xl mx-auto leading-relaxed">
            "Life is not measured by the number of breaths we take, but by the moments that take our breath away!"
          </blockquote>
          
          {/* YouTube Audiobook Player */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <h3 className="text-white text-lg mb-4">Listen to the Full Audiobook</h3>
            <div className="aspect-video max-w-2xl mx-auto">
              <ReactPlayer
                url="https://youtu.be/bz5_H13DYoI"
                width="100%"
                height="100%"
                controls={true}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection('timeline')}
              className="px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Explore Timeline
            </button>
            <button 
              onClick={() => setActiveSection('chapters')}
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-earth-900 transition-colors"
            >
              Read Chapters
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-earth-900 text-center mb-12">Life Journey</h2>
          <MemoirTimeline />
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-16 px-6 bg-earth-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-earth-900 text-center mb-12">Places That Shaped His Story</h2>
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
            <InteractiveMap />
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-earth-900 text-center mb-12">Read the Memoir</h2>
          <ChapterViewer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">A Family Keepsake</h3>
          <p className="text-earth-300 mb-6">
            Preserving the remarkable journey of Aklilu Afework for generations to come
          </p>
          <div className="border-t border-earth-700 pt-6">
            <p className="text-earth-400 text-sm">
              ©2025 Family Keepsake | Photo upload placeholders coming soon
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
