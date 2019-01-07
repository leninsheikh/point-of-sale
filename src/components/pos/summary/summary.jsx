import React from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Actions from './actions/actions'


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
    },

    input: {
        textAlign: 'right',

    }
});


// const getSubTotal = products => {
//     let sum = 0;
//     products.map( product => {
//         sum += (product.rate * product.quantity);
//     })
//     return sum;
// }

const getPayble = (total, discount = 0) => {
    console.log(total);
    if (discount === 0) return total;
    return total - (discount / 100) * total
}



class summary extends React.Component {

    state = {
        paid: 0,
    }
    onDiscountChange = (event) => {
        let discount = event.target.value
        console.log(discount);
        this.props.onChangeDiscount(discount)
    }

    onPaidChange = (event) => {
        this.setState({ paid: event.target.value })
    }
    render() {
        const { classes } = this.props;
        return (
            <Card>
                <CardContent>
                    <h2 style={{ margin: '0px', fontWeight: 'normal' }}>Summary</h2>
                    <Grid container >
                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <p style={{ marginTop: "10px" }}>Subtotal ($)</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        id="outlined-email-input"
                                        type="number"
                                        value={this.props.busket.totalPrice}
                                        fullWidth
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <p style={{ marginTop: "10px" }}>Discount (%)</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        id="outlined-email-input"
                                        type="number"
                                        value={this.props.busket.discount}
                                        fullWidth
                                        onChange={this.onDiscountChange}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <p style={{ marginTop: "10px" }}>Payable ($)</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        id="outlined-email-input"
                                        type="number"
                                        value={this.props.payable}
                                        fullWidth
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <p style={{ marginTop: "10px" }}>Paid ($)</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        id="outlined-email-input"
                                        type="number"
                                        value={this.state.paid}
                                        fullWidth
                                        onChange={this.onPaidChange}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <p style={{ marginTop: "10px" }}>Retrun ($)</p>
                                </Grid>
                                <Grid item xs={6}>
                                    <Input
                                        id="outlined-email-input"
                                        type="number"
                                        value={
                                            this.state.paid - this.props.payable
                                        }
                                        fullWidth
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </CardContent>
                <CardActions>
                <Actions></Actions>
                </CardActions>
            </Card>

        );
    }

}

const mapStateToProps = state => {
    let busket = state.customReducer.busket;
    return {
        busket: busket,
        payable: getPayble(busket.totalPrice, busket.discount),
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onChangeDiscount: (discount) => dispatch({ type: 'UPDATE_DISCOUNT', discount: discount })
    }
};
export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps)
)(summary);