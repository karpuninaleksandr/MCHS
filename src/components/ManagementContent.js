import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useRef, useState, useEffect } from "react"

export default function ManagementContent(props) {
    const map = useRef(null);
    const[placemarkCoords, setPlacemarkCoords] = useState([57.631691, 39.885818])
    const mapState = {
        center: [57.631691, 39.885818],
        zoom: 15
    }

    useEffect(()=>{ 
        if (map.current) map.current.setCenter([props.call.coordinateX, props.call.coordinateY]) 
    }, [props.call])

    return (
        <div className = "management_content">
            <p>Место для вашей рекламы</p>
            <YMaps>
                <Map state={mapState} instanceRef={map} style = {{display : props.mapDisplay}} className = "map">

                        {props.massPointer.map((coordinates, index) => (
                            <Placemark key={index} 
                            geometry={coordinates} 
                            options={{
                                preset: 'islands#redDotIcon',
                            }}
                            />
                        ))}
                   
                    
                </Map>
            </YMaps>
        </div>
    )
}