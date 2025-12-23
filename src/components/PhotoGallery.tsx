'use client'

interface Photo {
  id: string
  src: string
  alt: string
  caption: string
  year?: string
  location?: string
}

// Sample photos - replace with actual photos from your dad's memoir
const samplePhotos: Photo[] = [
  {
    id: '1',
    src: '/images/photos/childhood-1.jpg',
    alt: 'Childhood photo',
    caption: 'Playing in the backyard, age 7',
    year: '1947',
    location: 'Family Home'
  },
  {
    id: '2',
    src: '/images/photos/school-1.jpg',
    alt: 'School photo',
    caption: 'High school graduation day',
    year: '1958',
    location: 'Lincoln High School'
  },
  {
    id: '3',
    src: '/images/photos/wedding-1.jpg',
    alt: 'Wedding photo',
    caption: 'Wedding day with Mom',
    year: '1962',
    location: 'St. Mary\'s Church'
  },
  {
    id: '4',
    src: '/images/photos/family-1.jpg',
    alt: 'Family photo',
    caption: 'First family vacation',
    year: '1968',
    location: 'Lake Tahoe'
  },
  {
    id: '5',
    src: '/images/photos/work-1.jpg',
    alt: 'Work photo',
    caption: 'At the office, proud of the promotion',
    year: '1975',
    location: 'Downtown Office'
  },
  {
    id: '6',
    src: '/images/photos/retirement-1.jpg',
    alt: 'Retirement photo',
    caption: 'Retirement party with colleagues',
    year: '1995',
    location: 'Company Headquarters'
  }
]

interface PhotoGalleryProps {
  limit?: number
}

export default function PhotoGallery({ limit }: PhotoGalleryProps) {
  const photos = limit ? samplePhotos.slice(0, limit) : samplePhotos

  return (
    <div className="photo-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item group cursor-pointer">
          {/* Photo placeholder */}
          <div className="aspect-[4/3] bg-memoir-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="text-center text-memoir-500">
              <div className="w-12 h-12 mx-auto mb-2 bg-memoir-300 rounded-lg flex items-center justify-center">
                <span className="text-xl">📷</span>
              </div>
              <p className="text-xs px-2">
                {photo.alt}
              </p>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="photo-caption opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-medium">{photo.caption}</p>
                <div className="flex justify-between text-xs mt-1">
                  {photo.year && <span>{photo.year}</span>}
                  {photo.location && <span>{photo.location}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}