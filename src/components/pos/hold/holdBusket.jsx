import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';

const holdBusket = props => {
    const onBusketSelect = (e, busket) => {
        console.log('hold busket', busket);
        props.onLoadBusket(busket)

    }
    const buskets = props.buskets.map(busket => {
        return (
            <div key={busket.id} onClick={(e) => onBusketSelect(e, busket)}>
                <Grid container spacing={16} justify="center">
                    <Grid item xs={8}>
                        <CardHeader
                            style={{ cursor: 'pointer' }}
                            subheader={busket.name}>
                        </CardHeader>
                    </Grid>
                    <Grid item xs={2}>
                        <Button size="small" color="secondary" aria-label="Add">
                            <NavigationIcon />
                        </Button>
                    </Grid>
                </Grid>
            </div>

        )
    })
    return (
        <Card style={{ marginTop: '10px' }}>
            <h3 style={{ margin: '7px 0px 0px 17px', fontWeight: 'normal' }}>
                Hold Busket
            </h3>
            {buskets}

        </Card>


    )
}

const mapStateToProps = state => {
    return {
        buskets: state.customReducer.holdBuskets
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadBusket: (busket) => dispatch({ type: 'LOAD_BUSKET', busket: busket })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(holdBusket);