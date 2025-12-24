'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import MemoirTimeline from '@/components/MemoirTimeline'
import ChapterViewer from '@/components/ChapterViewer'

// Dynamic import for map to avoid SSR issues
const InteractiveMap = dynamic(() => import('@/components/InteractiveMap'), {
  ssr: false,
  loading: () => <div className="h-96 bg-earth-100 rounded-lg animate-pulse flex items-center justify-center">Loading map...</div>
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-earth-50 to-white">
      <Hero />
      
      {/* Timeline Section */}
      <section id="timeline" className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-earth-900">Life Journey</h2>
          <MemoirTimeline />
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-earth-900">Places of Memory</h2>
          <InteractiveMap />
        </div>
      </section>

      {/* Audiobook Section */}
      <section id="audiobook" className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-earth-900">Listen to the Memoir</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-earth-200">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/bz5_H13DYoI"
                  title="Moments Unfolded: The Memoir of Aklilu Afework - Audiobook"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-earth-700 text-lg">
                  Experience the full memoir through this carefully narrated audiobook, 
                  bringing Aklilu's journey to life through spoken word.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-earth-900">Read the Chapters</h2>
          <p className="text-center text-earth-600 text-lg mb-12 max-w-3xl mx-auto">
            Dive deep into the written memoir, exploring each chapter with interactive elements 
            and the ability to jump to corresponding audio sections.
          </p>
          <ChapterViewer />
        </div>
      </section>
    </main>
  )
}
