import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { useRef, useState, useEffect } from "react"

export default function ManagementContent(props) {
    const map = useRef(null);
    const[placemarkCoords, setPlacemarkCoords] = useState([57.619234, 39.899597])
    const mapState = {
        center: [57.619234, 39.899597],
        zoom: 15
    }
    //useEffect(()=>{setClusterPointer(props.massPointer)}, [props.massPointer])

    useEffect(()=>{ 
        if (map.current) map.current.setCenter([props.call.coordinateX, props.call.coordinateY]) 
    }, [props.call])

    const handleDrag = (e) => {
        let placemarkDragCoords = (e.get('target').geometry.getCoordinates())
        console.log(placemarkDragCoords)
        if (map.current) map.current.setCenter(placemarkCoords)
        setPlacemarkCoords(placemarkDragCoords)
    }
    return (
        <div className = "management_content">
            <p>Место для вашей рекламы</p>
            <YMaps>
                <Map state={mapState} instanceRef={map} style = {{display : props.mapDisplay}} className = "map">
                    <Clusterer
                        options={{
                            preset: "islands#invertedVioletClusterIcons",
                            groupByCoordinates: false,
                        }}
                        >
                        {props.massPointer.map((coordinates, index) => (
                            <Placemark key={index} 
                            geometry={coordinates} 
                            options={{
                                preset: 'islands#redDotIcon',
                            }}
                            />
                        ))}
                    </Clusterer>
                    
                </Map>
            </YMaps>
        </div>
    )
}