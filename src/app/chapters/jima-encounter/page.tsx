'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function JimaEncounterPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/chapters" className="flex items-center text-stone-600 hover:text-amber-600 transition-colors">
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              All Chapters
            </Link>
            <div className="text-center">
              <p className="text-sm font-medium text-stone-900">Chapter 1</p>
              <p className="text-xs text-stone-500">15 min read</p>
            </div>
            <Link href="/chapters/teaching-years" className="flex items-center text-stone-600 hover:text-amber-600 transition-colors">
              Next Chapter
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Chapter Header */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
                  Ninth Grade Days and the Jima Encounter
                </h1>
                <p className="text-lg text-stone-600 mt-2">The first unforgettable encounter</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-stone-500 mb-8">
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                1959
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                15 min read
              </div>
              <div className="flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2" />
                Jima, Addis Ababa, Debre Markos
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter Content */}
      <article className="px-6 pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-stone max-w-none"
          >
            <p className="text-xl leading-relaxed text-stone-700 mb-8">
              1959 was the year I completed my primary education, which is, eighth grade studies. I took the eighth-grade national exam at the same King Tekle Haymanot School, and I achieved high results, which gave me the opportunity to be assigned to Jima Agricultural School. This was my first choice to continue my ninth-grade education since Jima Agricultural School was one of the famous and renowned vocational schools at the time. My family and I were thrilled about the opportunity I received.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg">
              <p className="text-stone-700 italic">
                That same year, three young students from Gojjam Province were also selected to join Jima Agricultural School. Among them were Gualu Endegnanew, Mulugeta Seyum, and me.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              When the rainy season ended and schools reopened nationwide, the three of us embarked on a journey to Addis Ababa. Since this was my first trip to Addis Ababa and my first time leaving my family for another city, I felt an overwhelming sense of excitement.
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              On the eve of my trip, I was given long pants, or "bolale," and a pair of shoes. That was the first time ever I had a chance to wear something other than short pants and shoes.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">The Interview Process</h2>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              During our stay in Addis Ababa, we had two main tasks to complete. The first was to take an entrance interview for students who had been selected to join Jima Agricultural School from all over Ethiopia. Passing this interview was a crucial requirement. Secondly, we had to undergo a comprehensive health examination and obtain medical confirmation of our health even if we passed the interview.
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              The entrance interview was conducted by Mr. Meisner, the American director of Jima Agricultural School, and the deputy director, Mr. Tesfa Bushen. The first round of interview was led by Mr. Tesfa Bushen. However, his questions on agriculture were quite challenging and the complexity of his English made them harder to understand. I wasn't able to meet his expectations during the test, which left me feeling disappointed and somewhat discouraged at the time.
            </p>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
              <p className="text-stone-700 italic">
                Fortunately, since many of the other new students had similar experiences, it was decided that the interview should be conducted again. The next day, I had the opportunity to take the interview with the American director.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              In this second chance I was given, I remained composed and provided comprehensive answers to the questions posed to me. With a warm smile, the director shared the good news—I could head to Jima the very next morning to collect the funds for my travel. And just like that, the path ahead quietly opened.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">Arrival at Jima Agricultural School</h2>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              The next day, I boarded the bus from Addis Ababa to Jima and arrived at Jima Agricultural School the same day, albeit in the late afternoon. As soon as I reached the bus station, numerous young people began calling my name and introducing themselves. They explained to me in a warm and friendly manner that they were senior students at my new School. They regularly assist new students arriving at the school from the bus station, helping them settle in.
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              Overwhelmed with gratitude, I arrived at the school compound in a peaceful state of mind.
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              These same young people then showed me around my dormitory room, the bed, bathroom, dining hall, classrooms, and sports fields. Everything I saw was like a dream, a testament to the modernity and spaciousness of the facilities. When they showed me the school's dining hall and kitchen, it was unlike anything I had ever seen or tasted before—fried meat and milk flowing freely from large barrel-like containers. I couldn't help but express my profound gratitude to the divine for assigning me to Jima Agricultural School.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">The Onset of Homesickness</h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8 rounded-r-lg">
              <p className="text-stone-700 italic text-lg">
                When I looked out the window at the trees and plants outside, none of them moved, they didn't seem alive, everything seemed quiet and still. "What kind of country have I entered!" I said, filled with anxiety.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              On my arrival in Jima, I settled into my assigned dormitory room and was told that I would sleep on the upper bunk bed. After a few minutes, I approached a student in the room and inquired about Gualu Endegnanew, a student who had arrived two days before me. The boy replied, "Yes, I know him! As it turns out, yesterday he went to harvest teff and, upon his return, fell ill. He went to the clinic and might be resting there."
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              When I heard that, something came over me, that gave me a strange feeling, made me feel numb, my head spun, my heartbeat increased, I was very shocked and scared. Even worse, when I looked out the window at the trees and plants outside, none of them moved, they didn't seem alive, everything seemed quiet and still.
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              In a short span of time, I experienced moments of joy and wonder—but they quickly gave way to a wave of anxiety and fear. What lingered in my mind wasn't the school's impressive services or the conditions I had admired earlier. Instead, my thoughts drifted back to Debre Markos, the town I had left behind, and most of all, to my father and our family. Their absence echoed louder than anything I had seen.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-12 mb-6">The Decision to Leave</h2>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              The American director was very kind and gentle, someone who never wanted to hurt anybody's feelings. He believed in discussion and advice rather than force and anger. Calmly and patiently he repeatedly advised and counseled me not to leave the school. Finally, since my spirit, and entire being was disturbed, I firmly expressed my desire to return to Gojjam by any means.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
              <p className="text-stone-700 italic">
                The director, very saddened by my decision, said, "Well then, if you've decided to return, you can go," and wrote a letter of withdrawal to be given to the Ministry of Education in Addis Ababa.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-stone-700 mb-6">
              The next day, I arrived in Debre Markos, rejoined ninth grade, and continued my studies alongside my former classmates, carrying a quiet resolve and a renewed sense of diligence.
            </p>

            <p className="text-lg leading-relaxed text-stone-700 mb-8">
              My decision had two major implications upon my upcoming academic year, but through my father's great effort and perseverance, and a new opportunity at Harar Teachers Training School, the path forward would reveal itself in unexpected ways.
            </p>
          </motion.div>

          {/* Chapter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between pt-12 border-t border-stone-200"
          >
            <Link href="/chapters" className="flex items-center text-stone-600 hover:text-amber-600 transition-colors">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              All Chapters
            </Link>
            <Link href="/chapters/teaching-years" className="flex items-center px-6 py-3 bg-amber-600 text-white rounded-xl hover:bg-amber-700 transition-colors">
              Next: Teaching Years
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  )
}
