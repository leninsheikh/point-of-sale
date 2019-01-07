import React from 'react';
import QuickView from '../components/dashboard/quick-view'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import { totalSell } from '../services/DashboardService'


const dashboard = props => {
    return (
        <Grid container spacing={32} justify="center">
            <Grid item xs={5}>
                <QuickView icon="doller"
                    title="Total sale ($)"
                    value={totalSell(props.orders)}
                >

                </QuickView>
            </Grid>
            <Grid item xs={5}>
                <QuickView icon="order"
                    title="Completed order"
                    value={props.orders.length}
                >
                </QuickView>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    console.log('dashboard', state.customReducer.completedOrders);
    return {
        orders: state.customReducer.completedOrders
    };
}

export default connect(mapStateToProps)(dashboard);