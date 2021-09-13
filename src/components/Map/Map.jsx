import React from 'react';
import GoogleMapReact  from 'google-map-react';
import { Pages, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{ key: 'AIzaSyBlH2XFkwAM61vfG6jpQlA6l-xq8tYUb3M' }}
                defaultCenter={coordinates}
                centre={coordinates}
                defaultZoom={15}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={() => console.log('click')}
            >
            </GoogleMapReact >
        </div>
    )
}

export default Map;