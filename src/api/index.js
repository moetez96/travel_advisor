import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async(sw, ne) => {
    try{
        const {data: {data}} = await axios.get(URL,{
          params:{
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': 'c0604174a1msh67f56e7dd2542ffp1500efjsn58fbcafc7feb'
          }
       });
        return data;
    } catch (error) {
        console.log(error);
    }
}