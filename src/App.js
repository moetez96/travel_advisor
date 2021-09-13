import React, {useEffect, useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

import { getPlacesData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({ne: {lat: 37.784104136989654, lng: -122.40632682000732}, sw: {lat: 37.765752724213485, lng: -122.43250517999267}});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    },[]);

    useEffect(() => {
        console.log(coordinates, bounds)
        getPlacesData(bounds.sw, bounds.ne).then((data) => {
            setPlaces(data);
        })
    },[coordinates, bounds]);

    console.log(places);


    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;