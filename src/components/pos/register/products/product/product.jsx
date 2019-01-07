import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const products = props => {

    const rows = props.products.map((row, index) => {
        return (
            <TableRow key={index}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell >{row.rate}</TableCell>
                <TableCell >{row.quantity}</TableCell>
                <TableCell>{(row.rate * row.quantity)}</TableCell>
            </TableRow>
        )
    })
    return rows
}

export default products;