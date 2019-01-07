import React from 'react';
import SearchForm from './searchProduct/searchProductForm';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import { Grid } from '@material-ui/core';
import Products from './products/products';
import { connect } from 'react-redux';


const onFormSubmit = (data) => {
    console.log(data);
}
const Register = () => {
    return (
        <Paper style={{overflow: "auto"}}>
            <CardContent>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <SearchForm onSubmit={onFormSubmit}></SearchForm>
                    </Grid>
                    <Grid item xs={12}>
                        <Products></Products>
                    </Grid>
                </Grid>
            </CardContent>
        </Paper>
    )
}
const mapStateToProps = state => {
    return {
        busket: state.customReducer.busket
    };
  }
  const mapDispatchToProps = (dispatch) => {
    return{
        onAddUser : (newUser) => dispatch({type: 'ADD_USER', user: newUser})
    }
  };
export default connect(mapStateToProps, mapDispatchToProps)(Register);