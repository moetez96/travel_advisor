import React from 'react';
import GoogleMapReact  from 'google-map-react';
import { Pages, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lat: 0, lng: 0}
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyBlH2XFkwAM61vfG6jpQlA6l-xq8tYUb3M' }}
                defaultCenter={coordinates}
                centre={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={() => console.log('change')}
                onChildClick={() => console.log('click')}
            >

            </GoogleMapReact >
        </div>
    )
}

export default Map;