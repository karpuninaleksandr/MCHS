import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useRef, useState } from "react"

export default function Content(props) {
    const map = useRef(null);
    const[placemarkCoords, setPlacemarkCoords] = useState([57.619234, 39.899597])
    const mapState = {
        center: placemarkCoords,
        zoom: 15
    }
    const handleDrag = (e) => {
        setPlacemarkCoords(e.get('target').geometry.getCoordinates())
        props.updateCoordX(placemarkCoords[0])
        props.updateCoordY(placemarkCoords[1])
    }
    return (
        <div className = "guest_content">
            <p>Место для вашей рекламы</p>
            <YMaps>
                <Map state={mapState} instanceRef={map} className = "map">
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