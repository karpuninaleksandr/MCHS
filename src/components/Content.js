import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useRef, useState } from "react"

export default function Content() {
    const map = useRef(null);
    const[placemarkCoords, setPlacemarkCoords] = useState([0, 0])
    const mapState = {
      center: [57.619234, 39.899597],
      zoom: 15
    };
    const handleDrag = (e) => {
      const placemarkDragCoords = (e.get('target').geometry.getCoordinates());
      console.log(placemarkDragCoords);
      if (map.current) {
        map.current.setCenter(placemarkDragCoords);
      }
     /* setPlacemarkCoords(placemarkDragCoords)
      console.log(placemarkCoords);*/
    };
    return (
        <div className = "content">
            <p>Место для вашей рекламы</p>
                <YMaps>
                  <Map state={mapState} instanceRef={map} className = "map">
                    <Placemark
                        onDragEnd = {handleDrag}
                        geometry={[57.619234, 39.899597]}
                        options={{
                          preset: 'islands#redDotIcon',
                          draggable: true
                        }}/>
                  </Map>
                </YMaps>
        </div>
      );

}