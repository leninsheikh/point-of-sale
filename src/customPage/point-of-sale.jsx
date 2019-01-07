import React from 'react';
import { Grid } from '@material-ui/core';

import Register from '../components/pos/register/register';
// import HoldBusket from '../components/pos/hold/holdBusket';
import Summery from '../components/pos/summary/summary';

const pos = () => {
    return (
        <div>
            <Grid container spacing={16} >
                <Grid item xs={12}  lg={8}>
                    <Register></Register>
                </Grid>
                <Grid item xs={12}  lg={4}>
                   {/* <HoldBusket></HoldBusket> */}
                    <Summery></Summery>
                </Grid>
            </Grid>
        </div>
    )
}

export default pos;