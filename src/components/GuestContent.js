import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useRef, useState } from "react"

export default function Content() {
    const map = useRef(null);
    const[placemarkCoords, setPlacemarkCoords] = useState([57.619234, 39.899597])
    const mapState = {
        center: [57.619234, 39.899597],
        zoom: 15
    }
    const handleDrag = (e) => {
        let placemarkDragCoords = (e.get('target').geometry.getCoordinates())
        console.log(placemarkDragCoords)
        if (map.current) map.current.setCenter(placemarkCoords)
        setPlacemarkCoords(placemarkDragCoords)
    }
    return (
        <div className = "content">
            <p>Место для вашей рекламы</p>
            <YMaps>
                <Map state={mapState} instanceRef={map} className = "map">
                    <Placemark
                        onDragEnd = {handleDrag}
                        // geometry={[57.619234, 39.899597]}
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