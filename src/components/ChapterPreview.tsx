'use client'

import Link from 'next/link'
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Featured chapter from Aklilu Afework's actual memoir
const featuredChapter = {
  id: 'ninth-grade-jima',
  title: 'Ninth Grade Days and the Jima Encounter',
  subtitle: 'The First Unforgettable Encounter',
  date: '1959',
  readTime: '15 min read',
  excerpt: `
    1959 was the year I completed my primary education, which is, eighth grade studies. I took the eighth-grade national exam at the same King Tekle Haymanot School, and I achieved high results, which gave me the opportunity to be assigned to Jima Agricultural School. This was my first choice to continue my ninth-grade education since Jima Agricultural School was one of the famous and renowned vocational schools at the time.
    
    When I arrived in Jima, I settled into my assigned dormitory room and was told that I would sleep on the upper bunk bed. Everything I saw was like a dream, a testament to the modernity and spaciousness of the facilities. When they showed me the school's dining hall and kitchen, it was unlike anything I had ever seen or tasted before—fried meat and milk flowing freely from large barrel-like containers.
    
    But when I looked out the window at the trees and plants outside, none of them moved, they didn't seem alive, everything seemed quiet and still. "What kind of country have I entered!" I said, filled with anxiety. The homesickness that followed would change the course of my entire life...
  `,
  image: '/images/chapters/jima-school.jpg',
  tags: ['education', 'homesickness', 'Jima Agricultural School', '1959']
}

export default function ChapterPreview() {
  return (
    <div className="bg-white rounded-2xl shadow-memoir border border-memoir-100 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Content */}
        <div className="p-10">
          <div className="flex items-center text-sm text-memoir-500 mb-4">
            <CalendarIcon className="w-4 h-4 mr-2" />
            <span className="mr-6">{featuredChapter.date}</span>
            <ClockIcon className="w-4 h-4 mr-2" />
            <span>{featuredChapter.readTime}</span>
          </div>
          
          <h3 className="text-3xl font-bold text-memoir-900 mb-3 leading-tight">
            {featuredChapter.title}
          </h3>
          
          <p className="text-xl text-memoir-700 mb-6 font-medium">
            {featuredChapter.subtitle}
          </p>
          
          <div className="memoir-prose text-memoir-600 mb-8 font-serif-memoir">
            <p className="text-lg leading-relaxed">{featuredChapter.excerpt}</p>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {featuredChapter.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-memoir-100 text-memoir-700 text-sm font-medium rounded-full hover:bg-memoir-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <Link
            href={`/chapters/${featuredChapter.id}`}
            className="memoir-button text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Read Full Chapter
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
        
        {/* Image placeholder with enhanced design */}
        <div className="relative bg-gradient-to-br from-memoir-100 to-vintage-100 lg:min-h-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-memoir-400">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-4xl">📖</span>
              </div>
              <p className="text-lg font-medium">
                Chapter Illustration
              </p>
              <p className="text-sm opacity-75 mt-2">
                Historical photo coming soon
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-8 right-8 w-16 h-16 bg-vintage-300/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-8 left-8 w-20 h-20 bg-memoir-300/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  )
}