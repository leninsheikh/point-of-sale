import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {

  handleClickOpen = () => {
    this.setState({ open: true });
  };



  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Hold Busket</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You need provide a customer name to hold this Busket
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Customer Name"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button  onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.onConfirmed} color="primary">
              Hold
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
