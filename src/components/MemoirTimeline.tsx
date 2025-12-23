'use client'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

const timelineEvents = [
  {
    date: '1959',
    title: 'Ninth Grade Days and the Jima Encounter',
    description: 'Completed eighth grade with high results, assigned to Jima Agricultural School but left due to homesickness - a pivotal life decision',
    icon: '🏫',
    color: '#92400e',
    audioTimestamp: '0'
  },
  {
    date: '1960-1962',
    title: 'Harar Teacher\'s Training College',
    description: 'Enrolled at Harar Teachers Training School after being selected by Canadian deputy director Mr. Bodwin',
    icon: '🎓',
    color: '#059669',
    audioTimestamp: '300'
  },
  {
    date: '1963-1965',
    title: 'Teaching in Arsi Province',
    description: 'Started teaching in Kofele and Huruta - discovered biological mother by pure chance in Kofele',
    icon: '👨‍🏫',
    color: '#dc2626',
    audioTimestamp: '600'
  },
  {
    date: '1966-1971',
    title: 'Addis Ababa University',
    description: 'Studied Economics at Addis Ababa University, graduated with first degree',
    icon: '📚',
    color: '#7c3aed',
    audioTimestamp: '900'
  },
  {
    date: '1971-1990',
    title: 'Government Service',
    description: 'Planning Commission to Minister - served in various high-level government positions including Minister of Foreign Economic Relations',
    icon: '🏛️',
    color: '#1d4ed8',
    audioTimestamp: '1200'
  },
  {
    date: '1990-2006',
    title: 'African Development Bank',
    description: 'Senior Expert at African Development Bank in Abidjan, Côte d\'Ivoire - international career and eventual retirement',
    icon: '🌍',
    color: '#059669',
    audioTimestamp: '1500'
  },
  {
    date: '2006-Present',
    title: 'Retirement and Family Discovery',
    description: 'Returned to Ethiopia, discovered and reunited with mother\'s relatives in Guguma and internationally',
    icon: '❤️',
    color: '#dc2626',
    audioTimestamp: '1800'
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
            <h3 className="vertical-timeline-element-title text-xl font-bold text-earth-900 mb-2">
              {event.title}
            </h3>
            <p className="text-earth-700 leading-relaxed mb-4">
              {event.description}
            </p>
            <button
              onClick={() => handleAudioJump(event.audioTimestamp)}
              className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-sm"
            >
              🎧 Listen to this chapter
            </button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}
