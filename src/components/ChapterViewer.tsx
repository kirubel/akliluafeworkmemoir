'use client'

import { useState } from 'react'
import Image from 'next/image'

const chapters = [
  {
    id: 'introduction',
    title: 'Introduction',
    audioTimestamp: '0',
    content: `I share these pages as a keepsake for generations of our family—a thread of memory woven through time. This memoir begins in the early chapter of my life, just after completing eighth grade, when a quiet encounter gently marked the start of my story.

I completed my primary education at King Tekle Haymanot School in Gojjam Province (as it was called then), and I grew up in the town of Debre Markos in a neighborhood called "Wuseta." I continued my studies in ninth grade in Debre Markos, where the first unforgettable encounter of my youth gently unfolded—a moment etched in memory, marking the true beginning of my story.`
  },
  {
    id: 'chapter1',
    title: 'Chapter 1: Ninth Grade Days and the Jima Encounter',
    audioTimestamp: '300',
    content: `1959 was the year I completed my primary education, which is, eighth grade studies. I took the eighth-grade national exam at the same King Tekle Haymanot School, and I achieved high results, which gave me the opportunity to be assigned to Jima Agricultural School. This was my first choice to continue my ninth-grade education since Jima Agricultural School was one of the famous and renowned vocational schools at the time. My family and I were thrilled about the opportunity I received.

That same year, three young students from Gojjam Province were also selected to join Jima Agricultural School. Among them were Gualu Endegnanew, Mulugeta Seyum, and me. When the rainy season ended and schools reopened nationwide, the three of us embarked on a journey to Addis Ababa. Since this was my first trip to Addis Ababa and my first time leaving my family for another city, I felt an overwhelming sense of excitement.

On the eve of my trip, I was given long pants, or "bolale," and a pair of shoes. That was the first time ever I had a chance to wear something other than short pants and shoes.

The entrance interview was conducted by Mr. Meisner, the American director of Jima Agricultural School, and the deputy director, Mr. Tesfa Bushen. However, his questions on agriculture were quite challenging and the complexity of his English made them harder to understand. I wasn't able to meet his expectations during the test, which left me feeling disappointed and somewhat discouraged at the time.

Fortunately, since many of the other new students had similar experiences, it was decided that the interview should be conducted again. The next day, I had the opportunity to take the interview with the American director.

In this second chance I was given, I remained composed and provided comprehensive answers to the questions posed to me. With a warm smile, the director shared the good news—I could head to Jima the very next morning to collect the funds for my travel. And just like that, the path ahead quietly opened.

When I heard that, something came over me, that gave me a strange feeling, made me feel numb, my head spun, my heartbeat increased, I was very shocked and scared. Even worse, when I looked out the window at the trees and plants outside, none of them moved, they didn't seem alive, everything seemed quiet and still. I stayed a little longer and asked myself, "Is there no wind in this country? What do they breathe? How do they live?" At this time in Debre Markos town, it's the time when the air, wind, mud, dust, trees, and leaves are all swirling. "What kind of country have I entered!" I said, filled with anxiety.

The American director was very kind and gentle, someone who never wanted to hurt anybody's feelings. He believed in discussion and advice rather than force and anger. Calmly and patiently he repeatedly advised and counseled me not to leave the school. Finally, since my spirit, and entire being was disturbed, I firmly expressed my desire to return to Gojjam by any means.

The director, very saddened by my decision, said, "Well then, if you've decided to return, you can go," and wrote a letter of withdrawal to be given to the Ministry of Education in Addis Ababa and ordered that my transportation costs be paid.`
  }
]

export default function ChapterViewer() {
  const [activeChapter, setActiveChapter] = useState(0)

  const handleAudioJump = (timestamp: string) => {
    const url = `https://youtu.be/bz5_H13DYoI?t=${timestamp}`
    window.open(url, '_blank')
  }

  return (
    <div className="chapter-viewer">
      {/* Chapter Navigation */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            onClick={() => setActiveChapter(index)}
            className={`px-6 py-3 rounded-lg transition-colors font-medium ${
              activeChapter === index
                ? 'bg-amber-600 text-white shadow-lg'
                : 'bg-earth-100 text-earth-700 hover:bg-earth-200'
            }`}
          >
            {index === 0 ? 'Introduction' : `Chapter ${index}`}
          </button>
        ))}
      </div>

      {/* Active Chapter Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-earth-200">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-earth-200">
          <h2 className="text-2xl md:text-3xl font-bold text-earth-900">
            {chapters[activeChapter].title}
          </h2>
          <button
            onClick={() => handleAudioJump(chapters[activeChapter].audioTimestamp)}
            className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            🎧 Listen
          </button>
        </div>

        {/* Coffee ceremony image for Introduction */}
        {activeChapter === 0 && (
          <div className="mb-6">
            <Image
              src="/images/placeholders/coffee-ceremony.jpg"
              alt="Traditional Ethiopian coffee ceremony"
              width={600}
              height={400}
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
            <p className="text-xs text-earth-600 mt-2 text-center italic">
              Traditional Ethiopian coffee ceremony (placeholder until family photo)
            </p>
          </div>
        )}

        <div className="prose prose-lg max-w-none text-earth-800 leading-relaxed">
          {chapters[activeChapter].content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
