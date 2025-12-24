'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'

const timelineEvents = [
  {
    date: '1959',
    title: 'Ninth Grade Days and the Jima Encounter',
    description: 'Completed eighth grade with high results, assigned to Jima Agricultural School but left due to homesickness - a pivotal life decision',
    icon: '🏫',
    color: '#92400e',
    audioTimestamp: '0',
    image: '/images/placeholders/debre-markos-town.jpg',
    imageCaption: 'Historical view of Debre Markos (placeholder until family photo)'
  },
  {
    date: '1960-1962',
    title: 'Harar Teacher\'s Training College',
    description: 'Enrolled at Harar Teachers Training School after being selected by Canadian deputy director Mr. Bodwin',
    icon: '🎓',
    color: '#059669',
    audioTimestamp: '300',
    image: '/images/placeholders/coffee-ceremony.jpg',
    imageCaption: 'Traditional Ethiopian coffee ceremony (placeholder until family photo)'
  },
  {
    date: '1963-1965',
    title: 'Teaching in Arsi Province',
    description: 'Started teaching in Kofele and Huruta - discovered biological mother by pure chance in Kofele',
    icon: '👨🏫',
    color: '#dc2626',
    audioTimestamp: '600',
    image: '/images/placeholders/kofele-highlands.jpg',
    imageCaption: 'Kofele highlands landscape (placeholder until family photo)'
  },
  {
    date: '1966-1971',
    title: 'Addis Ababa University',
    description: 'Studied Economics at Addis Ababa University, graduated with first degree',
    icon: '📚',
    color: '#7c3aed',
    audioTimestamp: '900',
    image: '/images/placeholders/addis-ababa-university-1960s.jpg',
    imageCaption: 'Addis Ababa University campus, 1960s era (placeholder until family photo)'
  },
  {
    date: '1971-1990',
    title: 'Government Service',
    description: 'Planning Commission to Minister - served in various high-level government positions including Minister of Foreign Economic Relations',
    icon: '🏛️',
    color: '#1d4ed8',
    audioTimestamp: '1200',
    image: '/images/placeholders/asmara-1970s.jpg',
    imageCaption: 'Asmara street view, 1970s-80s era (placeholder until family photo)'
  },
  {
    date: '1990-2006',
    title: 'African Development Bank',
    description: 'Senior Expert at African Development Bank in Abidjan, Côte d\'Ivoire - international career and eventual retirement',
    icon: '🌍',
    color: '#059669',
    audioTimestamp: '1500',
    image: '/images/placeholders/abidjan-1990s.jpg',
    imageCaption: 'Abidjan skyline, 1990s era (placeholder until family photo)'
  },
  {
    date: '2006-Present',
    title: 'Retirement and Family Discovery',
    description: 'Returned to Ethiopia, discovered and reunited with mother\'s relatives in Guguma and internationally',
    icon: '❤️',
    color: '#dc2626',
    audioTimestamp: '1800',
    image: '/images/placeholders/gojjam-highlands.jpg',
    imageCaption: 'Ethiopian Highlands - full circle to Gojjam roots (placeholder until family photo)'
  }
]

export default function MemoirTimeline() {
  const handleAudioJump = (timestamp: string) => {
    const url = `https://youtu.be/bz5_H13DYoI?t=${timestamp}`
    window.open(url, '_blank')
  }

  return (
    <div className="memoir-timeline">
      <VerticalTimeline lineColor="#e0e0e0">
        {timelineEvents.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ 
              background: 'white', 
              color: '#1a0f0a',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              border: `3px solid ${event.color}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${event.color}` }}
            date={event.date}
            iconStyle={{ 
              background: event.color, 
              color: '#fff',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            icon={<span>{event.icon}</span>}
          >
            <div className="timeline-content">
              <h3 className="vertical-timeline-element-title text-xl font-bold text-earth-900 mb-3">
                {event.title}
              </h3>
              
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {/* Event Image */}
                <div className="md:w-1/3">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-xs text-earth-600 mt-1 italic">{event.imageCaption}</p>
                </div>
                
                {/* Event Description */}
                <div className="md:w-2/3">
                  <p className="text-earth-700 leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <button
                    onClick={() => handleAudioJump(event.audioTimestamp)}
                    className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm"
                  >
                    🎧 Listen to this chapter
                  </button>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
