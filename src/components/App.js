import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addRecord } from '../redux/actions';

import InputForm from './InputForm';
import RecordList from './RecordList';

import  Grid  from 'material-ui/Grid';
class App extends Component {
    
    handleForm = values => {
        const contract = {
            name: values.name,
            surname: values.surname,
            country: values.country,
            birthday: values.birthday
        }
        return this.props.dispatch(addRecord(contract));
    }
    render() {
        return(
            <div>
                <Grid container spacing={24} justify='center'>
                    <Grid item xs={4}>
                        <InputForm 
                            onSubmit={this.handleForm}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <RecordList />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default connect()(App);