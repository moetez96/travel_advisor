import React, {useEffect, useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import Header from './components/Header/Header'
import Map from './components/Map/Map'
import List from './components/List/List'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'

import { getPlacesData } from "./api";

const App = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })
    },[]);

    useEffect(() => {
        setIsLoading(true);
        getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
            setPlaces(data);
            setFilteredPlaces([]);
            setIsLoading(false);
        })
    },[coordinates, bounds, type]);

    useEffect(() => {
        setFilteredPlaces(places.filter((place) => place.rating > rating));
    },[rating])

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List 
                        isLoading={isLoading}
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        childClicked={childClicked} 
                        rating={rating}
                        setRating={setRating}
                        type={type}
                        setType={setType}
                        />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={filteredPlaces.length ? filteredPlaces : places} 
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default App;