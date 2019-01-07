import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const defaultButton = (props) => {
    return (
        <Button
        variant={props.variant}
        type={props.type}
        color={props.color}
        fullWidth={props.fullWidth}>
            {props.text}
        </Button>
    )
}

export default defaultButton;