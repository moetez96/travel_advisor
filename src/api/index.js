import axios from "axios";

export const getPlacesData = async(type, sw, ne) => {
    try{
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
          params:{
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '6b74493b80mshbe94429b51f2b56p1448adjsna5fdb877da33'
          }
       } );
        return data;
    } catch (error) {
        console.log(error);
    }
}