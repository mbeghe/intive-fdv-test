import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextField, DatePicker, Select } from 'redux-form-material-ui';
import { MenuItem } from 'material-ui/Menu';

class InputForm extends Component {
    render() {
        return(
            <form>
                <div>
                    <Field 
                        name="name" 
                        component={TextField} 
                        label="Name"
                        fullWidth
                    />
                </div>
                <div>
                    <Field 
                        name="surname" 
                        component={TextField} 
                        label="Surname"
                        fullWidth
                    />
                </div>    
                <div>
                    <Field name="plan" component={Select} placeholder="Select a plan" fullWidth>
                        <MenuItem value="monthly">Monthly</MenuItem>
                        <MenuItem value="yearly">Yearly</MenuItem>
                        <MenuItem value="lifetime">Lifetime</MenuItem>
                    </Field>
                </div>
                <div>
                    <Field 
                        name="birthday" 
                        component={TextField} 
                        label="Birthday"
                        fullWidth
                    />
                </div>    
            </form>
        )
    }
}

InputForm = reduxForm({
    form: 'contact'
    })(InputForm);

export default InputForm;