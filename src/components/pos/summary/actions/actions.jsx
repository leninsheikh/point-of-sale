import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import DefaultButton from '../../../ui/buttons/defaultButton';
import Dialog from '../../../ui/dialogs/dialog';


class actions extends React.Component {
    state = {
        open : false
    }


    onHold = () => {

        if(this.props.busket.length < 1) {
            console.log(this.props.busket.length);
            return;
        }
        const newHold = {
            id: new Date(),
            name: 'mamama',
            products: this.props.busket
        }
        this.props.onAddHold(newHold);
    }
    open = () => {
        this.setState({open: true})
        console.log(this.state);
    }

    onDone = () => {
        const item = {
            id: new Date(),
            ...this.props.busket
        }
        this.props.onDone(item)

        console.log(item)
    }
    render () {

        return (
            <Grid container spacing={16} justify="center">
                <Grid item xs={4}>
                    <div onClick={this.open}>
                        <DefaultButton icon="save"
                            variant="contained"
                            type="submit"
                            text="hold"
                            color="primary"
                            fullWidth={true}
                        >
                        </DefaultButton>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div onClick={this.onDone}>
                        <DefaultButton icon="save"
                            variant="contained"
                            type="submit"
                            text="Done"
                            color="primary"
                            fullWidth={true}
                        >
                        </DefaultButton>
                    </div>
                </Grid>
                <Dialog open={this.state.open}
                    onConfirmed={this.onHold}
                ></Dialog>
            </Grid>
        )
    }

}


const mapStateToProps = state => {
    return {
        busket: state.customReducer.busket
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddHold : (newHold) => dispatch({type: 'HOLD', hold: newHold}),
        onDone: (item) => dispatch({type: 'PAYMENT_DONE', item: item})
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(actions);