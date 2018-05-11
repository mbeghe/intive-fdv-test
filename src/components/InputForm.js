import React, { Component } from 'react';

import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, Select } from 'redux-form-material-ui';
import { connect } from 'react-redux';

import { MenuItem } from 'material-ui/Menu';
import { Button } from 'material-ui';
import  Grid  from 'material-ui/Grid';
import { getCountries } from '../redux/actions';

class InputForm extends Component {
    componentDidMount(){
        this.props.dispatch(getCountries());
    }

    render() {
        const { handleSubmit, submitting } = this.props;

        return(
            <form onSubmit={handleSubmit}>

                <div>
                    <Field 
                        name="name" 
                        component={TextField} 
                        label="Name"
                        fullWidth
                        autoComplete='off'
                    />
                </div>
                <div>
                    <Field 
                        name="surname" 
                        component={TextField} 
                        label="Surname"
                        fullWidth
                        autoComplete='off'
                    />
                </div>    
                <div>
                    <Field 
                        name="country" 
                        component={Select} 
                        label="Select country" 
                        fullWidth
                    >
                    
                        {
                            
                            this.props.countriesStore.countries.map((country, ix) =>{
                                return (
                                )
                            })
                        }
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
                <div>
                    <Button 
                        variant="raised"
                        type="submit"
                        disabled={submitting}
                        color="primary"
                    >
                        Save
                    </Button>    
                </div>    
            </form>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default compose(
    reduxForm({
        form: 'contact'
        }),
       connect(mapStateToProps), 
)(InputForm);