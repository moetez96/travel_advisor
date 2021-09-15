import React, {useState, useEffect, createRef} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles'

const List = ({ places, childClicked, isLoading, type, rating, setType, setRating }) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        if(places !== undefined){
            setElRefs(elRefs =>  Array(places.length).fill().map((_, i) => elRefs[i] || createRef()))
            console.log(elRefs)
        }
    },[places])

    return (
        <div className={classes.container}>
            <Typography variant="h4"> Restaurants, Hotels & Attractions Around you</Typography>
            {isLoading ? (<div className={classes.loading}>
                <CircularProgress size="5rem" />
            </div>) : (
                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={(e) => setType(e.target.value)}>
                            <MenuItem value="restaurants">
                                Restaurants
                            </MenuItem>
                            <MenuItem value="hotels">
                                Hotels
                            </MenuItem>
                            <MenuItem value="attractions">
                                Attractions
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Rating</InputLabel>
                        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <MenuItem value={0}>
                                All
                            </MenuItem>
                            <MenuItem value={3}>
                                Above 3
                            </MenuItem>
                            <MenuItem value={4}>
                                Above 4
                            </MenuItem>
                            <MenuItem value={4.5}>
                                Above 4.5
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Grid container spacing={3} className={classes.list}>
                        {places != null && places != undefined ? places.map((place, i) => (
                            <Grid item key={i} xs={12} ref={elRefs[i]}>
                                <PlaceDetails
                                    place={place}
                                    selected={Number(childClicked) === i}
                                    refProps={elRefs[i]}
                                />
                            </Grid>
                        )) : (<div></div>)}
                    </Grid>
                </div>
            )}
        </div>
    )
}

export default List;
