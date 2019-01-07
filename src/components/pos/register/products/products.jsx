import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Product from './product/product'


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: 'auto',
  },
  table: {
    minWidth: 70,
  },

  cell: {
    padding: 1
  }
});

const Products = (props) => {
  const { classes } = props;

  return (
    <Table className={classes.table} >
      <TableHead>
        <TableRow className={classes.cell}>
          <TableCell >Name</TableCell>
          <TableCell >Rate</TableCell>
          <TableCell >Quantity</TableCell>
          <TableCell>Price ($)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <Product products={props.products} ></Product>
      </TableBody>
    </Table>
  )
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
  return {
    products: state.customReducer.busket.products
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Products)
