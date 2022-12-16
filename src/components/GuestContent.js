import { YMaps, Map, Placemark, GeolocationControl } from '@pbe/react-yandex-maps';
import { useRef, useState, useEffect } from "react"

export default function Content(props) {
    const map = useRef(null);
    const[placemarkCoords, setPlacemarkCoords] = useState([57.619234, 39.899597])
    const[ymapsKey, setYmaps] = useState()
    useEffect(()=>{
        props.updateCoordX(placemarkCoords[0])
        props.updateCoordY(placemarkCoords[1])
    }, [placemarkCoords])
    const mapState = {
        center: placemarkCoords,
        zoom: 15
    }
    const handleDrag = (e) => {
        setPlacemarkCoords(e.get('target').geometry.getCoordinates())

       // console.log(Geocoder.addressToGeo({address: 'Москва, ул. Льва Толстого, 16'})); onLoad={(ymaps) => setYmaps(ymaps)}
    }
    useEffect(()=>{ geocode()}, [ymapsKey])

    const geocode = () => {
        
        if (ymapsKey != undefined && ymapsKey.geocode  != undefined) {
            console.log(ymapsKey)
        ymapsKey.geocode('Moscow')
          .then(result => console.log({ coordinates: result.geoObjects.get(0).geometry.getCoordinates() }))
        }
      }
    return (
        <div className = "guest_content">
            <p>Место для вашей рекламы</p>
            <YMaps>
                <Map state={mapState}
                 instanceRef={map}
                modules= {["geolocation", "geocode"]} className = "map">
                    <GeolocationControl options={{ float: "left" }} />
                    <Placemark
                        onDragEnd = {handleDrag}
                        geometry={placemarkCoords}
                        options={{
                            preset: 'islands#redDotIcon',
                            draggable: true
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    )
}