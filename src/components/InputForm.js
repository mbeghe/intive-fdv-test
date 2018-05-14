import React, { Component } from 'react';

import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, Select } from 'redux-form-material-ui';
import { connect } from 'react-redux';

import  { MenuItem }  from 'material-ui/Menu';
import { Button, Paper } from 'material-ui';
import  Grid  from 'material-ui/Grid';
import { getCountries } from '../redux/actions';
import { withStyles } from 'material-ui';
import { InputLabel } from 'material-ui/Input';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
    form: {
        margin: theme.spacing.unit*1.5
    },
    progress: {
        margin: theme.spacing.unit
    }
  });

class InputForm extends Component {
    componentDidMount(){
        this.props.dispatch(getCountries());
    }

    render() {
        const { classes, handleSubmit, submitting } = this.props;

        return(
            <Paper>            
                <form onSubmit={handleSubmit} className={ classes.form }>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                            <Field 
                                name="name" 
                                component={TextField} 
                                label="Name"
                                fullWidth
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                name="surname" 
                                component={TextField} 
                                label="Surname"
                                fullWidth
                                autoComplete='off'
                            />
                        </Grid>    
                        <Grid item xs={12}>
                        <InputLabel htmlFor="country">Select country</InputLabel>
                        {
                            this.props.countriesStore.countries ?
                            
                            <Field 
                                name="country" 
                                component={Select} 
                                fullWidth
                                disabled={!this.props.countriesStore.countries}
                            >
                            
                                {
                                    
                                    this.props.countriesStore.countries.map((country, ix) =>{
                                        return (
                                            <MenuItem key={ix} value={country.name}>{country.name}</MenuItem>
                                        )
                                    })
                                }
                            </Field>
                            :
                            <CircularProgress className={classes.progress} />
                        }
                        </Grid>
                        <Grid item xs={12}>
                            <Field 
                                name="birthday" 
                                component={TextField} 
                                fullWidth
                                autoComplete='off'
                                type='date'
                                label="Birthday"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} align='right'>
                            <Button 
                                variant="raised"
                                type="submit"
                                disabled={submitting}
                                color="primary"
                            >
                                Save
                            </Button>    
                        </Grid>
                    </Grid>
                </form>
            </Paper>
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
       withStyles(styles)
)(InputForm);