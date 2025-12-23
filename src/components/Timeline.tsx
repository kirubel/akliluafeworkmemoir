'use client'

interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  category: 'personal' | 'career' | 'family' | 'achievement'
  icon?: string
}

// Aklilu Afework's actual life timeline from his memoir
const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '1959',
    title: 'Jima Agricultural School Decision',
    description: 'Completed eighth grade with high results, assigned to Jima Agricultural School but left due to homesickness - a pivotal life decision',
    category: 'personal',
    icon: '🏫'
  },
  {
    id: '2',
    year: '1960-1962',
    title: 'Harar Teachers Training College',
    description: 'Enrolled at Harar Teachers Training School after being selected by Canadian deputy director Mr. Bodwin',
    category: 'achievement',
    icon: '🎓'
  },
  {
    id: '3',
    year: '1963-1964',
    title: 'Teaching Career Begins',
    description: 'Started teaching in Arsi Province (Kofele and Huruta) - discovered biological mother by pure chance in Kofele',
    category: 'career',
    icon: '👨‍🏫'
  },
  {
    id: '4',
    year: '1966',
    title: 'University Education',
    description: 'Began studies at Addis Ababa University as first year student',
    category: 'achievement',
    icon: '📚'
  },
  {
    id: '5',
    year: '1971',
    title: 'Economics Degree',
    description: 'Graduated from university with first degree in Economics',
    category: 'achievement',
    icon: '🎓'
  },
  {
    id: '6',
    year: '1972-1973',
    title: 'Williams College',
    description: 'Studied at Williams College in the United States, earned Master\'s degree',
    category: 'achievement',
    icon: '🌍'
  },
  {
    id: '7',
    year: '1976',
    title: 'General Manager',
    description: 'Appointed General Manager of Gojjam Agricultural Development Corporation',
    category: 'career',
    icon: '💼'
  },
  {
    id: '8',
    year: '1986-1990',
    title: 'Minister Appointments',
    description: 'Served as Minister of Foreign Economic Relations (1986-1990) and Minister of Development Planning (1990)',
    category: 'career',
    icon: '🏛️'
  },
  {
    id: '9',
    year: '1991-2006',
    title: 'African Development Bank',
    description: 'Senior Expert at African Development Bank in Abidjan, Côte d\'Ivoire and later Tunis, Tunisia',
    category: 'career',
    icon: '🌍'
  },
  {
    id: '10',
    year: '2006',
    title: 'Retirement & Return',
    description: 'Retired from African Development Bank and returned to Ethiopia with wife Weizero Tarik Meket',
    category: 'personal',
    icon: '🏠'
  },
  {
    id: '11',
    year: '2010',
    title: 'Family Reunification',
    description: 'Discovered and reunited with mother\'s relatives in Guguma, Awassa, and internationally - completing the family circle',
    category: 'family',
    icon: '❤️'
  }
]

const categoryColors = {
  personal: 'bg-memoir-500',
  career: 'bg-blue-500',
  family: 'bg-red-500',
  achievement: 'bg-vintage-500'
}

interface TimelineProps {
  limit?: number
}

export default function Timeline({ limit }: TimelineProps) {
  const events = limit ? timelineEvents.slice(0, limit) : timelineEvents

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={event.id} className="timeline-item">
            <div className="flex items-start">
              {/* Timeline dot */}
              <div className="flex-shrink-0 relative">
                <div className={`w-4 h-4 rounded-full ${categoryColors[event.category]} border-4 border-white shadow-lg`}></div>
                {index < events.length - 1 && (
                  <div className="absolute top-4 left-2 w-0.5 h-16 bg-memoir-200"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="memoir-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-vintage-600">
                      {event.year}
                    </span>
                    {event.icon && (
                      <span className="text-2xl">{event.icon}</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-memoir-900 mb-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-memoir-600 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="mt-3">
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full text-white ${categoryColors[event.category]}`}>
                      {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}