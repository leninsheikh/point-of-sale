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
    render () {

        return (
            <Grid container spacing={16} justify="flex-end">
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
        onAddHold : (newHold) => dispatch({type: 'HOLD', hold: newHold})
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(actions);