import { YMaps, Map, Placemark } from 'react-yandex-maps';

 
export const YandexMap = () => {
    return (
    <YMaps>
      <Map
        defaultState={{
          center: [53.6955052246836, 23.936930886174675], 
          zoom: 15,
        }}
        width="100%"
        height="400px"
      >
        <Placemark geometry={[53.6955052246836, 23.936930886174675]} />
      </Map>
    </YMaps>
      )
}
 