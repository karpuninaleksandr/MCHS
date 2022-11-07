import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Content() {
    const defaultState = {
        center: [57.619234, 39.899597],
        zoom: 15,
      };
    return (
        <div className = "content">
        <YMaps>
          <Map defaultState={defaultState}>
            <Placemark geometry={[57.619234, 39.899597]} />
          </Map>
        </YMaps>
        </div>
      );

}