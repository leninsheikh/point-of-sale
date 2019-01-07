import React from 'react'
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';

import AutoComplete from '../../../ui/inputs/auto-complete.jsx'



const SearchProductForm = (props) => {

    const { handleSubmit } = props;
    const onItemSelect = item => {
        props.onAddToBusket(item);
    }
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={16} justify="center">
                <Grid item xs={11}>
                    <AutoComplete
                        products={props.products}
                        onSelect={onItemSelect}
                    ></AutoComplete>
                </Grid>
            </Grid>
        </form>



    )
};
const mapStateToProps = state => {
    return {
        products: state.customReducer.products
    };
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddToBusket : (newItem) => dispatch({type: 'ADD_TO_BUSKET', item: newItem})
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SearchProductForm)