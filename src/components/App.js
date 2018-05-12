import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addRecord, newMessage } from '../redux/actions';

import InputForm from './InputForm';
import RecordList from './RecordList';
import MessageBoard from './MessageBoard';

import  Grid  from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
class App extends Component {
    
    handleForm = values => {
        const contract = {
            name: values.name,
            surname: values.surname,
            country: values.country,
            birthday: values.birthday
        }
        return(
            this.props.dispatch(addRecord(contract)),
            this.props.dispatch(newMessage(contract))
        ) 
        
    }
    render() {
        return(
            <div>
                <Grid container spacing={24} justify='center'>
                    <Grid item xs={12} align='center'> 
                        <Typography variant='display1' >
                            Intive - FDV Exercise
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <InputForm 
                            onSubmit={this.handleForm}
                        />
                        <br/>
                        <MessageBoard />
                    </Grid>
                    <Grid item xs={5} >
                        <RecordList />
                    </Grid>
                </Grid>
                <Typography variant='display1' align='right'>
                    Marcelo Agustin Beghe
                </Typography>
            </div>
        )
    }
}

export default connect()(App);