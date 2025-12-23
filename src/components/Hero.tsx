'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="relative bg-white py-12 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Life Measured by Moments
            </h1>
            <p className="text-xl text-gray-600 mb-2">The Memoir of</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-memoir-700 mb-6">
              Aklilu Afework
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <blockquote className="text-lg italic text-gray-600 mb-8 max-w-2xl mx-auto">
              "Life is not measured by the number of breaths we take, but by the number of moments that take our breath away!"
            </blockquote>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/chapters" className="inline-flex items-center px-6 py-3 bg-memoir-600 text-white rounded-lg hover:bg-memoir-700 transition-colors">
              <BookOpenIcon className="w-5 h-5 mr-2" />
              Start Reading
            </Link>
            <Link href="/timeline" className="inline-flex items-center px-6 py-3 border border-memoir-300 text-memoir-700 rounded-lg hover:bg-memoir-50 transition-colors">
              View Timeline
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}