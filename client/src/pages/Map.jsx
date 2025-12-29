import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

const MapPage = () => {
  const mapRef = useRef(null)
  const mapInstance = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!window.google) return
    if (mapInstance.current) return

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        mapInstance.current = new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 15,
        })

        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: mapInstance.current,
          title: "You are here",
        })
      },
      () => {
        // fallback location (Delhi)
        mapInstance.current = new window.google.maps.Map(mapRef.current, {
          center: { lat: 28.6139, lng: 77.209 },
          zoom: 13,
        })
      }
    )
  }, [])

  return (
    <div className="relative h-screen w-screen">
      {/* Map */}
      <div ref={mapRef} className="h-screen w-full" />

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="absolute top-4 left-4 z-10 bg-white px-4 py-2 rounded shadow"
      >
        ← Back
      </button>
    </div>
  )
}

export default MapPage
