import React from 'react';
import { TextField } from 'material-ui'

class LnnInput extends React.PureComponent {
    render() {
        const renderField = ({ input, label, type, meta: { touched, error } }) => (
            <div className="row">
                <div className="input-field col s10 offset-s1">
                    <TextField
                        id="standard-password-input"
                        label="Password"

                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    {touched && error && <span style={{ color: 'red' }} className="helper-text" data-error={error}>{error} </span>}
                </div>

            </div>)
            return
    }
}

export default LnnInput;