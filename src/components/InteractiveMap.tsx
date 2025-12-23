'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const locations = [
  {
    name: 'Debre Markos',
    lat: 10.35,
    lng: 37.73,
    description: 'Gojjam Province - Upbringing and homesickness',
    details: 'Historic NW Ethiopian province where Aklilu grew up in the Wuseta neighborhood. The source of his deep homesickness when away.',
    color: '#92400e'
  },
  {
    name: 'Jima',
    lat: 7.68,
    lng: 36.83,
    description: 'Agricultural School - The pivotal decision',
    details: 'Famous agricultural school where homesickness overwhelmed young Aklilu, leading to his life-changing decision to return home.',
    color: '#dc2626'
  },
  {
    name: 'Harar',
    lat: 9.31,
    lng: 42.12,
    description: 'Teacher Training College',
    details: 'Where Aklilu completed his teacher training under Canadian deputy director Mr. Bodwin, preparing for his teaching career.',
    color: '#059669'
  },
  {
    name: 'Kofele/Guguma',
    lat: 7.0,
    lng: 38.8,
    description: 'Arsi Province - Mother reunion miracle',
    details: 'The miraculous location where Aklilu discovered his biological mother by pure chance while teaching. Later, the site of family reunification.',
    color: '#7c3aed'
  },
  {
    name: 'Addis Ababa',
    lat: 9.03,
    lng: 38.74,
    description: 'University and Government Service',
    details: 'Ethiopia\'s capital where Aklilu studied Economics and later served in high government positions including as Minister.',
    color: '#1d4ed8'
  },
  {
    name: 'Asmara',
    lat: 15.33,
    lng: 38.93,
    description: 'Red Star Campaign headquarters',
    details: 'Where Aklilu served as Head of Economic & Social Reconstruction Department during the Red Star Campaign.',
    color: '#ea580c'
  },
  {
    name: 'Abidjan',
    lat: 5.36,
    lng: -4.03,
    description: 'African Development Bank - Exile and career',
    details: 'Côte d\'Ivoire - Where Aklilu spent 15 years as Senior Expert at the African Development Bank, building an international career.',
    color: '#059669'
  }
]

export default function InteractiveMap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="h-full bg-earth-100 animate-pulse flex items-center justify-center">Loading map...</div>
  }

  return (
    <MapContainer
      center={[9, 38]}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
      className="rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup className="custom-popup">
            <div className="p-2">
              <h3 className="font-bold text-earth-900 mb-2">{location.name}</h3>
              <p className="text-sm text-earth-700 mb-2">{location.description}</p>
              <div className="bg-earth-50 p-2 rounded text-xs text-earth-600">
                <strong>ℹ️ Context:</strong> {location.details}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
