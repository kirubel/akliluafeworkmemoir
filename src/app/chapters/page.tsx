'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon, BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline'

const chapters = [
  {
    id: 'introduction',
    title: 'Introduction',
    subtitle: 'A thread of memory woven through time',
    year: '1959',
    readTime: '3 min',
    excerpt: 'I share these pages as a keepsake for generations of our family...'
  },
  {
    id: 'jima-encounter',
    title: 'Ninth Grade Days and the Jima Encounter',
    subtitle: 'The first unforgettable encounter',
    year: '1959',
    readTime: '15 min',
    excerpt: '1959 was the year I completed my primary education...',
    featured: true
  },
  {
    id: 'teaching-years',
    title: 'Two Years of Teaching',
    subtitle: 'Discovery in Arsi Province',
    year: '1963-1964',
    readTime: '12 min',
    excerpt: 'September 18th was the day schools opened throughout Ethiopia...'
  }
]

export default function ChaptersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <h1 className="font-bold text-stone-900">Aklilu's Memoir</h1>
                <p className="text-xs text-stone-600">Chapters</p>
              </div>
            </Link>
            <Link href="/" className="flex items-center text-stone-600 hover:text-amber-600 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
              <BookOpenIcon className="w-4 h-4 inline mr-2" />
              Complete Memoir
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Life Chapters
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Journey through the remarkable story of Aklilu Afework, from childhood in Debre Markos to international service
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapters List */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {chapters.map((chapter, index) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative ${chapter.featured ? 'ring-2 ring-amber-200' : ''}`}
              >
                <Link href={`/chapters/${chapter.id}`} className="block">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    {chapter.featured && (
                      <div className="absolute -top-3 left-8">
                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                          <span className="text-amber-600 font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                            {chapter.title}
                          </h3>
                          <p className="text-stone-600">{chapter.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-stone-500">
                        <span>{chapter.year}</span>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {chapter.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-stone-600 leading-relaxed mb-4">
                      {chapter.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-amber-600 font-medium group-hover:translate-x-2 transition-transform">
                        Read chapter →
                      </div>
                      <ArrowRightIcon className="w-5 h-5 text-stone-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <div className="bg-white/50 rounded-2xl p-8 border-2 border-dashed border-stone-300">
              <h3 className="text-lg font-semibold text-stone-600 mb-2">More Chapters Coming Soon</h3>
              <p className="text-stone-500">
                Additional chapters covering university years, government service, and international career
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
