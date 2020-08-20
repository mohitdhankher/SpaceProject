/**
 *
 * SpacCard
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import './style.css';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    fullHeightCard: {
        height: "100%",
       
	},
});
function SpacCard({item:{mission_name,flight_number,launch_year,launch_success,mission_id,rocket,links}}) {

       let  land_success = rocket.first_stage.cores[0].land_success
       let url = links.mission_patch
   debugger;
    const classes = useStyles();
  return (
    <React.Fragment>
        {/*<Grid container>*/}
            <Grid sm={12} md={3} lg={3} className="col-sm-12 col" >
        <Card className={classes.fullHeightCard}  >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    square
                    src={url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {mission_name} # {flight_number}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Mission Id:
                       <ul>
                        { mission_id.map(function(name, index){
                            return <li key={ index }>{name}</li>;
                        })}
                    </ul>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Launch Year:  {launch_year}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Successful Launch:  {`${launch_success}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Successful Landing:  {`${land_success}`}
                    </Typography>
                    {/*<Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*    Successful Landing:*/}
                    {/*</Typography>*/}
                </CardContent>
            </CardActionArea>
            {/*<CardActions>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Share*/}
            {/*    </Button>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Learn More*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>
            </Grid>
        {/*</Grid>*/}
    </React.Fragment>
  );
}

SpacCard.propTypes = {};

export default memo(SpacCard);
