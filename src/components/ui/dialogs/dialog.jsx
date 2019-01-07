import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

class FormDialog extends React.Component {
  onNameChange = event => {
    this.props.nameChange(event.target.value)
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
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
              value={this.props.name}
              onChange={this.onNameChange}
            />
          </DialogContent>
          <DialogActions>
            <Button  onClick={this.props.onClose} color="primary">
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

const mapStateToProps = state => {
  return {
      name: state.customReducer.busket.name
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
      nameChange: name => dispatch({ type: 'NAME_UPDATE', name: name })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);