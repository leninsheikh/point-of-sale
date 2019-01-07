import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Grid container spacing={8} justify="center">
            <Grid item xs={12}>
            <TextField
                {...input}
                id="outlined-email-input"
                label={label}
                type={type}
                fullWidth
                variant="outlined"
                error={error !== "" && touched}
                helperText={touched && error ? error : " "}
            />
            </Grid>
        </Grid>



);

export default renderField;