'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-earth-900 via-earth-800 to-earth-700 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/placeholders/gojjam-highlands.jpg"
          alt="Ethiopian Highlands - Gojjam Province"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-earth-900/70 via-earth-800/50 to-earth-700/70" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Moments Unfolded
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-earth-100 font-light">
            The Memoir of Aklilu Afework
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <blockquote className="text-lg md:text-xl italic text-earth-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            "Life is not measured by the number of breaths we take, but by the number of moments that take our breath away!"
          </blockquote>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a 
            href="#chapters" 
            className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors shadow-lg"
          >
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Start Reading
          </a>
          <a 
            href="#timeline" 
            className="inline-flex items-center px-8 py-4 border-2 border-white hover:bg-white hover:text-earth-900 text-white rounded-lg font-semibold transition-colors"
          >
            View Timeline
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
        </motion.div>

        <div className="text-sm text-earth-300">
          <p>Historical view of Ethiopian Highlands, Gojjam Province (placeholder until family photo)</p>
        </div>
      </div>
    </section>
  )
}