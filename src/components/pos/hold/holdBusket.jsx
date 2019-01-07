import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import { connect } from 'react-redux';

const holdBusket = props => {
    const onBusketSelect = (e, busket) => {
        console.log('hold busket', busket);
        props.onLoadBusket(busket)

    }
    const buskets = props.buskets.map(busket => {
        return (
            <div key={busket.id} onClick={(e) => onBusketSelect(e, busket.products)}>
                <CardHeader
                    style={{ cursor: 'pointer' }}
                    avatar={
                        <Avatar aria-label="Recipe">
                            R
                </Avatar>
                    }
                    title={busket.name}
                    subheader={'Total products: ' + busket.products.length}>
                </CardHeader>
            </div>

        )
    })
    return (
        <Card>
            <CardContent>
                {buskets}
            </CardContent>
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