import React from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import DefaultButton from '../../../ui/buttons/defaultButton';
import Dialog from '../../../ui/dialogs/dialog';


class actions extends React.Component {
    state = {
        open: false,
        name: ''
    }


    onHold = () => {


        const newHold = {
            id: new Date(),
            ...this.props.busket
        }
        this.props.onAddHold(newHold);
        this.props.onOrderComplete();
        this.handleClose();
    }

    open = () => {
        if (this.props.busket.products.length < 1) {
            return;
        }
        this.setState({...this.state, open: true })
    }

    handleClose = () => {
        this.setState({...this.state, open: false });
    };

    onDone = () => {
        if(this.props.busket.products.length === 0) return;
        const item = {
            id: new Date(),
            ...this.props.busket
        }
        this.props.onDone(item)
        this.props.onOrderComplete()
    }

    onInputChange = event => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
             name: event.target.value
        })
    }
    render() {

        return (
            <Grid container spacing={32} justify="center">
                <Grid item xs={5}>
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
                <Grid item xs={5}>
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
                    onClose={this.handleClose}
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
    return {
        onAddHold: (newHold) => dispatch({ type: 'HOLD', hold: newHold }),
        onDone: (item) => dispatch({ type: 'PAYMENT_DONE', item: item })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(actions);