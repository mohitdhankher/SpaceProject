/**
 *
 * SpacCenterPage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import SpacCard from "../SpacCard";
import Grid from "@material-ui/core/Grid";

function SpacCenterPage(props) {
    const data = props.data

    if(data) {
        return (
            <Grid container>
                {data.map(item => (

                    <SpacCard item={item} key={item}/>

                    // <li key={item}>
                    //     <a href={item.url}>{item.title}</a>
                    // </li>
                ))}
            </Grid>
        );
    }
}

SpacCenterPage.propTypes = {};

export default memo(SpacCenterPage);
